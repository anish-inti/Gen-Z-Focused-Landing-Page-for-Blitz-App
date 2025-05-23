import React, { useState } from 'react';
import { HeartIcon, CompassIcon, UserIcon, SparklesIcon, UsersIcon } from 'lucide-react';
import { SwipeableCard } from '../ui/SwipeableCard';
const places = [{
  imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  title: 'Skyline Rooftop Bar',
  description: 'Trendy rooftop venue with panoramic city views',
  tags: ['Rooftop', 'Cocktails', 'View', '₹800/person']
}, {
  imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  title: 'The Coffee Library',
  description: 'Quirky café with book-themed interiors',
  tags: ['Coffee', 'Quiet', 'Study', '₹400/person']
}, {
  imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  title: 'Street Food Avenue',
  description: 'Popular food street with diverse cuisines',
  tags: ['Street Food', 'Casual', 'Budget', '₹200/person']
}];
const features = [{
  icon: CompassIcon,
  title: 'Discover New Places',
  description: 'Find hidden gems and trending spots in your city'
}, {
  icon: HeartIcon,
  title: 'Fun to Use Swipe UI',
  description: "Swipe right on places you love, left on those you don't"
}, {
  icon: SparklesIcon,
  title: 'Personalized Recommendations',
  description: 'Get suggestions that match your vibe and preferences'
}, {
  icon: UserIcon,
  title: 'Discover New Experiences',
  description: 'Try something different with curated experiences'
}, {
  icon: UsersIcon,
  title: 'Meet Likeminded People',
  description: 'Connect with others who share your interests'
}];
export const FeaturesSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const handleSwipe = (direction: 'left' | 'right') => {
    if (currentCardIndex < places.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };
  return <section id="features" className="py-16 md:py-24 px-4 relative bg-brand-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Discover Your Next Adventure
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-light">
            Find the perfect spot with personalized recommendations
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Swipeable Cards Section */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="relative h-[500px] mx-auto max-w-sm">
              {places.map((place, index) => index >= currentCardIndex && <SwipeableCard key={index} {...place} onSwipe={handleSwipe} />)}
            </div>
            <p className="text-center text-gray-400 mt-4 font-light">
              ← Swipe to explore →
            </p>
          </div>
          {/* Features List Section - Updated styles */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="grid gap-6">
              {features.map((feature, index) => <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 flex items-center justify-center shrink-0">
                    <feature.icon className="text-brand-pink" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};