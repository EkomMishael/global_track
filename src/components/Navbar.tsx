import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { FaBars, FaTimes } from 'react-icons/fa';
import Icon from './icons/Icon';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <nav className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-lg border-b`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#ffbe03]' : 'text-gray-700 hover:text-[#351c15]'} px-3 py-2 rounded-md text-sm font-medium`}>Home</Link>
              <Link to="/about" className={`${isDarkMode ? 'text-gray-300 hover:text-[#ffbe03]' : 'text-gray-700 hover:text-[#351c15]'} px-3 py-2 rounded-md text-sm font-medium`}>About</Link>
              <Link to="/services" className={`${isDarkMode ? 'text-gray-300 hover:text-[#ffbe03]' : 'text-gray-700 hover:text-[#351c15]'} px-3 py-2 rounded-md text-sm font-medium`}>Services</Link>
              <Link to="/track" className={`${isDarkMode ? 'bg-[#ffbe03] text-gray-900' : 'bg-[#351c15] text-white'} hover:bg-[#e6a902] px-3 py-2 rounded-md text-sm font-medium`}>Track Package</Link>
              <Link to="/contact" className={`${isDarkMode ? 'text-gray-300 hover:text-[#ffbe03]' : 'text-gray-700 hover:text-[#351c15]'} px-3 py-2 rounded-md text-sm font-medium`}>Contact</Link>
              <Link to="/login" className={`${isDarkMode ? 'text-gray-300 hover:text-[#ffbe03]' : 'text-gray-700 hover:text-[#351c15]'} px-3 py-2 rounded-md text-sm font-medium`}>Login</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-[#ffbe03]' 
                  : 'text-gray-400 hover:text-[#351c15]'
              }`}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Icon icon={isOpen ? FaTimes : FaBars} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <Link to="/" className={`${isDarkMode ? 'text-gray-300 hover:text-[#ffbe03]' : 'text-gray-700 hover:text-[#351c15]'} block px-3 py-2 rounded-md text-base font-medium`}>Home</Link>
            <Link to="/about" className={`${isDarkMode ? 'text-gray-300 hover:text-[#ffbe03]' : 'text-gray-700 hover:text-[#351c15]'} block px-3 py-2 rounded-md text-base font-medium`}>About</Link>
            <Link to="/services" className={`${isDarkMode ? 'text-gray-300 hover:text-[#ffbe03]' : 'text-gray-700 hover:text-[#351c15]'} block px-3 py-2 rounded-md text-base font-medium`}>Services</Link>
            <Link to="/track" className={`${isDarkMode ? 'bg-[#ffbe03] text-gray-900' : 'bg-[#351c15] text-white'} hover:bg-[#e6a902] block px-3 py-2 rounded-md text-base font-medium`}>Track Package</Link>
            <Link to="/contact" className={`${isDarkMode ? 'text-gray-300 hover:text-[#ffbe03]' : 'text-gray-700 hover:text-[#351c15]'} block px-3 py-2 rounded-md text-base font-medium`}>Contact</Link>
            <Link to="/login" className={`${isDarkMode ? 'text-gray-300 hover:text-[#ffbe03]' : 'text-gray-700 hover:text-[#351c15]'} block px-3 py-2 rounded-md text-base font-medium`}>Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 