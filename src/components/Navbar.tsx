
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Live Scores', path: '/live-scores' },
    { name: 'Series', path: '/series' },
    { name: 'Teams', path: '/teams' },
    { name: 'News', path: '/news' },
    { name: 'Videos', path: '/videos' },
    { name: 'Rankings', path: '/rankings' },
  ];

  return (
    <nav className="bg-white shadow-md dark:bg-gray-900 sticky top-0 z-50">
      <div className="cricket-container">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-cricket-600 text-2xl font-bold">Cricket<span className="text-accent">Express</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-gray-700 hover:text-cricket-600 font-medium text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Search and User */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search..." 
                className="pl-8 pr-4 py-1 w-40 lg:w-60 rounded-full text-sm" 
              />
            </div>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-gray-200 animate-fade-in">
            <div className="relative mb-4">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search..." 
                className="pl-8 pr-4 py-1 w-full rounded-full text-sm" 
              />
            </div>
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-gray-700 hover:text-cricket-600 text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 flex items-center justify-between border-t border-gray-200">
                <span className="text-sm text-gray-500">Theme</span>
                <Button variant="ghost" size="sm" onClick={toggleTheme} className="text-sm">
                  {isDarkMode ? (
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4" /> Light Mode
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Moon className="h-4 w-4" /> Dark Mode
                    </div>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
