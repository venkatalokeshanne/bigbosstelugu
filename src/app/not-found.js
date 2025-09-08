import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-9xl mb-4">🏠</div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-4">
            404 - Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Looks like this page has been eliminated from the Bigg Boss house! 
            Let's get you back to the action.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="btn-primary"
          >
            🏠 Back to Home
          </Link>
          <Link
            href="/contestants"
            className="btn-secondary"
          >
            👥 View Contestants
          </Link>
          <Link
            href="/#vote-section"
            className="btn-primary bg-yellow-400 text-gray-900 hover:bg-yellow-300"
          >
            🗳️ Vote Now
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Popular Pages
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <Link href="/contestants/abhishek" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">👤</div>
              <div className="text-sm font-medium text-gray-900">Abhishek Profile</div>
            </Link>
            <Link href="/news" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">📰</div>
              <div className="text-sm font-medium text-gray-900">Latest News</div>
            </Link>
            <Link href="/contestants" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">👥</div>
              <div className="text-sm font-medium text-gray-900">All Contestants</div>
            </Link>
            <Link href="/#vote-section" className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="text-2xl mb-2">🗳️</div>
              <div className="text-sm font-medium text-gray-900">Vote Online</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
