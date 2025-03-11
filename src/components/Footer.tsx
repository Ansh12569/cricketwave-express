
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="cricket-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">CricketExpress</h3>
            <p className="text-sm mb-4">
              Your ultimate destination for cricket news, live scores, and in-depth coverage of all cricket formats worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/live-scores" className="hover:text-white transition-colors">Live Scores</Link>
              </li>
              <li>
                <Link to="/series" className="hover:text-white transition-colors">Series</Link>
              </li>
              <li>
                <Link to="/teams" className="hover:text-white transition-colors">Teams</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">News</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Cricket Formats</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/ipl" className="hover:text-white transition-colors">IPL</Link>
              </li>
              <li>
                <Link to="/world-cup" className="hover:text-white transition-colors">World Cup</Link>
              </li>
              <li>
                <Link to="/champions-trophy" className="hover:text-white transition-colors">Champions Trophy</Link>
              </li>
              <li>
                <Link to="/womens-cricket" className="hover:text-white transition-colors">Women's Cricket</Link>
              </li>
              <li>
                <Link to="/domestic" className="hover:text-white transition-colors">Domestic Cricket</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest cricket updates and news.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white text-sm px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-cricket-500 flex-1"
              />
              <button className="bg-cricket-600 hover:bg-cricket-700 text-white text-sm px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 CricketExpress. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-gray-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="mt-6 text-xs text-center text-gray-600">
          <p>
            CricketExpress is not affiliated with the ICC, BCCI, or any official cricket organization.
            Powered by WordPress.
          </p>
          <p className="mt-1">
            This site includes cricket data managed through WordPress.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
