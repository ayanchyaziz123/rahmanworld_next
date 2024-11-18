'use client';
import React from "react";
import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code2 } from 'lucide-react';

const Profile = () => {
    const skills = [
        "Artificial Intelligence", "Machine Learning", "Python", "React", "Node.js", "TensorFlow"
    ];

    const stats = [
        { label: "Projects", value: "50+" },
        { label: "LeetCode", value: "300+" },
        { label: "Experience", value: "3+ Years" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Left Column - Profile Image & Info */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="relative group">
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                <img 
                                    src="/images/cover.jpeg" 
                                    alt="Rahman's Profile" 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                            </div>
                            
                            {/* Stats Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
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
                        <div className="flex justify-center gap-6">
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
                                Specializing in artificial intelligence and machine learning solutions. 
                                Building intelligent systems that solve real-world problems through innovative technology.
                            </p>
                        </div>

                        {/* LeetCode Badge */}
                        <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <a
                                href="https://leetcode.com/u/Eclipsewolf28/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <Code2 className="w-6 h-6 text-yellow-600" />
                                    <span className="font-semibold text-gray-800">LeetCode Profile</span>
                                </div>
                                <ExternalLink className="w-5 h-5 text-gray-500" />
                            </a>
                        </div>

                        {/* Skills */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                                <Terminal className="w-5 h-5" />
                                Core Technologies
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">
                            <Link 
                                href="/projects"
                                className="inline-flex items-center gap-2 bg-yellow-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-yellow-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Explore My Work
                                <ExternalLink className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;