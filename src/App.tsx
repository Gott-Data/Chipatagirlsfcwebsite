import { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProgramsPage from './components/ProgramsPage';
import TeamPage from './components/TeamPage';
import AlumniPage from './components/AlumniPage';
import DonatePage from './components/DonatePage';
import ContactPage from './components/ContactPage';
import PresidentPage from './components/PresidentPage';
import CheckoutPage from './components/CheckoutPage';
import ThankYouPage from './components/ThankYouPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageData, setPageData] = useState<any>(null);

  const handlePageChange = (page: string, data?: any) => {
    setCurrentPage(page);
    setPageData(data);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage onPageChange={handlePageChange} />;
      case 'programs':
        return <ProgramsPage onPageChange={handlePageChange} />;
      case 'team':
        return <TeamPage />;
      case 'alumni':
        return <AlumniPage onPageChange={handlePageChange} />;
      case 'donate':
        return <DonatePage onPageChange={handlePageChange} />;
      case 'checkout':
        return <CheckoutPage 
          amount={pageData?.amount || '25'} 
          onPageChange={handlePageChange} 
        />;
      case 'thank-you':
        return <ThankYouPage onPageChange={handlePageChange} />;
      case 'president':
        return <PresidentPage onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactPage onPageChange={handlePageChange} />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-off-white">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main>
        {renderCurrentPage()}
      </main>
      
      {/* Footer - Only show on main pages, not checkout/thank-you */}
      {!['checkout', 'thank-you'].includes(currentPage) && (
        <footer className="bg-gray-800 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-montserrat font-bold text-xl mb-4">Chipata Girls FC</h3>
                <p className="font-lato text-gray-300">
                  Empowering girls through football, education, and life skills in Chipata, Zambia.
                </p>
              </div>
              
              <div>
                <h4 className="font-montserrat font-medium text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2 font-lato">
                  <li><button onClick={() => handlePageChange('about')} className="text-gray-300 hover:text-white">About Us</button></li>
                  <li><button onClick={() => handlePageChange('programs')} className="text-gray-300 hover:text-white">What We Do</button></li>
                  <li><button onClick={() => handlePageChange('team')} className="text-gray-300 hover:text-white">Follow the Team</button></li>
                  <li><button onClick={() => handlePageChange('alumni')} className="text-gray-300 hover:text-white">Alumni</button></li>
                  <li><button onClick={() => handlePageChange('president')} className="text-gray-300 hover:text-white">President's Office</button></li>
                  <li><button onClick={() => handlePageChange('donate')} className="text-gray-300 hover:text-white">Donate</button></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-montserrat font-medium text-lg mb-4">Contact</h4>
                <p className="font-lato text-gray-300 mb-2">Chipata, Eastern Province</p>
                <p className="font-lato text-gray-300 mb-2">Zambia</p>
                <p className="font-lato text-gray-300 mb-2">info@chipatagirlsfc.org</p>
                <p className="font-lato text-gray-300">+260 XXX XXX XXX</p>
              </div>
              
              <div>
                <h4 className="font-montserrat font-medium text-lg mb-4">Follow Us</h4>
                <p className="font-lato text-gray-300 mb-4">
                  Connect with us on social media for the latest updates and match results.
                </p>
                <div className="flex flex-col space-y-2">
                  <button 
                    onClick={() => handlePageChange('contact')} 
                    className="text-gray-300 hover:text-white text-left"
                  >
                    Facebook
                  </button>
                  <button 
                    onClick={() => handlePageChange('contact')} 
                    className="text-gray-300 hover:text-white text-left"
                  >
                    Instagram
                  </button>
                  <button 
                    onClick={() => handlePageChange('contact')} 
                    className="text-gray-300 hover:text-white text-left"
                  >
                    Twitter
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="font-lato text-gray-300">
                © 2024 Chipata Girls FC. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}