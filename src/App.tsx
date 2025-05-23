import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { EarlyAccessSection } from './components/sections/EarlyAccessSection';
import { StickyButton } from './components/ui/StickyButton';
export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return <div className={`w-full min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <EarlyAccessSection />
      </main>
      <Footer />
      <StickyButton />
    </div>;
}