'use client'

import { useState, useEffect } from 'react'

function buildTree(flatComments) {
  const byId = new Map()
  flatComments.forEach(c => byId.set(c.id, { ...c, replies: [] }))

  const roots = []
  byId.forEach(comment => {
    if (comment.parentId && byId.has(comment.parentId)) {
      byId.get(comment.parentId).replies.push(comment)
    } else {
      roots.push(comment)
    }
  })

  // Newest top-level comment first; replies stay oldest-first within a thread.
  roots.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  return roots
}

function formatTimeAgo(dateString) {
  const date = new Date(dateString)
  const diffInSeconds = Math.floor((Date.now() - date.getTime()) / 1000)

  if (diffInSeconds < 60) return 'Just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
  return `${Math.floor(diffInSeconds / 86400)}d ago`
}

function ReplyForm({ onSubmit, onCancel, submitting }) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!message.trim() || submitting) return
    onSubmit({ name: name.trim() || 'BB Fan', message: message.trim() })
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 pl-4 border-l-2 border-purple-500/30">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name (optional)"
        maxLength={40}
        className="w-full mb-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write a reply..."
        maxLength={500}
        rows={2}
        autoFocus
        className="w-full mb-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-400/50 resize-none"
      />
      <div className="flex items-center gap-2">
        <button
          type="submit"
          disabled={!message.trim() || submitting}
          className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all duration-300 ${
            !message.trim() || submitting
              ? 'bg-white/5 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-red-600 text-white hover:from-purple-700 hover:to-red-700'
          }`}
        >
          {submitting ? 'Posting…' : 'Reply'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

function Comment({ comment, depth, replyingTo, setReplyingTo, onReply, submitting, error }) {
  const isReplying = replyingTo === comment.id

  return (
    <div className={depth > 0 ? 'mt-3' : ''}>
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white font-semibold">{comment.name}</span>
          <span className="text-gray-400 text-xs">{formatTimeAgo(comment.createdAt)}</span>
        </div>
        <p className="text-gray-300 leading-relaxed whitespace-pre-wrap mb-2">{comment.message}</p>
        <button
          onClick={() => setReplyingTo(isReplying ? null : comment.id)}
          className="text-purple-400 text-xs font-semibold hover:text-purple-300 transition-colors"
        >
          {isReplying ? 'Cancel' : 'Reply'}
        </button>

        {isReplying && (
          <>
            {error && (
              <div className="mt-3 rounded-lg p-2 text-center text-xs bg-red-500/20 text-red-300 border border-red-500/30">
                {error}
              </div>
            )}
            <ReplyForm
              submitting={submitting}
              onCancel={() => setReplyingTo(null)}
              onSubmit={(data) => onReply(comment.id, data)}
            />
          </>
        )}
      </div>

      {comment.replies.length > 0 && (
        <div className="pl-6 mt-3 space-y-3 border-l border-white/10 ml-4">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              depth={depth + 1}
              replyingTo={replyingTo}
              setReplyingTo={setReplyingTo}
              onReply={onReply}
              submitting={submitting}
              error={error}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function CommentsSection() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const [replyingTo, setReplyingTo] = useState(null)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      const res = await fetch('/api/comments')
      if (!res.ok) throw new Error('Failed to load comments')
      const data = await res.json()
      setComments(data.comments || [])
    } catch (err) {
      console.error('Error loading comments:', err)
      setLoadError(true)
    } finally {
      setLoading(false)
    }
  }

  const postComment = async ({ name, message, parentId }) => {
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message, parentId: parentId ?? null }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Could not post your comment.')
        return
      }

      setComments(prev => [...prev, data.comment])
      return true
    } catch (err) {
      console.error('Error posting comment:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message.trim() || submitting) return

    const ok = await postComment({ name: name.trim() || 'BB Fan', message: message.trim() })
    if (ok) setMessage('')
  }

  const handleReply = async (parentId, data) => {
    const ok = await postComment({ ...data, parentId })
    if (ok) setReplyingTo(null)
  }

  const tree = buildTree(comments)

  return (
    <section id="comments-section" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="container-custom relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-6">
            <span className="text-blue-400 font-semibold">FAN COMMENTS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            What Fans Are Saying About Bigg Boss Telugu 10
          </h2>
          <p className="text-gray-400">
            Share your thoughts on this week's episodes and contestants — no sign-up needed.
          </p>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 mb-10">
          {error && !replyingTo && (
            <div className="mb-4 rounded-xl p-3 text-center text-sm bg-red-500/20 text-red-300 border border-red-500/30">
              {error}
            </div>
          )}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            maxLength={40}
            className="w-full mb-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share your thoughts on Bigg Boss Telugu 10..."
            maxLength={500}
            rows={3}
            className="w-full mb-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400/50 resize-none"
          />
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-xs">{message.length}/500</span>
            <button
              type="submit"
              disabled={!message.trim() || submitting}
              className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                !message.trim() || submitting
                  ? 'bg-white/5 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-red-600 text-white hover:from-purple-700 hover:to-red-700'
              }`}
            >
              {submitting ? 'Posting…' : 'Post Comment'}
            </button>
          </div>
        </form>

        {/* Comments List */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin w-10 h-10 border-4 border-purple-400 border-t-transparent rounded-full"></div>
          </div>
        ) : loadError ? (
          <div className="text-center py-10 text-gray-400">
            <p className="mb-2">⚠️ Comments are temporarily unavailable.</p>
            <p className="text-sm text-gray-400">Please refresh the page in a moment.</p>
          </div>
        ) : tree.length === 0 ? (
          <p className="text-center text-gray-400">Be the first to share your thoughts!</p>
        ) : (
          <div className="space-y-4">
            {tree.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                depth={0}
                replyingTo={replyingTo}
                setReplyingTo={setReplyingTo}
                onReply={handleReply}
                submitting={submitting}
                error={error}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
