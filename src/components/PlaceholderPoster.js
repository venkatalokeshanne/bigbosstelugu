export default function PlaceholderPoster({ title, className = "" }) {
  return (
    <div className={`relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden ${className}`}>
      <div className="relative" style={{ aspectRatio: '0.8' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-1">Upload poster image</p>
            <p className="text-gray-500 text-xs">1080×1350 or 720×1280</p>
          </div>
        </div>
      </div>
    </div>
  )
}
