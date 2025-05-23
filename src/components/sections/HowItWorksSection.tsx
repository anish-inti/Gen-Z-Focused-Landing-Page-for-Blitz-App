import React from 'react';
import { SearchIcon, SwipeIcon, UsersIcon } from '../ui/Icons';
export const HowItWorksSection = () => {
  return <section id="how-it-works" className="py-16 md:py-24 px-4 relative bg-gradient-to-b from-black to-black/95">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Blitz Works
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Finding the perfect spot for your group has never been easier
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl hover:shadow-pink-500/10">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FF6EC7] to-purple-500 flex items-center justify-center mb-6">
              <SearchIcon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6EC7] transition-colors">
              Enter Your Vibe
            </h3>
            <p className="text-gray-400">
              Tell us what you're looking for with natural language prompts like
              "6 of us want a place under ₹500 each with outdoor seating."
            </p>
            <div className="absolute -bottom-2 left-6 right-6 h-1 bg-gradient-to-r from-[#FF6EC7] to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </div>
          {/* Step 2 */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl hover:shadow-pink-500/10">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FF6EC7] to-purple-500 flex items-center justify-center mb-6">
              <SwipeIcon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6EC7] transition-colors">
              Swipe the Spots
            </h3>
            <p className="text-gray-400">
              Browse through AI-curated suggestions tailored to your
              preferences. Swipe right on places you like, left on those you
              don't.
            </p>
            <div className="absolute -bottom-2 left-6 right-6 h-1 bg-gradient-to-r from-[#FF6EC7] to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </div>
          {/* Step 3 */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl hover:shadow-pink-500/10">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#FF6EC7] to-purple-500 flex items-center justify-center mb-6">
              <UsersIcon className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF6EC7] transition-colors">
              Plan with Friends
            </h3>
            <p className="text-gray-400">
              Share your matches with friends, vote on favorites, and plan your
              outing together with collaborative tools.
            </p>
            <div className="absolute -bottom-2 left-6 right-6 h-1 bg-gradient-to-r from-[#FF6EC7] to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </div>
        </div>
      </div>
    </section>;
};