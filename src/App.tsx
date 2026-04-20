import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import TeamPage from './components/TeamPage';
import DonatePage from './components/DonatePage';
import ContactPage from './components/ContactPage';
import ThankYouPage from './components/ThankYouPage';
import { CONTACT } from './lib/stripe-config';

type PageKey = 'home' | 'about' | 'team' | 'donate' | 'contact' | 'thank-you';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageKey>('home');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('donation') === 'success') setCurrentPage('thank-you');
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page as PageKey);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onPageChange={handlePageChange} />;
      case 'team':
        return <TeamPage onPageChange={handlePageChange} />;
      case 'donate':
        return <DonatePage onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage onPageChange={handlePageChange} />;
      case 'thank-you':
        return <ThankYouPage onPageChange={handlePageChange} />;
      case 'home':
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="flex-1">{renderCurrentPage()}</main>

      {currentPage !== 'thank-you' && (
        <footer className="bg-gray-900 text-white py-14 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-10">
              <div>
                <h3 className="font-montserrat font-bold text-xl mb-4">Chipata Girls FC</h3>
                <p className="font-lato text-gray-300">
                  A community-driven football club in Eastern Province, Zambia — using
                  football to keep girls in school, off the streets, and on a path to lead.
                </p>
              </div>

              <div>
                <h4 className="font-montserrat font-medium text-lg mb-4">Explore</h4>
                <ul className="space-y-2 font-lato">
                  <li><button onClick={() => handlePageChange('home')} className="text-gray-300 hover:text-white">Home</button></li>
                  <li><button onClick={() => handlePageChange('about')} className="text-gray-300 hover:text-white">Our Story</button></li>
                  <li><button onClick={() => handlePageChange('team')} className="text-gray-300 hover:text-white">The Team</button></li>
                  <li><button onClick={() => handlePageChange('donate')} className="text-gray-300 hover:text-white">Donate</button></li>
                  <li><button onClick={() => handlePageChange('contact')} className="text-gray-300 hover:text-white">Contact</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-montserrat font-medium text-lg mb-4">Contact</h4>
                <p className="font-lato text-gray-300 mb-1">Chipata, Eastern Province</p>
                <p className="font-lato text-gray-300 mb-1">Zambia</p>
                <p className="font-lato text-gray-300 mb-1">
                  <a className="hover:text-white" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </p>
                <p className="font-lato text-gray-300">{CONTACT.phone}</p>
              </div>

              <div>
                <h4 className="font-montserrat font-medium text-lg mb-4">Follow Us</h4>
                <p className="font-lato text-gray-300 mb-4">
                  Live match updates, player stories, and behind-the-scenes moments.
                </p>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-gray-300 hover:text-white font-lato"
                >
                  Facebook →
                </a>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-8 text-center">
              <p className="font-lato text-gray-400 text-sm">
                © {new Date().getFullYear()} Chipata Girls FC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
