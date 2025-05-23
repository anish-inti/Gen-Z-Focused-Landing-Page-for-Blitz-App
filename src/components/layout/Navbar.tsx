import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/Button';
interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
export const Navbar = ({
  theme,
  toggleTheme
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? `${theme === 'light' ? 'bg-white/90 shadow-sm' : 'bg-black/90 shadow-[0_4px_30px_rgba(255,110,199,0.1)]'}` : 'bg-transparent'} backdrop-blur-sm`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#FF6EC7] to-purple-500 bg-clip-text text-transparent">
            Blitz
          </div>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <a href="#how-it-works" className="hover:text-[#FF6EC7] transition-colors">
              How It Works
            </a>
            <a href="#features" className="hover:text-[#FF6EC7] transition-colors">
              Features
            </a>
            <a href="#testimonials" className="hover:text-[#FF6EC7] transition-colors">
              Community
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200/20 transition-colors" aria-label="Toggle theme">
              {theme === 'light' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
            </button>
            <Button variant="outline" size="sm">
              Join Waitlist
            </Button>
            <Button variant="primary" size="sm">
              Get Early Access
            </Button>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200/20 transition-colors" aria-label="Toggle theme">
            {theme === 'light' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full hover:bg-gray-200/20 transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && <div className={`absolute top-full left-0 right-0 p-4 ${theme === 'light' ? 'bg-white shadow-lg' : 'bg-black shadow-[0_4px_30px_rgba(255,110,199,0.1)]'} md:hidden`}>
            <nav className="flex flex-col gap-4 mb-4">
              <a href="#how-it-works" className="hover:text-[#FF6EC7] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                How It Works
              </a>
              <a href="#features" className="hover:text-[#FF6EC7] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Features
              </a>
              <a href="#testimonials" className="hover:text-[#FF6EC7] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Community
              </a>
            </nav>
            <div className="flex flex-col gap-3">
              <Button variant="outline" fullWidth>
                Join Waitlist
              </Button>
              <Button variant="primary" fullWidth>
                Get Early Access
              </Button>
            </div>
          </div>}
      </div>
    </header>;
};