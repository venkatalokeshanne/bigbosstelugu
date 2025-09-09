'use client'

import { useState } from 'react'

export default function AdminPosterPage() {
  const [posterData, setPosterData] = useState({
    title: 'Latest Show Posters',
    description: 'Check out the latest promotional posters and updates',
    posters: [
      {
        title: '',
        subtitle: '',
        link: '',
        alt: ''
      },
      {
        title: '',
        subtitle: '',
        link: '',
        alt: ''
      }
    ]
  })
  
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handlePosterChange = (index, field, value) => {
    const updatedPosters = [...posterData.posters]
    updatedPosters[index][field] = value
    setPosterData({
      ...posterData,
      posters: updatedPosters
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      // This would typically save to Sanity
      // For now, we'll just show the data
      console.log('Poster Data:', posterData)
      setMessage('✅ Poster data saved! (Note: This is a demo - implement Sanity integration)')
    } catch (error) {
      setMessage('❌ Error saving data: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            Poster Section Admin
          </h1>
          
          {message && (
            <div className={`p-4 rounded-lg mb-6 ${
              message.includes('✅') ? 'bg-green-900/20 border border-green-500/30 text-green-300' : 
              'bg-red-900/20 border border-red-500/30 text-red-300'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Section Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Section Title
                </label>
                <input
                  type="text"
                  value={posterData.title}
                  onChange={(e) => setPosterData({...posterData, title: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., Latest Show Posters"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Section Description
                </label>
                <textarea
                  value={posterData.description}
                  onChange={(e) => setPosterData({...posterData, description: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={3}
                  placeholder="e.g., Check out the latest promotional posters and updates"
                />
              </div>
            </div>

            {/* Posters */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-white">Posters</h2>
              
              {posterData.posters.map((poster, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg p-6 border border-gray-600">
                  <h3 className="text-lg font-medium text-white mb-4">Poster {index + 1}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Poster Title *
                      </label>
                      <input
                        type="text"
                        value={poster.title}
                        onChange={(e) => handlePosterChange(index, 'title', e.target.value)}
                        className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="e.g., Bigg Boss Telugu 9 - Episode Highlights"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Poster Subtitle
                      </label>
                      <input
                        type="text"
                        value={poster.subtitle}
                        onChange={(e) => handlePosterChange(index, 'subtitle', e.target.value)}
                        className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="e.g., Watch the latest drama unfold"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Link (optional)
                      </label>
                      <input
                        type="url"
                        value={poster.link}
                        onChange={(e) => handlePosterChange(index, 'link', e.target.value)}
                        className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="https://www.hotstar.com/..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Alt Text
                      </label>
                      <input
                        type="text"
                        value={poster.alt}
                        onChange={(e) => handlePosterChange(index, 'alt', e.target.value)}
                        className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Description for accessibility"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                    <p className="text-blue-300 text-sm">
                      <strong>Simplified Poster Setup:</strong>
                      <br />• Only images are needed - no titles or descriptions
                      <br />• Resolution: 1080×1350px or 720×1280px only
                      <br />• Format: JPG, PNG, or WebP
                      <br />
                      <br /><strong>To add images:</strong>
                      <br />1. Go to your Sanity Studio
                      <br />2. Navigate to "Poster Section"
                      <br />3. Simply upload image files (no additional text needed)
                      <br />4. The images will display as clean scrollable posters
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:cursor-not-allowed"
              >
                {loading ? 'Saving...' : 'Save Poster Configuration'}
              </button>
            </div>
          </form>
        </div>
        
        {/* Instructions */}
        <div className="mt-8 bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">Setup Instructions</h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-start space-x-3">
              <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <p className="font-medium">Deploy Sanity Schema</p>
                <p className="text-sm text-gray-400">The poster schema has been created. Deploy it to your Sanity project.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <p className="font-medium">Access Sanity Studio</p>
                <p className="text-sm text-gray-400">Go to your Sanity Studio and find the "Poster Section" content type.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <p className="font-medium">Upload Images</p>
                <p className="text-sm text-gray-400">Create a new poster section document and upload your 2 poster images.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <p className="font-medium">Publish & View</p>
                <p className="text-sm text-gray-400">Publish the document and the posters will appear on your homepage with smooth scrolling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
