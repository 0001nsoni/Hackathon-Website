// components/Nav.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';

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
                   border-b border-[#eeba30]/30 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-12">
          {navLinks.map((link) => (
            <NavLink key={link.id} to={link.id}>{link.text}</NavLink>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
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

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 right-0 bg-[#0d0d0d] py-4 px-6 shadow-lg border-t border-[#eeba30]/30">
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

const NavLink = ({ to, children }) => {
  return (
    <Link
      activeClass="active"
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
      activeClass="active"
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