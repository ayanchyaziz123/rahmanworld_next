import Link from 'next/link';
import React from 'react';
import { Rocket, ArrowRight } from 'lucide-react';
import TargetAudience from '@/app/components/TargetAudience';

const HomePage = () => {
    return (
      <>
        <section className="min-h-screen flex items-center bg-white">
            <div className="max-w-5xl mx-auto px-6">
                <div className="py-20">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 tracking-wide">
                                Hi, I'm Rahman
                                <span className="text-blue-600">.</span>
                            </h1>
                            <h2 className="text-2xl lg:text-3xl text-blue-600 font-normal">
                                AI Software Engineer
                            </h2>
                        </div>
                        
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed">
                                I am Rahman Azizur Ayan. I have a strong interest in machine learning and its applications in astronomy. Here are some of my
                                <Link href="/research_papers" className="text-blue-600 hover:text-blue-800 underline"> research papers</Link>.
                                I have also worked on several exciting
                                <Link href="/projects" className="text-blue-600 hover:text-blue-800 underline"> projects</Link>.
                                You can check out my
                                <Link href="/achievements" className="text-blue-600 hover:text-blue-800 underline"> achievements</Link> as well.
                                Additionally, I have solved over
                                <Link href="https://leetcode.com/u/Eclipsewolf28/" target="_blank" className="text-blue-600 hover:text-blue-800 underline font-medium"> 500 LeetCode problems</Link>, focusing on data structures and algorithms.
                                You can also explore my 
                                <Link href="/about#education" className="text-blue-600 hover:text-blue-800 underline"> educational background</Link> and 
                                <Link href="/about#experience" className="text-blue-600 hover:text-blue-800 underline"> professional experience</Link>.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="/contact" 
                                className="inline-flex items-center border border-blue-600 text-blue-600 px-6 py-3 text-sm font-medium hover:bg-blue-50 transition-colors duration-200"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-16 bg-slate-50 border border-gray-200 p-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { label: 'Projects Completed', value: '20+' },
                                { label: 'Technologies Mastered', value: '10+' },
                                { label: 'Years of Experience', value: '3+' },
                                { label: 'Satisfied Clients', value: '15+' }
                            ].map((stat, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <TargetAudience/>
        </>
    );
};

export default HomePage;