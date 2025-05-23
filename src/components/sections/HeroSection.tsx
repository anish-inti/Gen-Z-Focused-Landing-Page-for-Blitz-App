import React from 'react';
import { Button } from '../ui/Button';
import { ArrowDownIcon } from 'lucide-react';
export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 relative overflow-hidden">
      {/* Background gradient - simplified */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-purple/10 via-brand-black to-brand-black z-0"></div>
      {/* Abstract shapes - more subtle */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-brand-pink/10 to-brand-purple/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 blur-3xl"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="block font-medium">Swipe.</span>
              <span className="block font-medium">Plan.</span>
              <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent font-medium">
                Go.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl font-light">
              Your AI-powered vibe finder for planning the perfect outing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" size="lg">
                Get Early Access
              </Button>
              <Button variant="outline" size="lg">
                Join Waitlist
              </Button>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
              <p>3,000+ people already on the waitlist</p>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 w-full max-w-[300px] mx-auto">
              {/* Phone mockup with 3D effect */}
              <div className="relative rounded-[32px] overflow-hidden border-[8px] border-gray-900 shadow-2xl shadow-pink-500/20 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2689&q=80" alt="Blitz app interface showing people enjoying an outing" className="w-full aspect-[9/19] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Rooftop Vibes
                  </h3>
                  <p className="text-sm text-gray-200 mb-3">
                    6 people • Under ₹500 each
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                      Outdoor
                    </span>
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                      Student-friendly
                    </span>
                  </div>
                </div>
              </div>
              {/* Second phone for layered effect */}
              <div className="absolute -bottom-4 -left-16 w-[260px] rounded-[32px] overflow-hidden border-[8px] border-gray-900 shadow-2xl shadow-purple-500/20 transform -rotate-12 opacity-70 hidden md:block">
                <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2669&q=80" alt="Blitz app interface showing a cafe" className="w-full aspect-[9/19] object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-24 flex justify-center">
          <button onClick={() => scrollToSection('how-it-works')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <span>Scroll to learn more</span>
            <ArrowDownIcon size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>;
};