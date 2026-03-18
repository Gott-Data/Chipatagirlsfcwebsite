import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string, data?: any) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', key: 'home' },
    { label: 'About Us', key: 'about' },
    { label: 'What We Do', key: 'programs' },
    { label: 'Follow the Team', key: 'team' },
    { label: 'Alumni', key: 'alumni' },
    { label: 'President\'s Office', key: 'president' },
    { label: 'Contact', key: 'contact' },
  ];

  // Don't show navigation on checkout and thank you pages
  if (['checkout', 'thank-you'].includes(currentPage)) {
    return null;
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onPageChange('home')}
              className="font-montserrat font-bold text-xl text-teal"
            >
              Chipata Girls FC
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => onPageChange(item.key)}
                  className={`px-3 py-2 rounded-md font-lato font-medium transition-colors duration-200 ${
                    currentPage === item.key
                      ? 'bg-teal text-white'
                      : 'text-gray-700 hover:text-teal hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => onPageChange('donate')}
                className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium ml-4"
              >
                Donate Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-teal"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    onPageChange(item.key);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md font-lato font-medium transition-colors duration-200 ${
                    currentPage === item.key
                      ? 'bg-teal text-white'
                      : 'text-gray-700 hover:text-teal hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => {
                  onPageChange('donate');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium mt-2"
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}