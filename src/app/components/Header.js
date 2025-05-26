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
                className={`top-0 w-full z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200' 
                        : 'bg-white border-b border-gray-200'
                }`}
            >
                <div className="max-w-5xl mx-auto px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo - matching original style */}
                        <Link 
                            href="/" 
                            className="group"
                        >
                            <span className="text-xl font-light text-gray-900 tracking-wide">
                                AZIZUR RAHMAN
                            </span>
                        </Link>

                        {/* Desktop Navigation - minimal style */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`text-sm font-normal transition-colors duration-200 ${
                                        isActive(item.path)
                                            ? 'text-blue-600'
                                            : 'text-gray-600 hover:text-blue-600'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="md:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/20 z-50 md:hidden" onClick={() => setIsOpen(false)} />
            )}

            {/* Mobile Navigation Menu - matching original sidebar style */}
            <div
                className={`fixed top-0 right-0 w-72 h-full bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-slate-50">
                        <span className="text-lg font-light text-gray-900">Navigation</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Mobile Menu Items - matching original link style */}
                    <nav className="flex-1 overflow-y-auto py-6">
                        <div className="space-y-1 px-6">
                            {navigationItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className={`flex items-center gap-3 px-3 py-3 text-sm font-normal transition-colors duration-200 rounded ${
                                            isActive(item.path)
                                                ? 'text-blue-600 bg-blue-50'
                                                : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span>{item.label}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Mobile Menu Footer - matching original style */}
                    <div className="p-6 border-t border-gray-200 bg-slate-50">
                        <div className="text-xs text-gray-500 text-center">
                            AI Software Engineer
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;