import React from 'react';
import { BookOpen, Code, Brain, Rocket } from 'lucide-react';

const Biography = () => {
    const highlights = [
        {
            icon: <Code className="w-6 h-6 text-blue-600" />,
            title: "Technical Expertise",
            description: "Proficient in C, C++, Java, Python, and JavaScript, with strong foundations in data structures and algorithms."
        },
        {
            icon: <Brain className="w-6 h-6 text-blue-600" />,
            title: "AI & Machine Learning",
            description: "Passionate about implementing AI solutions and exploring cutting-edge machine learning technologies."
        },
        {
            icon: <Rocket className="w-6 h-6 text-blue-600" />,
            title: "Innovation Focus",
            description: "Dedicated to creating innovative solutions that push the boundaries of technology."
        }
    ];

    return (
        <section id="biography" className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            Biography
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <span className="text-2xl font-semibold text-blue-600 block mb-4">
                                    Hi there! 👋
                                </span>
                                I&apos;m Rahman Azizur Ayan, a dedicated software engineer with a passion for the cosmos. 
                                Welcome to my space where technology meets the stars! I have a strong foundation in data 
                                structures, algorithms, and object-oriented programming, and I thrive on tackling complex 
                                challenges to bring innovative ideas to life.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                My experience spans diverse domains, from developing advanced eCommerce platforms using 
                                Django, React, MySQL, and Machine Learning to implementing optimized algorithms in 
                                high-performance software solutions. My versatile skill set enables me to build efficient 
                                and scalable solutions across different technology stacks.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                I&apos;m also a strong advocate for collaboration, valuing the synergy of working with 
                                talented professionals who share a passion for problem-solving. Let&apos;s connect, explore 
                                ideas, and work together to drive success in the world of technology and computer science.
                            </p>
                        </div>
                    </div>

                    {/* Highlights Section */}
                    <div className="space-y-4">
                        {highlights.map((highlight, index) => (
                            <div 
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-blue-50 rounded-lg">
                                        {highlight.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900 mb-2">
                                            {highlight.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {highlight.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Technical Proficiencies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Python', 'JavaScript', 'React', 'Django', 'Java', 'C++', 'MySQL', 'Machine Learning'].map((skill, index) => (
                            <div 
                                key={index}
                                className="bg-gray-50 px-4 py-2 rounded-lg text-center text-gray-700 text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors duration-300"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Biography;