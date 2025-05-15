'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Home, BookOpen, Code, User, Mail, Trophy  } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navigationItems = [
        { path: '/', label: 'Home', icon: Home },
        { path: '/pages/blogs', label: 'Blogs', icon: BookOpen },
        { path: '/pages/artifacts', label: 'Artifacts', icon: Code },
        { path: '/pages/achievements', label: 'Achievements', icon: Trophy },
        { path: '/pages/about', label: 'Portfolio', icon: User },
        { path: '/pages/contact', label: 'Contact', icon: Mail },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isActive = (path) => pathname === path;

    return (
        <>
            <nav 
                className={`top-0 w-full  z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
                        : 'bg-[#f8f6f3]'
                }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link 
                            href="/" 
                            className="relative group"
                        >
                          <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">Azizur Rahman</span>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        isActive(item.path)
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden" onClick={() => setIsOpen(false)} />
            )}

            {/* Mobile Navigation Menu */}
            <div
                className={`fixed top-0 right-0 w-64 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <span className="font-semibold text-gray-900">Menu</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <nav className="flex-1 overflow-y-auto py-4">
                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                                        isActive(item.path)
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <Icon className="w-5 h-5" />
                                        <span>{item.label}</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;