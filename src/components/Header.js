// src/components/Header.js
'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();  // Use usePathname instead of useRouter

  // Function to check if the link is active
  const isActive = (path) => pathname === path ? 'text-yellow-600' : 'text-gray-700';

  return (
    <nav id="navbar" className="text-gray-800 p-4 sticky top-0 z-50 transition-shadow duration-300 ease-in-out bg-[#f8f6f3]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name */}
        <div className="text-xl font-bold">
          <Link href="/">
            <span className="hover:underline transition duration-300 ease-in-out" style={{ color: '#996232' }}>
              Rahman Azizur
            </span>
          </Link>
        </div>
        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Navigation Links for Desktop */}
        <div className={`hidden md:flex space-x-6`}>
          <Link href="/" className={`text-lg font-semibold ${isActive('/')}`}>Home</Link>
          <Link href="/blogs" className={`text-lg font-semibold ${isActive('/blogs')}`}>Blogs</Link>
          <Link href="/projects" className={`text-lg font-semibold ${isActive('/projects')}`}>Projects</Link>
          <Link href="/about" className={`text-lg font-semibold ${isActive('/about_me')}`}>Portfolio</Link>
          <Link href="/contact" className={`text-lg font-semibold ${isActive('/contact')}`}>Contact</Link>
        </div>
      </div>
      
      {/* Slide-in Navigation Menu for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 w-3/4 bg-white text-gray-800 p-4 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
      >
        <button onClick={() => setIsOpen(false)} className="text-gray-800 focus:outline-none mb-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="flex flex-col space-y-4">
          <Link href="/" className={`text-lg font-semibold ${isActive('/')}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/blogs" className={`text-lg font-semibold ${isActive('/blogs')}`} onClick={() => setIsOpen(false)}>Blogs</Link>
          <Link href="/projects" className={`text-lg font-semibold ${isActive('/projects')}`} onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/about" className={`text-lg font-semibold ${isActive('/about_me')}`} onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/contact" className={`text-lg font-semibold ${isActive('/contact')}`} onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </div>
    </nav>
  );
};

export default Header;
