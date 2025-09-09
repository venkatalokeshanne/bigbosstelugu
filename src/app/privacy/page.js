import { Metadata } from 'next';

export const metadata = {
  title: 'Privacy Policy - Bigg Boss Telugu 9 Voting Platform',
  description: 'Privacy Policy for Bigg Boss Telugu 9 Official Voting Platform. Learn how we protect your personal information and voting data.',
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              How we protect your information on our voting platform
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="space-y-8 text-gray-100">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you vote, 
                  create an account, or contact us. This may include your name, email address, 
                  voting preferences, and device information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>To process and count your votes</li>
                  <li>To prevent duplicate voting and fraud</li>
                  <li>To improve our voting platform</li>
                  <li>To send you voting updates and notifications</li>
                  <li>To comply with legal requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. All voting 
                  data is encrypted and stored securely.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at 
                  privacy@bigbossteluguvotes.in
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
