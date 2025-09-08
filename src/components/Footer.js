import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BB</span>
              </div>
              <span className="text-xl font-bold">
                Bigg Boss Telugu 9 Voting
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Your ultimate destination for Bigg Boss Telugu 9 voting, contestant updates, 
              news, and live results. Vote for your favorite contestants and stay updated 
              with all house activities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/StarMaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow on Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/StarMaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/starmaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348c0-1.297 1.051-2.348 2.348-2.348c1.297 0 2.348 1.051 2.348 2.348C10.797 15.937 9.746 16.988 8.449 16.988zM12.017 7.729c-2.35 0-4.258 1.908-4.258 4.258s1.908 4.258 4.258 4.258s4.258-1.908 4.258-4.258S14.367 7.729 12.017 7.729z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bigg Boss Telugu 9 Quick Navigation</h3>
            <h4 className="text-sm text-purple-300 font-medium mb-3">BBT9 2025 Official Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contestants" className="text-gray-400 hover:text-white transition-colors">
                  Contestants
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/#vote-section" className="text-gray-400 hover:text-white transition-colors">
                  Vote Now
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Voting Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">How to Vote Online Free?</h3>
            <h4 className="text-sm text-purple-300 font-medium mb-3">BBT9 Voting Methods Hyderabad</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                <span className="font-medium text-white">Hotstar:</span> Official voting
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">SMS:</span> Text BB [Name] to 58888
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">Closes:</span> Every Friday 11:59 PM
              </li>
              <li className="text-gray-400">
                <span className="font-medium text-white">Cost:</span> Free on Hotstar, SMS charges apply
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Bigg Boss Telugu 9 Voting. All rights reserved. 
              This is an unofficial fan website.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500 text-center">
            <p>
              Bigg Boss Telugu is a trademark of Endemol Shine. This website is not affiliated 
              with the official show or its producers. All contestant images and show content 
              are used for informational and educational purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
