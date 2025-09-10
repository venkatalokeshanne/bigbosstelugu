'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ContentSection() {
  const [activeTab, setActiveTab] = useState('voting-process')

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container-custom">
        {/* Main Article Style Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Bigg Boss Telugu 9 Voting, BB Telugu Nine Contestants and Latest Updates
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            As you know, you have to vote to save any Bigg Boss Telugu Nine contestant. So Bigg Boss Telugu 9 
            Voting process is the same for this year as well. Keep reading to know how to vote 
            BB Telugu 9 contestants to save them from elimination.
          </p>
        </div>

        {/* Featured Image Section */}
        <div className="mb-16 text-center">
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/bigboss.jpg"
              alt="Bigg Boss Telugu 9 Vote Featured Image - BB Telugu Nine Voting Process"
              width={1024}
              height={615}
              className="w-full h-auto"
              priority
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm">
              Image Source: Star Maa, Hotstar
            </div>
          </div>
        </div>

        {/* Introduction Content */}
        <div className="prose prose-lg prose-invert max-w-6xl mx-auto mb-16">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              After so much anticipation, it is officially announced that Season 9 of Bigg Boss Telugu 
              is going to be started in September. Everyone thought that the most controversial show, 
              Bigg Boss Telugu Nine will be canceled this year as the team already hosted the Bigg Boss 
              Telugu Non Stop OTT version.
            </p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              But the makers have decided to go ahead and conduct the show with the at-most precautions. 
              The makers first decided to cancel the show this year, but due to demand and requests from 
              the audience, they decided to take risks and continue Bigg Boss 9 Telugu Show.
            </p>

            <p className="text-gray-300 leading-relaxed">
              <strong className="text-purple-400">Akkineni Nagarjuna</strong> appears as the host in 
              Bigg Boss Telugu 9 whereas Jr. NTR hosted Season 1 and Nani Hosted the Show in Season 2. 
              Akkineni Nagarjuna Was the host for the past five years. He has hosted Bigg Boss Telugu 3, 
              Bigg Boss 4 Telugu, Bigg Boss Non stop, and now, Bigg Boss 9 Telugu.
            </p>
          </div>
        </div>

        {/* Show Details Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Bigg Boss Telugu Show Details
          </h2>
          <div className="overflow-x-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full text-left">
                <tbody className="divide-y divide-white/10">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-purple-400">Season</td>
                    <td className="px-6 py-4 text-gray-300">Bigg Boss 9 Telugu</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-purple-400">Host</td>
                    <td className="px-6 py-4 text-gray-300">Akkineni Nagarjuna</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-purple-400">Number of Housemates</td>
                    <td className="px-6 py-4 text-gray-300">15</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-purple-400">Timing</td>
                    <td className="px-6 py-4 text-gray-300">9:00 PM to 10:00 PM</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-purple-400">No of Days</td>
                    <td className="px-6 py-4 text-gray-300">100 Days</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-purple-400">Streaming Partners</td>
                    <td className="px-6 py-4 text-gray-300">Disney Plus Hotstar</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-purple-400">Watch on</td>
                    <td className="px-6 py-4 text-gray-300">Star Maa</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-purple-400">Genre</td>
                    <td className="px-6 py-4 text-gray-300">Reality Show</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-purple-400">Release Date</td>
                    <td className="px-6 py-4 text-gray-300">September 07, 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tabbed Content Section */}
        <div className="mb-16">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'voting-process', label: 'Voting Process', icon: '🗳️' },
              { id: 'hotstar-voting', label: 'Hotstar Voting', icon: '📱' },
              { id: 'missed-call', label: 'Missed Call Voting', icon: '📞' },
              { id: 'google-voting', label: 'Google Voting', icon: '🌐' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white shadow-lg'
                    : 'bg-white/5 backdrop-blur-xl border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            {activeTab === 'voting-process' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Bigg Boss Telugu Vote Process</h3>
                <div className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">
                    As usual Bigg Boss Telugu Voting Poll is conducted every week to eliminate one contestant 
                    and the person with the least votes will be eliminated from the show. Hotstar has joined 
                    as a streaming partner as well as the official voting medium of Bigg Boss Show.
                  </p>
                  
                  <p className="leading-relaxed">
                    Now you can vote and Watch Bigg Boss Telugu Season 9 on Hotstar App. Star Maa Bigg Boss 
                    Telugu Vote Results are announced by host, Akkineni Nagarjuna every week. Bigg Boss Telugu 
                    Season 9, the Biggest Reality show in Telugu airing on Star Maa television and also live 
                    stream on their streaming partner Hotstar App.
                  </p>

                  <p className="leading-relaxed">
                    Bigg Boss Telugu Contestants are going to stay in the house for 100 days. The house is 
                    equipped with 70 cameras covering each and every corner of the bigg boss house. Unlike 
                    last seasons, This year there will be wild card entry as only 14 contestants entered 
                    into bigg boss house.
                  </p>

                  <div className="bg-gradient-to-r from-purple-500/10 to-red-500/10 border border-purple-400/20 rounded-xl p-6 mt-8">
                    <h4 className="text-lg font-bold text-purple-400 mb-4">🕘 Show Timings</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span>Weekdays: 9:00 PM on Star Maa TV</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span>Weekends: 8:00 PM on Star Maa TV</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hotstar-voting' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">How to vote Bigg Boss Telugu Contestants on Hotstar App?</h3>
                <div className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">
                    This is the most asked question on the internet now. This year Bigg Boss Team introduced 
                    a new Bigg Boss Telugu Vote Method. Now you can vote for your favorite contestant directly 
                    from Hotstar App.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/20 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-400 mb-4">📱 Step-by-Step Voting Process:</h4>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>First Download the Hotstar App from Google Play Store.</li>
                      <li>After Downloading the App Install the app on your mobile phone.</li>
                      <li>Sign up using your Google account/Gmail or mobile number.</li>
                      <li>Search for "Bigg Boss Telugu Show" or "Bigg Boss 9 Telugu Vote" on Hotstar</li>
                      <li>Click on the official Banner of the Show.</li>
                      <li>You will now see a line "Voting for today is now open" along with the VOTE button.</li>
                      <li>After clicking the vote button you will see the list of nominated contestants.</li>
                      <li>To vote for your favorite contestant, tap on the photo, and submit your voting.</li>
                      <li>Remember if you tap once, you register one vote. Tap twice, register 2 votes.</li>
                      <li>You can register a maximum of 10 votes per day by tapping on the contestant photo.</li>
                    </ol>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/20 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-yellow-400 mb-3">⚠️ Important Voting Rules:</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>You can only vote 10 votes per day through Hotstar voting</li>
                      <li>Overall 50 Bigg Boss Telugu votes per week with a single account</li>
                      <li>You can split the 10 votes to different participants or use all 10 votes for a single participant</li>
                      <li>Use different Google accounts to vote more</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'missed-call' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Bigg Boss Telugu Missed Call Voting</h3>
                <div className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">
                    Missed call voting also opened to register your vote for the favorite contestants. 
                    To Vote Bigg Boss Telugu Contestants follow this method if you do not have internet access. 
                    This method does not cost you anything.
                  </p>
                  
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-green-400 mb-4">📞 How Missed Call Voting Works:</h4>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>Find your favorite contestant's missed call number from the list</li>
                      <li>Dial the number and let it ring once</li>
                      <li>Cut the call immediately - you won't be charged</li>
                      <li>You will receive a confirmation SMS</li>
                      <li>You can vote up to 50 times per week through missed call</li>
                    </ol>
                  </div>

                  <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-red-400 mb-3">🚫 Important Note:</h4>
                    <p>Please note that missed call numbers will be updated weekly based on nominations. 
                    Check this page regularly for the latest numbers.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'google-voting' && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Bigg Boss Telugu Vote Online Through Google</h3>
                <div className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">
                    This was the most awaited option for the Bigg Boss fans and it was available now. 
                    It's not a technical thing to vote your favorite contestant directly on google instead 
                    of giving calls for the assigned numbers.
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-purple-400 mb-4">🌐 Google Voting Process:</h4>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>First of all search for "Google.co.in" from any browser.</li>
                      <li>Simply search for "Bigg Boss Telugu Vote" or "Bigg Boss 9 Telugu Vote"</li>
                      <li>Click on your favorite contestant from the voting poll</li>
                      <li>You can increase the number up to 50 votes per day from a single Google Account</li>
                      <li>Don't forget to submit the votes after voting for the contestant</li>
                      <li>Votes submitted before every Friday 12 AM are taken into count</li>
                    </ol>
                  </div>

                  <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-400 mb-3">💡 Pro Tips:</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Use multiple Google accounts to cast more votes</li>
                      <li>Vote early in the week for maximum impact</li>
                      <li>Share voting links with friends and family</li>
                      <li>Follow voting deadlines strictly</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Important Disclaimer */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-red-400 mb-4">⚠️ Important Disclaimer</h3>
          <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Please note that our bigg boss telugu vote poll is <strong>unofficial</strong>. Only Votes from 
            the Hotstar app are official and considered by bigg boss team. Votes from our website and other 
            unofficial sites are not counted. You must cast your vote through Hotstar App or give a Missed 
            call to the official numbers to get your votes counted.
          </p>
        </div>
      </div>
    </section>
  )
}
