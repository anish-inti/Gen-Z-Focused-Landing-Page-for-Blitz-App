import React from 'react';
import { InstagramIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="py-12 px-4 bg-black border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#FF6EC7] to-purple-500 bg-clip-text text-transparent mb-3">
              Blitz
            </div>
            <p className="text-gray-400 max-w-xs">
              Discover and plan the perfect outings with friends using
              AI-powered recommendations.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#FF6EC7] transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6EC7] transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FF6EC7] transition-colors">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6EC7] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6EC7] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6EC7] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6EC7] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6EC7] transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6EC7] transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6EC7] transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6EC7] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Blitz. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Made with ❤️ for Gen Z explorers
          </p>
        </div>
      </div>
    </footer>;
};