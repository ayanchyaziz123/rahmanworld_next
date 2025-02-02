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
                    <div className="mt-4">
                        
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                Hi, I&apos;m Rahman
                                <span className="text-yellow-600">.</span>
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 text-transparent bg-clip-text">
                                AI Software Engineer
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                I am Rahman Azizur Ayan. I have a strong interest in machine learning and its applications in astronomy. Here are some of my
                                <Link href="/research_papers" target="_blank" className="text-yellow-600 hover:text-yellow-800 underline"> research papers</Link>.
                                I have also worked on several exciting
                                <Link href="/projects" target="_blank" className="text-yellow-600 hover:text-yellow-800 underline"> projects</Link>.
                                You can check out my
                                <Link href="/achievements" target="_blank" className="text-yellow-600 hover:text-yellow-800 underline"> achievements</Link> as well.
                                Additionally, I have solved over
                                <Link href="https://leetcode.com/u/Eclipsewolf28/" target="_blank" className="text-yellow-600 hover:text-yellow-800 underline font-semibold"> 500 LeetCode problems</Link>, focusing on data structures and algorithms.
                                You can also explore my 
                                <Link href="/about#education"  className="text-yellow-600 hover:text-yellow-800 underline"> educational background</Link> and 
                                <Link href="/about#experience"  className="text-yellow-600 hover:text-yellow-800 underline"> professional experience</Link>.
                            </p>



                        </div>

                        <div className="flex  space-x-4">
                          
                            <Link
                                href="/contact" 
                                className="flex items-center border border-yellow-600 text-yellow-600 px-6 py-3 rounded-lg hover:bg-yellow-50 transition-colors duration-300 mt-4"
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