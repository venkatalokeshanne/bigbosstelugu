'use client'

import { useState } from 'react'

const CONTESTANTS = [
  'Contestant 1',
  'Contestant 2', 
  'Contestant 3',
  'Contestant 4',
  'Contestant 5',
  'Contestant 6'
]

export default function FallbackVoting() {
  const [selectedContestant, setSelectedContestant] = useState('')
  const [hasVoted, setHasVoted] = useState(false)

  const handleVote = () => {
    if (selectedContestant) {
      setHasVoted(true)
      // Here you could send the vote to your backend
      console.log(`Vote cast for: ${selectedContestant}`)
    }
  }

  const resetVote = () => {
    setHasVoted(false)
    setSelectedContestant('')
  }

  if (hasVoted) {
    return (
      <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-green-400 mb-2">Vote Submitted!</h3>
          <p className="text-green-200">Thank you for voting for <strong>{selectedContestant}</strong></p>
        </div>
        
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
          <p className="text-blue-300 text-sm font-medium mb-2">For official voting:</p>
          <ul className="text-blue-200 text-sm space-y-1">
            <li>• Disney+ Hotstar App (Most Impact)</li>
            <li>• SMS: "BB {selectedContestant}" to 58888</li>
          </ul>
        </div>
        
        <button 
          onClick={resetVote}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Vote Again
        </button>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">Quick Vote</h3>
        <p className="text-gray-400">Cast your support vote (demo)</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
        {CONTESTANTS.map((contestant) => (
          <button
            key={contestant}
            onClick={() => setSelectedContestant(contestant)}
            className={`p-4 rounded-lg border transition-all duration-200 ${
              selectedContestant === contestant
                ? 'border-blue-500 bg-blue-900/30 text-blue-300'
                : 'border-gray-600 bg-gray-700/50 text-gray-300 hover:border-gray-500 hover:bg-gray-700'
            }`}
          >
            <div className="text-sm font-medium">{contestant}</div>
          </button>
        ))}
      </div>
      
      <div className="text-center">
        <button
          onClick={handleVote}
          disabled={!selectedContestant}
          className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
            selectedContestant
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          Submit Vote
        </button>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 text-center">
        This is a demo vote. For official voting, use Disney+ Hotstar or SMS.
      </div>
    </div>
  )
}
