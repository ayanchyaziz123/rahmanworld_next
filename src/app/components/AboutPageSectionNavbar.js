'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const AboutPageSectionNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = useCallback(() => {
    // More robust scroll detection for mobile
    const scrollPosition = window.scrollY || window.pageYOffset;
    const triggerHeight = 300; // pixels from top of page
    
    setIsSticky(scrollPosition > triggerHeight);
  }, []);

  useEffect(() => {
    // Passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const sections = [
    { name: 'Profile', href: '#profile' },
    { name: 'Bio', href: '#biography' },
    { name: 'Projects', href: '#artifacts' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Interests', href: '#interests' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div 
      className={`${isSticky 
        ? 'fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ease-in-out' 
        : 'relative'} 
      bg-white/90 backdrop-blur-sm shadow-sm touch-manipulation`}
      style={{
        transform: isSticky ? 'translateY(0)' : 'translateY(-100%)',
        opacity: isSticky ? 1 : 0
      }}
    >
      <nav className="container mx-auto px-4 py-2 max-w-6xl">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-2 overflow-x-auto">
          {sections.map((section) => (
            <Link 
              key={section.href}
              href={section.href}
              scroll={false}
              className="text-xs text-gray-600 hover:text-blue-600 transition-colors duration-300 px-2 py-1 rounded-md hover:bg-blue-50"
              onClick={closeMenu}
            >
              {section.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          <div className="text-sm font-semibold text-blue-600">Sections</div>
          <button 
            onClick={toggleMenu} 
            className="text-blue-600 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div 
            className="md:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg"
            style={{ 
              maxHeight: '70vh', 
              overflowY: 'auto' 
            }}
          >
            <div className="flex flex-col">
              {sections.map((section) => (
                <Link 
                  key={section.href}
                  href={section.href}
                  scroll={false}
                  className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-300 px-4 py-3 border-b last:border-b-0 hover:bg-blue-50"
                  onClick={closeMenu}
                >
                  {section.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default AboutPageSectionNavbar;