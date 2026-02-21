'use client';
import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Profile = () => {
    return (
        <div className="bg-slate-50 border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">

                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <div className="w-44 h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img
                                src="/images/cover6.jpeg"
                                alt="Azizur Rahman"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-1 tracking-wide">
                            AZIZUR RAHMAN
                        </h1>
                        <p className="text-xl text-blue-600 font-normal mb-3">
                            Full-Stack AI Software Engineer
                        </p>

                        {/* Contact row */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-gray-600 mb-4">
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                New York, USA
                            </span>
                            <a href="mailto:azizurusa22@gmail.com" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                                <Mail className="w-3.5 h-3.5 text-gray-400" />
                                azizurusa22@gmail.com
                            </a>
                            <a href="tel:+13476696071" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                                <Phone className="w-3.5 h-3.5 text-gray-400" />
                                +1 (347) 669-6071
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="flex justify-center lg:justify-start gap-3 mb-5">
                            <a href="https://www.linkedin.com/in/azizur-rahman-720636165/" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-gray-600 border border-gray-300 px-3 py-1.5 rounded hover:border-blue-600 hover:text-blue-600 transition-colors duration-200">
                                <Linkedin className="w-4 h-4" /> LinkedIn
                            </a>
                            <a href="https://github.com/ayanchyaziz123" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-gray-600 border border-gray-300 px-3 py-1.5 rounded hover:border-gray-900 hover:text-gray-900 transition-colors duration-200">
                                <Github className="w-4 h-4" /> GitHub
                            </a>
                            <a href="https://leetcode.com/u/Eclipsewolf28/" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-gray-600 border border-gray-300 px-3 py-1.5 rounded hover:border-orange-500 hover:text-orange-500 transition-colors duration-200">
                                LeetCode 1000+
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                            {[
                                { label: 'Projects', value: '50+' },
                                { label: 'Experience', value: '3+ Yrs' },
                                { label: 'GPA (M.S.)', value: '4.0' },
                            ].map((s, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-lg font-semibold text-gray-900">{s.value}</div>
                                    <div className="text-gray-500">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
