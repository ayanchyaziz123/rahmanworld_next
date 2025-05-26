'use client';
import React from "react";
import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code2, User, Briefcase, GraduationCap } from 'lucide-react';

const Profile = () => {
    const interests = [
        "Software Engineering", "Machine Learning", "Algorithms", "Astronomy", "Quantum Computing"
    ];

    const stats = [
        { label: "Projects", value: "50+" },
        { label: "LeetCode", value: "500+" },
        { label: "Experience", value: "3+ Years" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-slate-50 border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6 py-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Profile Image */}
                        <div className="relative">
                            <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                <img
                                    src="/images/cover.jpeg"
                                    alt="Rahman's Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Header Content */}
                        <div className="text-center lg:text-left flex-1">
                            <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-2">
                                AZIZUR RAHMAN
                            </h1>
                            <h2 className="text-xl lg:text-2xl text-blue-600 font-normal mb-4">
                                AI Software Engineer
                            </h2>
                            
                            {/* Social Links */}
                            <div className="flex justify-center lg:justify-start gap-4 mb-4">
                                <a
                                    href="https://www.linkedin.com/in/azizur-rahman-720636165/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://github.com/ayanchyaziz123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <a
                                    href="mailto:azizurusa22@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-red-500 transition-colors duration-200"
                                >
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Stats */}
                            <div className="flex justify-center lg:justify-start gap-6 text-sm text-gray-600">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="font-semibold text-gray-900">{stat.value}</div>
                                        <div>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Section */}
                        <article className="bg-white">
                            <header className="mb-6">
                                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3">
                                    About Me
                                </h2>
                            </header>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Hi, I&apos;m Rahman! I have a strong interest in machine learning and its applications in astronomy. 
                                    My passion lies in exploring the intersection of artificial intelligence and space science, 
                                    developing innovative solutions that push the boundaries of what's possible.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Here are some highlights of my work and achievements:
                                </p>
                                <ul className="text-gray-700 space-y-2 mt-4">
                                    <li>
                                        Published <Link href="/research_papers" className="text-blue-600 hover:text-blue-800 underline">research papers</Link> in machine learning and astronomy
                                    </li>
                                    <li>
                                        Developed multiple <Link href="/projects" className="text-blue-600 hover:text-blue-800 underline">exciting projects</Link> combining AI and practical applications
                                    </li>
                                    <li>
                                        Earned recognition through various <Link href="/achievements" className="text-blue-600 hover:text-blue-800 underline">achievements</Link> in the field
                                    </li>
                                    <li>
                                        Solved over <Link href="https://leetcode.com/u/Eclipsewolf28/" target="_blank" className="text-blue-600 hover:text-blue-800 underline font-medium">500 LeetCode problems</Link>, focusing on data structures and algorithms
                                    </li>
                                </ul>
                            </div>
                        </article>

                        {/* Interests Section */}
                        <article className="bg-white">
                            <header className="mb-6">
                                <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3 flex items-center gap-3">
                                    <Terminal className="w-6 h-6 text-blue-600" />
                                    Areas of Interest
                                </h2>
                            </header>
                            <div className="flex flex-wrap gap-2">
                                {interests.map((interest, index) => (
                                    <span
                                        key={index}
                                        className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded hover:bg-gray-200 transition-colors duration-200"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </article>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick Links Widget */}
                        <div className="bg-slate-50 border border-gray-200 rounded p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                Quick Links
                            </h3>
                            <div className="space-y-3">
                                <Link 
                                    href="#education" 
                                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    <GraduationCap className="w-4 h-4" />
                                    Educational Background
                                </Link>
                                <Link 
                                    href="#experience" 
                                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    <Briefcase className="w-4 h-4" />
                                    Professional Experience
                                </Link>
                                <Link 
                                    href="/projects" 
                                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    <Code2 className="w-4 h-4" />
                                    View All Projects
                                </Link>
                                <Link 
                                    href="/research_papers" 
                                    className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Research Papers
                                </Link>
                            </div>
                        </div>

                        {/* Contact Widget */}
                        <div className="bg-blue-50 border border-blue-200 rounded p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-blue-200 pb-2">
                                Get In Touch
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Interested in collaborating or have questions about my work?
                            </p>
                            <a
                                href="mailto:azizurusa22@gmail.com"
                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors duration-200"
                            >
                                <Mail className="w-4 h-4" />
                                Send Email
                            </a>
                        </div>

                        {/* Meta Widget */}
                        <div className="bg-slate-50 border border-gray-200 rounded p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4 border-b border-gray-200 pb-2">
                                Profile Stats
                            </h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Total Projects:</span>
                                    <span className="font-medium text-gray-900">50+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">LeetCode Solved:</span>
                                    <span className="font-medium text-gray-900">500+</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Experience:</span>
                                    <span className="font-medium text-gray-900">3+ Years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;