import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navItems = [
  { label: 'Home', key: 'home' },
  { label: 'Our Story', key: 'about' },
  { label: 'The Team', key: 'team' },
  { label: 'Contact', key: 'contact' },
];

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (currentPage === 'thank-you') return null;

  const go = (key: string) => {
    onPageChange(key);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => go('home')} className="flex items-center gap-2">
            <Logo />
          </button>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                className={`px-3 py-2 rounded-md font-lato font-medium transition-colors duration-200 ${
                  currentPage === item.key
                    ? 'text-teal'
                    : 'text-gray-700 hover:text-teal'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => go('donate')}
              className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium ml-4"
            >
              Donate
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-teal"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t pt-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                className={`block w-full text-left px-3 py-2 rounded-md font-lato font-medium ${
                  currentPage === item.key
                    ? 'bg-teal text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => go('donate')}
              className="w-full bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium mt-2"
            >
              Donate
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
