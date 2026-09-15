'use client'

import { useState, useEffect, useRef } from 'react'
import { getSupabaseBrowserClient } from '../lib/supabase-browser-client'
import { pushGTMEvent } from '../utils/analytics'

const NAME_KEY = 'bb10_chat_name'

// De-duplicates by id while preserving order — a defensive guard against
// the initial GET and a realtime INSERT landing for the same row (possible
// race between the fetch resolving and the subscription delivering).
function mergeUniqueById(existing, incoming) {
  // Postgres returns bigint ids as strings over the REST/pg client, but
  // Supabase Realtime's replication payload delivers them as numbers — key
  // on the string form so the same row never ends up as two map entries.
  const byId = new Map(existing.map((m) => [String(m.id), m]))
  incoming.forEach((m) => byId.set(String(m.id), { ...m, id: String(m.id) }))
  return [...byId.values()].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
}

// Shared live-chat logic (initial fetch + Supabase Realtime subscription +
// sending) used by both the full-page chat room and the floating chat widget,
// so there's a single source of truth for messages instead of two
// independent connections drifting out of sync.
export function useLiveChat() {
  const [messages, setMessages] = useState([])
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const seenIds = useRef(new Set())

  useEffect(() => {
    try {
      const savedName = localStorage.getItem(NAME_KEY)
      if (savedName) setName(savedName)
    } catch {
      // ignore
    }

    fetch('/api/chat', { cache: 'no-store' })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load chat')
        return res.json()
      })
      .then((data) => {
        const initial = data.messages || []
        initial.forEach((m) => seenIds.current.add(m.id))
        setMessages((prev) => mergeUniqueById(prev, initial))
      })
      .catch((err) => {
        console.error('Error loading chat:', err)
        setLoadError(true)
      })
      .finally(() => setLoading(false))

    // A unique channel name per hook instance — this hook can be mounted more
    // than once at a time (the floating widget is global while a page can
    // also render the full chat room), and Supabase Realtime errors if two
    // subscriptions share a channel name.
    const channelName = `chat_messages_realtime_${Math.random().toString(36).slice(2)}`
    const supabase = getSupabaseBrowserClient()
    const channel = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'chat_messages' },
        (payload) => {
          const row = payload.new
          seenIds.current.add(row.id)
          setMessages((prev) =>
            mergeUniqueById(prev, [
              { id: row.id, name: row.name, message: row.message, createdAt: row.created_at },
            ])
          )
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const sendMessage = async () => {
    if (!text.trim() || sending) return false

    const cleanName = name.trim() || 'BB Fan'
    setSending(true)
    setError(null)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: cleanName, message: text.trim() }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.message || data.error || 'Could not send your message.')
        return false
      }

      if (data.message) {
        seenIds.current.add(data.message.id)
        setMessages((prev) => mergeUniqueById(prev, [data.message]))
      }

      setText('')
      try {
        localStorage.setItem(NAME_KEY, cleanName)
      } catch {
        // ignore
      }
      pushGTMEvent('chat_message_sent')
      return true
    } catch (err) {
      console.error('Error sending chat message:', err)
      setError('Something went wrong. Please try again.')
      return false
    } finally {
      setSending(false)
    }
  }

  return {
    messages,
    name,
    setName,
    text,
    setText,
    loading,
    loadError,
    sending,
    error,
    sendMessage,
  }
}
