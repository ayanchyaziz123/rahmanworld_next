import Link from 'next/link';
import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import TargetAudience from '@/components/TargetAudience';

const HomePage = () => {
    return (
      <>
        <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <Rocket className="w-8 h-8 text-yellow-600" />
                            <span className="text-gray-600 text-lg">Software Engineer & Tech Innovator</span>
                        </div>
                        <h1 className="text-5xl font-bold mb-4 leading-tight">
                            <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                                Rahman Azizur Ayan
                            </span>
                        </h1>
                        <p className="text-gray-700 text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
                            Crafting innovative software solutions at the intersection of technology and creativity. 
                            Passionate about transforming complex challenges into elegant, scalable applications.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <Link
                                href="/projects" 
                                className="flex items-center bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors duration-300"
                            >
                                View Projects
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="/contact" 
                                className="flex items-center border border-yellow-600 text-yellow-600 px-6 py-3 rounded-lg hover:bg-yellow-50 transition-colors duration-300"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-16 bg-white p-6 rounded-xl shadow-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { label: 'Projects Completed', value: '20+' },
                            { label: 'Technologies Mastered', value: '10+' },
                            { label: 'Years of Experience', value: '3+' },
                            { label: 'Satisfied Clients', value: '15+' }
                        ].map((stat, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors duration-300">
                                <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.value}</div>
                                <div className="text-gray-600 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <TargetAudience/>
        </>
    );
};

export default HomePage;