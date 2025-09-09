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
