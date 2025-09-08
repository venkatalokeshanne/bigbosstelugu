'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fetchFeaturedNews, urlFor } from '../lib/sanity-client'

export default function NewsSection() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const featuredNews = await fetchFeaturedNews()
        setNews(featuredNews)
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const formatDate = (dateString) => {
    if (!dateString) return 'Recently'
    
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center">
            <div className="inline-block p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl">
              <div className="animate-spin w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-white text-lg">Loading latest news...</p>
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
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full mb-6">
            <span className="text-green-400 font-semibold">LATEST NEWS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Breaking
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              NEWS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments, eliminations, and exclusive 
            content from inside the Bigg Boss Telugu 9 house.
          </p>
        </div>

        {news.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 max-w-md mx-auto">
              <span className="text-6xl mb-4 block">📰</span>
              <h3 className="text-white text-xl font-bold mb-2">No News Yet</h3>
              <p className="text-gray-400">Check back soon for the latest updates!</p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Link 
                key={article._id}
                href={`/news/${article.slug}`}
                className="group"
              >
                <article className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                  {/* Featured Image */}
                  {article.featuredImage && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={urlFor(article.featuredImage).width(600).height(400).url()}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      {article.category && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-white/10 text-white border-white/20">
                            {article.category.toUpperCase()}
                          </span>
                        </div>
                      )}
                      
                      {/* Featured Badge */}
                      {index === 0 && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                            FEATURED
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-6">
                    {!article.featuredImage && article.category && (
                      <div className="mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-white/10 text-white border-white/20">
                          {article.category.toUpperCase()}
                        </span>
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-green-400 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>By {article.author || 'BB Telugu Team'}</span>
                      <span>{formatDate(article.publishedAt)}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}

        {/* Call to Action */}
        {news.length > 0 && (
          <div className="text-center mt-16">
            <Link 
              href="/news" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl font-bold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              View All News
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
