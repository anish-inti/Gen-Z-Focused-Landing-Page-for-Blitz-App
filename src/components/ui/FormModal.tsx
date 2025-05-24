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
      // Create a form element
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://docs.google.com/forms/d/e/1FAIpQLSf19KqVpaLvgaY9aBw097e4_oNE3MCYIQSxTlYqL1GjSn4/formResponse';
      form.target = '_blank';

      // Add email field
      const emailInput = document.createElement('input');
      emailInput.type = 'hidden';
      emailInput.name = 'entry.EMAIL ID';
      emailInput.value = email;
      form.appendChild(emailInput);

      // Add phone field
      const phoneInput = document.createElement('input');
      phoneInput.type = 'hidden';
      phoneInput.name = 'entry.PHONE NUMBER';
      phoneInput.value = phone;
      form.appendChild(phoneInput);

      // Add submit button
      const submitButton = document.createElement('input');
      submitButton.type = 'hidden';
      submitButton.name = 'submit';
      submitButton.value = 'Submit';
      form.appendChild(submitButton);

      // Add the form to the document and submit
      document.body.appendChild(form);
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        setSubmitStatus('success');
        setEmail('');
        setPhone('');
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      }, 1000);

    } catch (error) {
      console.error('Form submission error:', error);
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

        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#FF6EC7] to-purple-500 bg-clip-text text-transparent">
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
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#FF6EC7] focus:border-transparent"
              placeholder="Enter your email"
              disabled={isSubmitting}
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
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-[#FF6EC7] focus:border-transparent"
              placeholder="Enter your phone number"
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isSubmitting}
            className="mt-6"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                Submitting...
              </div>
            ) : (
              'Submit'
            )}
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