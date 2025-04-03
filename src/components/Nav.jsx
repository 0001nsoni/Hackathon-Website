import React, { useState } from 'react';
import { Link } from 'react-scroll';
import AryaLogo from '../assets/Arya.jpg';
import Club from '../assets/hack.png';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'timeline', text: 'Timeline' },
    { id: 'tracks', text: 'Tracks' },
    { id: 'guests', text: 'Guests' },
    { id: 'faq', text: 'FAQ' },
    { id: 'contact', text: 'Contact' }
  ];

  return (
    <nav className="sticky top-0 w-full bg-[#0d0d0d]/90 backdrop-blur-sm z-50 
                   border-b border-[#eeba30]/30 py-4 shadow-lg h-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Desktop Navigation (unchanged) */}
        <div className="hidden md:flex mt-1.5 justify-between items-center">
          <div className="absolute left-6">
            <img 
              src={AryaLogo} 
              alt="Logo" 
              className="h-16 w-16 rounded-full object-cover border-2 border-[#eeba30]"
            />
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="flex gap-12">
              {navLinks.map((link) => (
                <NavLink key={link.id} to={link.id}>{link.text}</NavLink>
              ))}
            </div>
          </div>
          
          <div className="absolute right-6">
            <img 
              src={Club} 
              alt="Logo" 
              className="h-16 w-16 rounded-full object-cover border-2 border-[#eeba30]"
            />
          </div>
        </div>

        {/* Mobile Navigation - Modified layout */}
        <div className="md:hidden flex justify-between items-center">
          {/* Hamburger Menu (Left) */}
          <button
            onClick={toggleMenu}
            className="text-[#eeba30] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          {/* Both Logos (Right) */}
          <div className="flex items-center gap-4">
            <img 
              src={AryaLogo} 
              alt="Logo" 
              className="h-10 w-10 rounded-full object-cover border-2 border-[#eeba30]"
            />
            <img 
              src={Club} 
              alt="Logo" 
              className="h-10 w-10 rounded-full object-cover border-2 border-[#eeba30]"
            />
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="absolute top-20 left-0 right-0 bg-[#0d0d0d] py-4 px-6 shadow-lg border-t border-[#eeba30]/30">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <MobileNavLink 
                    key={link.id} 
                    to={link.id}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.text}
                  </MobileNavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// NavLink and MobileNavLink components remain the same
const NavLink = ({ to, children }) => {
  return (
    <Link
      activeClass="text-white"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="text-lg font-medium text-[#eeba30] hover:text-white
                transition-all duration-300 relative group cursor-pointer"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#eeba30] 
                      transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  return (
    <Link
      activeClass="text-purple-300 bg-purple-900/20"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={onClick}
      className="text-lg font-medium text-[#eeba30] hover:text-white
                py-2 px-4 transition-all duration-300 border-b border-[#eeba30]/20 cursor-pointer"
    >
      {children}
    </Link>
  );
};

export default Nav;