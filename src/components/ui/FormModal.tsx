import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
import { Button } from './Button';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormModal = ({ isOpen, onClose }: FormModalProps) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData();
      formData.append('entry.2005620554', email); // Email field ID
      formData.append('entry.1045781291', phone); // Phone field ID

      const response = await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSe-H8ZMmW8HA3C8bxNaLA85XKpGR0tDaw9w94hokD8k8X0SEg/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: formData,
        }
      );

      setSubmitStatus('success');
      setEmail('');
      setPhone('');
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-md mx-4 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <XIcon size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
          Join the Waitlist
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-pink focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-brand-pink focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isSubmitting}
            className="mt-6"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>

          {submitStatus === 'success' && (
            <p className="text-green-500 text-center mt-2">
              Thank you for joining! We'll be in touch soon.
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="text-red-500 text-center mt-2">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}; 