export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-primary-200 rounded-full animate-spin border-t-primary-600 mx-auto"></div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Loading Bigg Boss Telugu 9...
        </h2>
        <p className="text-gray-600">
          Getting the latest updates from the house
        </p>
      </div>
    </div>
  )
}
