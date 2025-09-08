'use client'

import { useState, useEffect } from 'react'
import { fetchFAQs } from '../lib/sanity-client'

export default function FAQSection() {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const faqData = await fetchFAQs()
        setFaqs(faqData)
      } catch (error) {
        console.error('Error fetching FAQs:', error)
      } finally {
        setLoading(false)
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
            Frequently Asked
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              QUESTIONS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Got questions about Bigg Boss Telugu 9 voting? We've got answers! 
            Find everything you need to know about the voting process.
          </p>
        </div>

        {faqs.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 max-w-md mx-auto">
              <span className="text-6xl mb-4 block">❓</span>
              <h3 className="text-white text-xl font-bold mb-2">No FAQs Yet</h3>
              <p className="text-gray-400">Check back soon for frequently asked questions!</p>
            </div>
          </div>
        ) : (
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
        )}

        {/* Additional Help Section */}
        {faqs.length > 0 && (
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
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
