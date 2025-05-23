import React from 'react';
import { XIcon } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfoModal = ({ isOpen, onClose }: InfoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl max-w-4xl w-full mx-auto overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-semibold">About Blitz</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* What is Blitz */}
            <div className="apple-card p-6">
              <h3 className="text-xl font-semibold mb-3">What is Blitz?</h3>
              <p className="text-gray-300 leading-relaxed">
                Blitz is your AI-powered outing planner designed to help you find the best places to hang out—based on your vibe, budget, and group size. Whether you're craving rooftop cafés, weekend escapes, or late-night food joints, Blitz curates it all in seconds.
              </p>
            </div>

            {/* How does it work */}
            <div className="apple-card p-6">
              <h3 className="text-xl font-semibold mb-3">How does it work?</h3>
              <p className="text-gray-300 leading-relaxed">
                Just describe your outing—like "4 of us, ₹700 each, love live music"—and Blitz pulls personalized suggestions using real-time data, smart filtering, and a swipe-based UI to match your mood. It's like Tinder for experiences, but smarter.
              </p>
            </div>

            {/* Why Blitz */}
            <div className="apple-card p-6">
              <h3 className="text-xl font-semibold mb-3">Why Blitz?</h3>
              <p className="text-gray-300 leading-relaxed">
                We're building for the spontaneous, the explorers, and the "where do we go now?" crew. Blitz is more than discovery—it's decision-making made fun. With features like polls, group planning, map routing, and in-app bookings, it's your one-stop social planner.
              </p>
            </div>

            {/* Who's it for */}
            <div className="apple-card p-6">
              <h3 className="text-xl font-semibold mb-3">Who's it for?</h3>
              <p className="text-gray-300 leading-relaxed">
                If you're a student, young professional, or just someone tired of the same old spots—Blitz was made for you.
              </p>
            </div>

            {/* What's coming soon */}
            <div className="apple-card p-6">
              <h3 className="text-xl font-semibold mb-3">What's coming soon?</h3>
              <p className="text-gray-300 leading-relaxed">
                We're cooking up features like voice prompts, personalized itineraries, and city-based experience bundles. And yes—dark mode is already in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 