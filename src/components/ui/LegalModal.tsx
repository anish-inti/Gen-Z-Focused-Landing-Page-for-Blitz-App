import React from 'react';
import { XIcon } from 'lucide-react';
import { Button } from './Button';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export const LegalModal = ({ isOpen, onClose, type }: LegalModalProps) => {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      content: `At Blitz, we take your privacy seriously. We collect and process your personal information to provide you with the best possible experience. This includes your name, email address, and location data to personalize your outing recommendations. We use this information to improve our services and communicate with you about updates and promotions. We never sell your personal information to third parties. You can request a copy of your data or ask us to delete it at any time by contacting us at blitzinnovationtech@gmail.com.`
    },
    terms: {
      title: 'Terms of Use',
      content: `By using Blitz, you agree to these terms. You must be at least 18 years old to use our service. You are responsible for maintaining the security of your account and for all activities that occur under your account. You agree not to use our service for any illegal purposes or to violate any laws. We reserve the right to terminate your account if you violate these terms. We are not responsible for any third-party content or services that may be accessed through our platform.`
    }
  };

  const { title, content: modalContent } = content[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-2xl mx-4 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <XIcon size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
          {title}
        </h2>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {modalContent}
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            variant="outline"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}; 