import React, { useEffect, useState } from 'react';
import { Button } from './Button';
export const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  if (!isVisible) return null;
  return <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button variant="primary" size="md" className="shadow-lg shadow-pink-500/30">
        Join Waitlist
      </Button>
    </div>;
};