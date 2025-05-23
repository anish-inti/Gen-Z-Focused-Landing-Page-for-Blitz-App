import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ShieldCheckIcon } from 'lucide-react';
export const EarlyAccessSection = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    setSubmitted(true);
  };
  return <section id="early-access" className="py-16 md:py-24 px-4 relative bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-xl shadow-pink-500/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Early Access
            </h2>
            <p className="text-gray-400">
              Be among the first to experience Blitz and help shape the future
              of social outing discovery.
            </p>
          </div>
          {submitted ? <div className="text-center p-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#FF6EC7] to-purple-500 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
              <p className="text-gray-400 mb-6">
                We'll notify you when Blitz is ready for you to try.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Add another person
              </Button>
            </div> : <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your.email@example.com" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6EC7] transition-colors" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone (Optional)
                </label>
                <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 (555) 123-4567" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#FF6EC7] transition-colors" />
              </div>
              <Button variant="primary" size="lg" fullWidth>
                Join 3,000 others on the Blitzlist 🚀
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                <ShieldCheckIcon size={14} />
                <span>Your data is secure and will never be sold</span>
              </div>
            </form>}
        </div>
        <div className="mt-12 flex justify-center flex-wrap gap-6">
          <div className="flex flex-col items-center">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-12 opacity-50 hover:opacity-100 transition-opacity" />
            <p className="text-xs text-gray-500 mt-2">Coming August 2025</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12 opacity-50 hover:opacity-100 transition-opacity" />
            <p className="text-xs text-gray-500 mt-2">Coming August 2025</p>
          </div>
        </div>
      </div>
    </section>;
};