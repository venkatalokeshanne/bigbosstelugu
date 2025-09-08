'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fetchNews, fetchFeaturedNews, urlFor, formatTimeAgo } from '@/lib/sanity-client'

export default function NewsPage() {
  const [news, setNews] = useState([])
  const [featuredNews, setFeaturedNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsData, featuredData] = await Promise.all([
          fetchNews(),
          fetchFeaturedNews()
        ])
        setNews(newsData)
        setFeaturedNews(featuredData)
      } catch (error) {
        console.error('Error fetching news:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredNews = selectedCategory === 'all' 
    ? news 
    : news.filter(article => article.category === selectedCategory)

  const categories = ['all', ...new Set(news.map(article => article.category).filter(Boolean))]

  const getCategoryColor = (category) => {
    switch (category?.toLowerCase()) {
      case 'elimination':
        return 'bg-red-500/20 text-red-400 border-red-500/30'
      case 'task':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'drama':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'announcement':
        return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'wildcard':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'eviction':
        return 'bg-red-600/20 text-red-500 border-red-600/30'
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

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
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
        <div className="container-custom relative z-10">
          <div className="text-center py-20">
            <div className="inline-block p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl">
              <div className="animate-spin w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-white text-lg">Loading news articles...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Page Header */}
        <div className="text-center py-20">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-green-400 font-semibold">LATEST NEWS</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Bigg Boss Telugu 9
            <span className="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              NEWS & UPDATES
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest developments, eliminations, drama, and exclusive 
            content from inside the Bigg Boss Telugu 9 house. Never miss a moment!
          </p>
        </div>

        {/* Featured News Section */}
        {featuredNews.length > 0 && selectedCategory === 'all' && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">🌟 Featured Stories</h2>
              <p className="text-gray-400">Don't miss these trending updates</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredNews.slice(0, 3).map((article) => (
                <Link 
                  key={article._id}
                  href={`/news/${article.slug}`}
                  className="group"
                >
                  <article className="bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-red-500/10 backdrop-blur-lg border border-yellow-500/20 rounded-3xl overflow-hidden hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10">
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        ⭐ FEATURED
                      </span>
                    </div>
                    
                    {article.featuredImage && (
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={urlFor(article.featuredImage).width(600).height(400).url()}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        
                        {article.category && (
                          <div className="absolute top-4 left-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(article.category)}`}>
                              {article.category.toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>By {article.author || 'BB Telugu Team'}</span>
                        <span>{formatTimeAgo(article.publishedAt)}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white text-center mb-6">📰 All News Articles</h3>
          {categories.length > 1 && (
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg shadow-green-500/25'
                      : 'bg-white/5 text-gray-300 border border-white/20 hover:bg-white/10 hover:border-white/30'
                  }`}
                >
                  {category === 'all' ? '📑 All News' : `${getCategoryIcon(category)} ${category.charAt(0).toUpperCase() + category.slice(1)}`}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* News Grid */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 max-w-md mx-auto">
              <span className="text-6xl mb-4 block">📰</span>
              <h3 className="text-white text-xl font-bold mb-2">
                {selectedCategory === 'all' ? 'No News Available' : `No ${selectedCategory} News`}
              </h3>
              <p className="text-gray-400">Check back soon for the latest updates!</p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredNews.map((article, index) => (
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
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(article.category)}`}>
                            {article.category.toUpperCase()}
                          </span>
                        </div>
                      )}
                      
                      {/* Featured Badge for first article */}
                      {index === 0 && selectedCategory === 'all' && (
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
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(article.category)}`}>
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

        {/* Load More Button (placeholder for future pagination) */}
        {filteredNews.length > 0 && (
          <div className="text-center pb-20">
            <div className="inline-flex items-center px-8 py-4 bg-white/5 backdrop-blur-lg border border-white/20 text-white rounded-2xl font-bold">
              <span>Showing all {filteredNews.length} articles</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
