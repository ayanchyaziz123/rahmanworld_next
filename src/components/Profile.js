'use client';
import React from "react";
import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code2 } from 'lucide-react';

const Profile = () => {
    const interests = [
        "Software Engineering", "Machine Learning", "Algorithms", "Astronomy", "Quantum Computing"
    ];

    const stats = [
        { label: "Projects", value: "50+" },
        { label: "LeetCode", value: "300+" },
        { label: "Experience", value: "3+ Years" }
    ];

    return (
        <div className=" bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Left Column - Profile Image & Info */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="relative group">
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/cover4.jpg"
                                    alt="Rahman's Profile"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Enhanced Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

                                {/* Stats Overlay with Enhanced Contrast */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/40">
                                    <div className="grid grid-cols-3 gap-4 text-white">
                                        {stats.map((stat, index) => (
                                            <div key={index} className="text-center">
                                                <div className="text-2xl font-bold">{stat.value}</div>
                                                <div className="text-sm opacity-80">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center gap-6 mt-6">
                                <a
                                    href="https://www.linkedin.com/in/azizur-rahman-720636165/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    <Linkedin className="w-6 h-6 text-blue-600" />
                                </a>
                                <a
                                    href="https://github.com/ayanchyaziz123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    <Github className="w-6 h-6 text-gray-800" />
                                </a>
                                <a
                                    href="mailto:azizurusa22@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    <Mail className="w-6 h-6 text-red-500" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                Hi, I&apos;m Rahman
                                <span className="text-yellow-600">.</span>
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-yellow-600 to-yellow-800 text-transparent bg-clip-text">
                                AI Software Engineer
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                I am Rahman. I have a strong interest in machine learning and its applications in astronomy. Here are some of my
                                <Link  href="/research_papers" target="_blank"  className="text-blue-500 hover:text-blue-700 underline"> research papers</Link>.
                                I have also worked on several exciting
                                <Link  href="/projects" target="_blank" className="text-green-500 hover:text-green-700 underline"> projects</Link>.
                                You can check out my
                                <Link  href="/achievements" target="_blank" className="text-purple-500 hover:text-purple-700 underline"> achievements</Link> as well.
                                Additionally, I have solved over
                                <Link  href="https://leetcode.com/u/Eclipsewolf28/" target="_blank"  className="text-red-500 hover:text-red-700 underline font-semibold"> 500 LeetCode problems</Link>, focusing on data structures and algorithms.
                            </p>


                        </div>



                        {/* Skills */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                <Terminal className="w-5 h-5" />
                                Interests
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {interests.map((interest, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;