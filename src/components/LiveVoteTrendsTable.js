'use client'

import { useState, useEffect } from 'react'
import contestantsData from '../data/contestants.json'

export default function LiveVoteTrendsTable() {
  const [votes, setVotes] = useState({})
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/votes')
      .then(res => res.json())
      .then(data => {
        setVotes(data.votes || {})
        setTotal(data.total || 0)
      })
      .catch(err => console.error('Error loading voting trends:', err))
      .finally(() => setLoading(false))
  }, [])

  const contestants = contestantsData.contestants.filter(c => c.status === 'active')
  const ranked = [...contestants]
    .map(c => ({ ...c, count: votes[c.slug] || 0 }))
    .sort((a, b) => b.count - a.count)

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="animate-spin w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/20">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-white/10">
            <th className="px-6 py-4 text-yellow-400 font-semibold">Rank</th>
            <th className="px-6 py-4 text-yellow-400 font-semibold">Contestant</th>
            <th className="px-6 py-4 text-yellow-400 font-semibold">Vote Share</th>
            <th className="px-6 py-4 text-yellow-400 font-semibold">Votes</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {ranked.map((c, index) => {
            const percentage = total > 0 ? ((c.count / total) * 100).toFixed(2) : '0.00'
            return (
              <tr key={c.slug} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 text-white font-bold">#{index + 1}</td>
                <td className="px-6 py-4 text-white">{c.name}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-white/10 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-300 text-sm">{percentage}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-300">{c.count.toLocaleString()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
