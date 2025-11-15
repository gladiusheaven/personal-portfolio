
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResumeDownload = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!window.confirm('Are you sure about to download my resume in PDF format')) {
      event.preventDefault();
    }
  };

  const NavLinks: React.FC = () => (
    <>
      {NAV_LINKS.map((link: NavLink, index) => (
        <li key={link.name}>
          <a
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-lightest-slate hover:text-green transition-colors duration-300 px-3 py-2 text-sm font-mono"
          >
            <span className="text-green mr-1">0{index + 1}.</span>
            {link.name}
          </a>
        </li>
      ))}
    </>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-light-navy/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20">
        <div className="text-green text-2xl font-bold font-mono">
          <a href="#">PP</a>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-4">
          <NavLinks />
          <li>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              download="Putranto_Pratama_Resume.pdf" 
              className="font-mono text-sm text-green border border-green rounded-md px-4 py-2 hover:bg-green/10 transition-colors duration-300"
              onClick={handleResumeDownload}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-light-navy transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'
        }`}
      >
        <ul className="flex flex-col items-center space-y-6 py-8">
          <NavLinks />
           <li>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              download="Putranto_Pratama_Resume.pdf" 
              className="font-mono text-sm text-green border border-green rounded-md px-12 py-3 hover:bg-green/10 transition-colors duration-300"
              onClick={handleResumeDownload}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
