'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Trophy, University, Code, Star, BookCheck, FileText, Download } from 'lucide-react';

const AchievementsPage = () => {
    const achievements = [
        {
            icon: <Trophy className="w-6 h-6 text-yellow-600" />,
            title: "Competitive Programming",
            description: "Solved over 500+ problems on LeetCode and CodeForces, demonstrating strong algorithmic problem-solving skills and proficiency in data structures.",
            highlight: "1000+ Coding Challenges Solved"
        },
        {
            icon: <University className="w-6 h-6 text-yellow-600" />,
            title: "Indiana Wesleyan University",
            description: "Computer Science student at Indiana Wesleyan University, pursuing advanced knowledge in software engineering and technology.",
            highlight: "Dedicated Computer Science Student"
        },
        {
            icon: <Code className="w-6 h-6 text-yellow-600" />,
            title: "Open Source Contributions",
            description: "Active contributor to open-source projects, showcasing collaborative skills and commitment to the developer community.",
            highlight: "Multiple Repository Contributions"
        },
        {
            icon: <Star className="w-6 h-6 text-yellow-600" />,
            title: "Machine Learning Projects",
            description: "Developed innovative machine learning projects, including AI-driven applications that solve real-world problems.",
            highlight: "Innovative AI Solutions"
        },
        {
            icon: <BookCheck className="w-6 h-6 text-yellow-600" />,
            title: "Technical Skills",
            description: "Continuously expanding technical expertise through advanced programming, machine learning, and software development projects.",
            highlight: "Multidisciplinary Technical Skills"
        }
    ];

    const certificatesData = [
        {
            title: "Build Your First React Website",
            issuer: "Coursera",
            date: "June 2023",
            pdfUrl: "/certificates/Build Your First React Website.pdf"
        },
        {
            title: "AI For Everyone",
            issuer: "Coursera",
            date: "September 2022",
            pdfUrl: "/certificates/AI For Everyone.pdf"
        },
        {
            title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
            issuer: "Coursera",
            date: "March 2023",
            pdfUrl: "/certificates/Front-End Web UI Frameworks and Tools: Bootstrap 4.pdf"
        },
        {
            title: "Build Your Portfolio Website with HTML and CSS",
            issuer: "CompTIA",
            date: "November 2022",
            pdfUrl: "/certificates/Build Your Portfolio Website with HTML and CSS.pdf"
        }
    ];

    const [selectedCertificate, setSelectedCertificate] = useState(certificatesData[0]);

    const handleCertificateClick = (certificate) => {
        setSelectedCertificate(certificate);
    };

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
            {/* Achievements Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                                Achievements
                            </span>
                        </h2>
                        <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Achievements Row */}
                    <div className="flex flex-nowrap overflow-x-auto space-x-6 pb-6">
                        {achievements.map((achievement, index) => (
                            <div 
                                key={index}
                                className="flex-shrink-0 w-96 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="p-3 bg-yellow-50 rounded-lg">
                                        {achievement.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-yellow-800">
                                        {achievement.title}
                                    </h3>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    {achievement.description}
                                </p>
                                <div className="bg-yellow-50 p-3 rounded-lg">
                                    <span className="text-yellow-800 font-semibold">
                                        {achievement.highlight}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificates Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-yellow-600">
                        Professional Certifications
                    </h1>
                    
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8">
                        {/* Certificates List */}
                        <div className="space-y-4 sm:space-y-6">
                            {certificatesData.map((cert, index) => (
                                <div 
                                    key={index} 
                                    onClick={() => handleCertificateClick(cert)}
                                    className={`
                                        p-4 sm:p-6 rounded-xl border cursor-pointer transition-all duration-300
                                        ${selectedCertificate === cert 
                                            ? 'bg-yellow-50 border-yellow-600 shadow-lg' 
                                            : 'bg-white border-gray-200 hover:bg-gray-50'}
                                    `}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{cert.title}</h3>
                                            <p className="text-sm sm:text-base text-gray-600">{cert.issuer} • {cert.date}</p>
                                        </div>
                                        <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Certificate Preview */}
                        <div className="bg-white rounded-xl border p-6 sm:p-8 flex flex-col items-center justify-center mt-6 md:mt-0">
                            {selectedCertificate ? (
                                <div className="text-center">
                                    <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-600">
                                        {selectedCertificate.title}
                                    </h2>
                                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                                        Issued by {selectedCertificate.issuer} on {selectedCertificate.date}
                                    </p>
                                    
                                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
                                        <Link 
                                            href={selectedCertificate.pdfUrl} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center bg-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-yellow-700 transition-colors"
                                        >
                                            <FileText className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> View Certificate
                                        </Link>
                                        <Link 
                                            href={selectedCertificate.pdfUrl} 
                                            download
                                            className="flex items-center justify-center border border-yellow-600 text-yellow-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-yellow-50 transition-colors"
                                        >
                                            <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Download PDF
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center text-gray-500">
                                    <FileText className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-gray-300" />
                                    <p className="text-sm sm:text-base">Select a certificate to preview</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AchievementsPage;