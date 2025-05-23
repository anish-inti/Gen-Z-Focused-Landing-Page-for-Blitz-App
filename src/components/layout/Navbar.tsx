import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';
import { Button } from '../ui/Button';
import { FormModal } from '../ui/FormModal';

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
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleFormOpen = () => {
    setIsFormOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? `${theme === 'light' ? 'bg-white/90 shadow-sm' : 'bg-black/90 shadow-[0_4px_30px_rgba(255,110,199,0.1)]'}` 
            : 'bg-transparent'
        } backdrop-blur-sm`}
      >
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
              <a href="#careers" className="hover:text-[#FF6EC7] transition-colors">
                Careers
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme} 
                className="p-2 rounded-full hover:bg-gray-200/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2" 
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
              </button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleFormOpen}
                ariaLabel="Join Waitlist"
              >
                Join Waitlist
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                onClick={handleFormOpen}
                ariaLabel="Get Early Access"
              >
                Get Early Access
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-200/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2" 
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <MoonIcon size={20} /> : <SunIcon size={20} />}
            </button>
            <button 
              onClick={handleMenuClick} 
              className="p-2 rounded-full hover:bg-gray-200/20 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2" 
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
              isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            <div 
              className={`absolute top-0 right-0 w-full max-w-sm h-full ${
                theme === 'light' ? 'bg-white' : 'bg-black'
              } shadow-lg transform transition-transform duration-300 ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6">
                <nav className="flex flex-col gap-4 mb-6">
                  <a 
                    href="#how-it-works" 
                    className="hover:text-[#FF6EC7] transition-colors py-2 text-lg" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    How It Works
                  </a>
                  <a 
                    href="#features" 
                    className="hover:text-[#FF6EC7] transition-colors py-2 text-lg" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </a>
                  <a 
                    href="#testimonials" 
                    className="hover:text-[#FF6EC7] transition-colors py-2 text-lg" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Community
                  </a>
                  <a 
                    href="#careers" 
                    className="hover:text-[#FF6EC7] transition-colors py-2 text-lg" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers
                  </a>
                </nav>
                <div className="flex flex-col gap-3">
                  <Button 
                    variant="outline" 
                    fullWidth 
                    onClick={handleFormOpen}
                    ariaLabel="Join Waitlist"
                  >
                    Join Waitlist
                  </Button>
                  <Button 
                    variant="primary" 
                    fullWidth 
                    onClick={handleFormOpen}
                    ariaLabel="Get Early Access"
                  >
                    Get Early Access
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <FormModal 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
};