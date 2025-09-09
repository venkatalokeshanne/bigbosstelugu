import { Metadata } from 'next';

export const metadata = {
  title: 'Terms and Conditions - Bigg Boss Telugu 9 Voting Platform',
  description: 'Terms and Conditions for using the Bigg Boss Telugu 9 Official Voting Platform. Read our usage guidelines and voting rules.',
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-300">
              Usage guidelines for our voting platform
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="space-y-8 text-gray-100">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using this Bigg Boss Telugu 9 voting platform, you accept 
                  and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Voting Rules</h2>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Each user can vote multiple times per day</li>
                  <li>Voting manipulation or bot usage is strictly prohibited</li>
                  <li>Only genuine votes from real users will be counted</li>
                  <li>Voting closes every Friday before elimination episodes</li>
                  <li>Official Hotstar votes carry more weight than online polls</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">User Conduct</h2>
                <p className="leading-relaxed mb-4">
                  Users are expected to:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Vote fairly and honestly</li>
                  <li>Not attempt to manipulate voting results</li>
                  <li>Respect other users and contestants</li>
                  <li>Not engage in spam or abusive behavior</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
                <p className="leading-relaxed">
                  This is an unofficial fan-made voting platform. Official voting happens 
                  through Disney+ Hotstar and Star MAA. Results shown here are indicative 
                  and may not reflect actual show outcomes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of 
                  the platform constitutes acceptance of modified terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
                <p className="leading-relaxed">
                  For questions about these terms, contact us at legal@bigbossteluguvotes.in
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
