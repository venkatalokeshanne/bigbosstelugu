import { generateStructuredData } from '../../utils/seo'
import SEOEnhancer from '../../components/SEOEnhancer'
import Link from 'next/link'

export const metadata = {
  title: 'Bigg Boss Telugu 9 Voting FAQ | BB Telugu 9 Frequently Asked Questions',
  description: 'Get answers to frequently asked questions about Bigg Boss Telugu 9 voting, elimination process, contestant details, and show updates. Complete FAQ guide for BB Telugu Season 9.',
  keywords: [
    'Bigg Boss Telugu 9 FAQ', 'BB Telugu 9 questions answers', 'Bigg Boss Telugu voting help',
    'BB Telugu 9 how to vote', 'Bigg Boss Telugu 9 rules', 'voting process FAQ'
  ]
}

export default function FAQ() {
  const structuredData = generateStructuredData({
    title: metadata.title,
    description: metadata.description,
    url: 'https://www.bigbossteluguvotes.in/faq',
    type: 'FAQPage'
  })

  const faqs = [
    {
      question: "How can I vote for Bigg Boss Telugu 9?",
      answer: "You can vote for your favorite contestant through multiple methods: Disney+ Hotstar app, missed call voting, Google Assistant, and our website polls."
    },
    {
      question: "Is voting for Bigg Boss Telugu 9 free?",
      answer: "Yes, voting through most methods is free. Hotstar app voting is free for premium subscribers, and missed call voting may have standard call charges."
    },
    {
      question: "How many votes can I cast per day?",
      answer: "You can cast up to 50 votes per day per method. The voting limit resets at midnight IST every day."
    },
    {
      question: "When does voting close each week?",
      answer: "Voting typically closes on Friday night before the weekend episodes. Exact timing is announced during the show."
    },
    {
      question: "Who can vote for Bigg Boss Telugu 9?",
      answer: "Anyone with access to voting platforms can vote. For official Hotstar voting, you need a Hotstar account and be in supported regions."
    },
    {
      question: "How is the elimination decided?",
      answer: "Elimination is primarily based on public voting. The contestant with the lowest votes is typically eliminated, though the show may have special rules."
    },
    {
      question: "Can international viewers vote?",
      answer: "International viewers can participate in online polls but may have limited access to official voting methods like Hotstar depending on their region."
    },
    {
      question: "What are the missed call voting numbers?",
      answer: "Missed call voting numbers are announced during episodes and displayed on screen. Each contestant has a unique number for voting."
    },
    {
      question: "How do I vote using Google Assistant?",
      answer: "Simply say 'Hey Google, I want to vote for Bigg Boss Telugu' and follow the voice prompts to cast your vote."
    },
    {
      question: "Are the voting results shown publicly?",
      answer: "Official voting results are not disclosed. However, voting trends and predictions are available based on various polls and analysis."
    },
    {
      question: "What happens if there's a tie in voting?",
      answer: "In case of a tie, the show makers typically make the final decision or may save both contestants based on show dynamics."
    },
    {
      question: "Can I change my vote after casting it?",
      answer: "No, once you cast a vote, it cannot be changed. Each vote is final and counts towards the contestant you selected."
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <SEOEnhancer 
          title="Bigg Boss Telugu 9 Voting FAQ"
          description="Comprehensive FAQ guide for Bigg Boss Telugu 9 voting and show information"
        />
        
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Bigg Boss Telugu 9 FAQ
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get answers to all your questions about Bigg Boss Telugu Season 9 voting, contestants, and show updates
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-600 pb-4">
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-start">
                      <span className="text-yellow-400 mr-2">Q{index + 1}:</span>
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 ml-8">
                      <span className="text-green-400 mr-2">A:</span>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Voting Methods</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Disney+ Hotstar App</li>
                  <li>• Missed Call Voting</li>
                  <li>• Google Assistant</li>
                  <li>• Online Polls</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Show Timings</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Mon-Fri: 9:30 PM IST</li>
                  <li>• Saturday: 9:00 PM IST</li>
                  <li>• Sunday: 9:00 PM IST</li>
                  <li>• Streaming on Hotstar</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Quick Links</h3>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• <Link href="/contestants" className="text-yellow-400 hover:text-yellow-300">View Contestants</Link></li>
                  <li>• <Link href="/voting-guide" className="text-yellow-400 hover:text-yellow-300">Voting Guide</Link></li>
                  <li>• <Link href="/news" className="text-yellow-400 hover:text-yellow-300">Latest News</Link></li>
                  <li>• <Link href="/contact" className="text-yellow-400 hover:text-yellow-300">Contact Support</Link></li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Still Have Questions?</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you couldn't find the answer to your question above, feel free to reach out to us. 
                  We're here to help you with any queries about Bigg Boss Telugu 9 voting or the show.
                </p>
                <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400">
                  <p className="text-blue-300 font-semibold mb-2">Contact Options:</p>
                  <ul className="space-y-1">
                    <li>• Email: support@bigbossteluguvotes.in</li>
                    <li>• Contact Form: Available on our contact page</li>
                    <li>• Response Time: Within 24 hours</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/"
              className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-8 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 mr-4"
            >
              Start Voting
            </Link>
            <Link 
              href="/voting-guide"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Voting Guide
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
