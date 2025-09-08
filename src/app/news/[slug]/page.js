import { notFound } from 'next/navigation'
import Link from 'next/link'
import { newsArticles } from '@/data/contestants'
import { generateMetaTags, generateStructuredData } from '@/utils/seo'

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }) {
  const article = newsArticles.find(a => a.slug === params.slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return generateMetaTags({
    title: `${article.title} | Bigg Boss Telugu 9 News`,
    description: article.excerpt,
    keywords: article.tags?.join(', '),
    url: `/news/${article.slug}`,
    image: article.image,
    type: 'article',
    publishedAt: article.publishedAt,
    modifiedAt: article.modifiedAt,
    author: article.author
  })
}

export default function ArticlePage({ params }) {
  const article = newsArticles.find(a => a.slug === params.slug)
  
  if (!article) {
    notFound()
  }

  const structuredData = generateStructuredData({
    type: 'NewsArticle',
    title: article.title,
    description: article.excerpt,
    image: article.image,
    publishedAt: article.publishedAt,
    modifiedAt: article.modifiedAt,
    author: article.author,
    category: article.category,
    tags: article.tags,
    content: article.content,
    url: `/news/${article.slug}`
  })

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'evictions':
        return 'bg-red-100 text-red-800'
      case 'tasks':
        return 'bg-blue-100 text-blue-800'
      case 'twists':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const relatedArticles = newsArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumbs */}
        <nav className="bg-white border-b py-4">
          <div className="container-custom">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/news" className="hover:text-primary-600 transition-colors">
                News
              </Link>
              <span>/</span>
              <span className="text-gray-900">{article.title}</span>
            </div>
          </div>
        </nav>

        <article className="py-12">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Article Header */}
              <header className="mb-8">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                  {article.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">By {article.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{formatDate(article.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <p className="text-xl text-gray-700 leading-relaxed">
                  {article.excerpt}
                </p>
              </header>

              {/* Featured Image */}
              {article.image && (
                <div className="mb-8">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-12">
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  {article.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-gray-600 mr-2">Tags:</span>
                    {article.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Buttons */}
              <div className="border-t border-b py-6 mb-12">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">Share this article:</span>
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      📘 Facebook
                    </button>
                    <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors text-sm">
                      🐦 Twitter
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                      📱 WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
                  Related News
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {relatedArticles.map((relatedArticle) => (
                    <Link
                      key={relatedArticle.id}
                      href={`/news/${relatedArticle.slug}`}
                      className="group"
                    >
                      <article className="card hover:shadow-xl transition-all duration-300">
                        <div className="aspect-video relative overflow-hidden">
                          {relatedArticle.image ? (
                            <img
                              src={relatedArticle.image}
                              alt={relatedArticle.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                              <span className="text-4xl text-primary-600">📺</span>
                            </div>
                          )}
                          <div className="absolute top-4 left-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(relatedArticle.category)}`}>
                              {relatedArticle.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="text-sm text-gray-500 mb-2">
                            {formatDate(relatedArticle.publishedAt)}
                          </div>

                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {relatedArticle.title}
                          </h3>

                          <p className="text-gray-600 text-sm line-clamp-2">
                            {relatedArticle.excerpt}
                          </p>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Link href="/news" className="btn-primary">
                    View All News
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 gradient-bg text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Don't Miss the Action
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Stay updated with the latest Bigg Boss Telugu 9 news and vote for your favorite contestants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#vote-section" className="btn-primary bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                Vote Now
              </Link>
              <Link href="/contestants" className="btn-secondary bg-white bg-opacity-20 text-white hover:bg-opacity-30">
                View Contestants
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
