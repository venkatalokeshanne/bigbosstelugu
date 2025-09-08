export default function HowToVote() {
  const votingMethods = [
    {
      icon: '📺',
      title: 'Disney+ Hotstar App',
      description: 'Official voting platform with maximum impact',
      steps: [
        'Download Disney+ Hotstar app',
        'Login with your account',
        'Navigate to Bigg Boss Telugu 9',
        'Click on "Vote" section',
        'Select your favorite contestant',
        'Submit your vote'
      ],
      isPrimary: true
    },
    {
      icon: '📱',
      title: 'SMS Voting',
      description: 'Quick voting via text message',
      steps: [
        'Open your SMS app',
        'Type "BB [Contestant Name]"',
        'Send to 58888',
        'You will receive confirmation',
        'Standard SMS charges apply'
      ],
      isPrimary: false
    },
    {
      icon: '🌐',
      title: 'Online Polls',
      description: 'Vote on our website polls',
      steps: [
        'Scroll to voting section above',
        'View current nominations',
        'Click on your favorite contestant',
        'Vote multiple times if allowed',
        'Share with friends'
      ],
      isPrimary: false
    }
  ]

  return (
    <section className="py-16 bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            How to Vote for Your Favorite Contestant
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Multiple ways to cast your vote and support your favorite Bigg Boss Telugu 9 contestant. 
            Choose the method that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {votingMethods.map((method, index) => (
            <div 
              key={index}
              className={`card p-6 ${method.isPrimary ? 'ring-2 ring-primary-500 relative' : ''}`}
            >
              {method.isPrimary && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-300">
                  {method.description}
                </p>
              </div>

              <div className="space-y-3">
                {method.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-800 bg-opacity-50 text-primary-400 rounded-full flex items-center justify-center text-sm font-semibold border border-primary-700">
                      {stepIndex + 1}
                    </div>
                    <p className="text-gray-300 text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">
            ⚠️ Important Voting Guidelines
          </h3>
          <ul className="space-y-2 text-yellow-700">
            <li>• Voting closes every Friday at 11:59 PM before elimination episodes</li>
            <li>• You can vote multiple times, but platforms may have daily limits</li>
            <li>• Official Hotstar votes carry more weight than online polls</li>
            <li>• SMS voting charges standard rates as per your telecom provider</li>
            <li>• Vote responsibly and support fair play in the game</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
