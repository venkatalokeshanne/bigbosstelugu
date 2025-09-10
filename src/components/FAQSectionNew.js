'use client'

import { useState, useEffect } from 'react'

export default function FAQSection() {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [openIndex, setOpenIndex] = useState(null)

  // Reference website FAQs as fallback
  const defaultFAQs = [
    {
      _id: 'default-1',
      question: 'Who will win Bigg Boss 9 Telugu Title?',
      answer: 'The winner will be decided by public voting. The contestant with the highest number of votes in the finale will win the Bigg Boss 9 Telugu title. Keep voting for your favorite contestant!'
    },
    {
      _id: 'default-2',
      question: 'Who will be eliminated this week?',
      answer: 'The contestant with the least number of votes among the nominated contestants will be eliminated. Elimination is announced every weekend by host Akkineni Nagarjuna.'
    },
    {
      _id: 'default-3',
      question: 'Who got least votes in Bigg Boss Telugu?',
      answer: 'Vote counts are revealed during the weekend episodes. The contestant with the minimum votes gets eliminated from the house.'
    },
    {
      _id: 'default-4',
      question: 'Who got the highest votes in BB9 Telugu Voting?',
      answer: 'The voting results and percentages are announced during the elimination episodes. The contestant leading in votes is usually safe from elimination.'
    },
    {
      _id: 'default-5',
      question: 'How can I vote for Bigg Boss in Telugu in USA?',
      answer: 'International viewers can vote through the Hotstar app with a valid subscription. You can also participate in online polls on official websites.'
    },
    {
      _id: 'default-6',
      question: 'Who is eliminated in BB9 Telugu today?',
      answer: 'Elimination results are announced every weekend during the special episodes hosted by Nagarjuna. Check our updates section for the latest elimination news.'
    },
    {
      _id: 'default-7',
      question: 'Where can I watch Bigg Boss in Telugu?',
      answer: 'You can watch Bigg Boss Telugu 9 on Star Maa TV (9 PM on weekdays, 8 PM on weekends) or stream live on Disney+ Hotstar app.'
    },
    {
      _id: 'default-8',
      question: 'Who is the host of Bigg Boss season 9 Telugu?',
      answer: 'Akkineni Nagarjuna is the host of Bigg Boss Telugu Season 9. He has been hosting the show for the past several seasons.'
    },
    {
      _id: 'default-9',
      question: 'How can I watch Bigg Boss in Telugu in USA?',
      answer: 'International viewers can watch through Disney+ Hotstar with international subscription or through official Star Maa international streaming services.'
    },
    {
      _id: 'default-10',
      question: 'How to Vote Bigg Boss Telugu Nine?',
      answer: 'You can vote for BB Telugu 9 through: 1) Disney+ Hotstar app (up to 10 votes per day), 2) Bigg Boss Telugu Nine missed call numbers (50 votes per week), 3) Google voting polls (unofficial), 4) SMS voting when available for BB Telugu 9.'
    },
    {
      _id: 'default-11',
      question: 'Who is leading Bigg Boss Telugu Nine?',
      answer: 'The leading BB Telugu 9 contestant changes weekly based on voting trends. Check our Bigg Boss Telugu Nine voting poll results and weekly updates for current standings.'
    },
    {
      _id: 'default-12',
      question: 'Who has the highest votes in Bigg Boss Telugu Nine?',
      answer: 'BB Telugu 9 vote counts are revealed during elimination episodes. The Bigg Boss Telugu Nine contestant with maximum votes is typically announced as safe from elimination during weekend episodes.'
    }
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/faqs');
        if (response.ok) {
          const faqData = await response.json();
          // Use Sanity FAQs if available, otherwise use default FAQs
          setFaqs(faqData.length > 0 ? faqData : defaultFAQs);
        } else {
          console.error('Failed to fetch FAQs, using default');
          setFaqs(defaultFAQs);
        }
      } catch (error) {
        console.error('Error fetching FAQs, using default:', error);
        setFaqs(defaultFAQs);
      } finally {
        setLoading(false);
      }
    }

    fetchData()
  }, [])

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center">
            <div className="inline-block p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl">
              <div className="animate-spin w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-white text-lg">Loading FAQs...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-500/5 to-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full mb-6">
            <span className="text-blue-400 font-semibold">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Bigg Boss Telugu 9 Voting FAQ 2025 - Common Questions Answered
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Hyderabad Telugu Star MAA Guide
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-4">
            How to Vote BB Telugu 9? Voting Rules & Procedures Explained Telugu
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Got questions about Bigg Boss Telugu 9 voting? We've got answers! 
            Find everything you need to know about the voting process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={faq._id} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left focus:outline-none focus:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <span className="text-green-400 mr-4 flex-shrink-0 font-bold text-lg">Q{index + 1}.</span>
                      <h3 className="text-xl font-bold text-white pr-4 leading-tight">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <svg
                        className={`w-6 h-6 text-green-400 transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-8">
                    <div className="pl-12">
                      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/20">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help Section */}
        {faqs.length > 0 && (
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Can't find the answer you're looking for? Get in touch with our support team 
                or check the official Bigg Boss Telugu social media pages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl font-bold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  Contact Support
                </a>
                <a
                  href="https://twitter.com/StarMaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/20 text-white rounded-2xl font-bold hover:bg-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105"
                >
                  Follow on Twitter
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FAQ Schema */}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((faq, index) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      )}
    </section>
  )
}
