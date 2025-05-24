import { useState } from 'react';
import { Button } from '../ui/Button';
import { ArrowRightIcon } from 'lucide-react';
import { InfoModal } from '../ui/InfoModal';

export const HeroSection = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  return (
    <section className="apple-section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF6EC7]/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="apple-container relative z-10">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <h1 className="apple-heading mb-6 bg-gradient-to-r from-[#FF6EC7] to-purple-500 bg-clip-text text-transparent">
            Discover Your Next Adventure
          </h1>
          <p className="apple-subheading mb-8">
            Blitz helps you find and plan the perfect social outings with friends, making every moment memorable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="primary" 
              size="lg"
              className="apple-button-primary group"
              onClick={() => window.location.href = '#early-access'}
            >
              Get Started
              <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="apple-button-secondary"
              onClick={() => setIsInfoModalOpen(true)}
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Discovery",
              description: "AI-powered recommendations based on your preferences and interests."
            },
            {
              title: "Group Planning",
              description: "Easy coordination with friends for the perfect group outing."
            },
            {
              title: "Real-time Updates",
              description: "Stay informed with live updates on events and activities."
            }
          ].map((feature, index) => (
            <div 
              key={feature.title}
              className="apple-card p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info Modal */}
      <InfoModal 
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
      />
    </section>
  );
};