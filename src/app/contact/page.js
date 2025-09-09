import { Metadata } from 'next';

export const metadata = {
  title: 'Contact Us - Bigg Boss Telugu 9 Voting Platform',
  description: 'Contact the Bigg Boss Telugu 9 Official Voting Platform team. Get help with voting, technical issues, and general inquiries.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with our support team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Get Support</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Voting Issues</h3>
                  <p className="text-gray-300 text-sm">
                    Having trouble voting? Contact us for technical support.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                  <p className="text-gray-300 text-sm">
                    Questions about the platform or voting process.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Feedback</h3>
                  <p className="text-gray-300 text-sm">
                    Share your suggestions to improve our platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                  <p className="text-blue-300">support@bigbossteluguvotes.in</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technical Issues</h3>
                  <p className="text-blue-300">tech@bigbossteluguvotes.in</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Response Time</h3>
                  <p className="text-gray-300">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Official Bigg Boss Telugu Support
              </h2>
              <p className="text-gray-300 leading-relaxed">
                For official show information and contestant details, please visit the 
                Star MAA official website or social media channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
