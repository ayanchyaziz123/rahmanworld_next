'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Trophy, University, Code, Star, BookCheck, FileText, Download } from 'lucide-react';

const AchievementsPage = () => {
    const achievements = [
        {
            icon: <Trophy className="w-6 h-6 text-blue-600" />,
            title: "Competitive Programming",
            description: "Solved over 500+ problems on LeetCode and CodeForces, demonstrating strong algorithmic problem-solving skills and proficiency in data structures.",
            highlight: "1000+ Coding Challenges Solved"
        },
        {
            icon: <University className="w-6 h-6 text-blue-600" />,
            title: "Indiana Wesleyan University",
            description: "Computer Science student at Indiana Wesleyan University, pursuing advanced knowledge in software engineering and technology.",
            highlight: "Dedicated Computer Science Student"
        },
        {
            icon: <Code className="w-6 h-6 text-blue-600" />,
            title: "Open Source Contributions",
            description: "Active contributor to open-source projects, showcasing collaborative skills and commitment to the developer community.",
            highlight: "Multiple Repository Contributions"
        },
        {
            icon: <Star className="w-6 h-6 text-blue-600" />,
            title: "Machine Learning Projects",
            description: "Developed innovative machine learning projects, including AI-driven applications that solve real-world problems.",
            highlight: "Innovative AI Solutions"
        },
        {
            icon: <BookCheck className="w-6 h-6 text-blue-600" />,
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
        <div className="min-h-screen">
            {/* Achievements Section */}
            <section className="max-w-5xl mx-auto px-6 py-12">
                <div className="bg-white mb-12">
                    <header className="mb-6">
                        <h1 className="text-3xl font-light text-gray-900 border-b border-gray-200 pb-3">
                            Key Achievements
                        </h1>
                    </header>

                    <div className="space-y-8">
                        {achievements.map((achievement, index) => (
                            <article 
                                key={index}
                                className="bg-white border-b border-gray-100 last:border-0 pb-8 last:pb-0"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-blue-50 rounded">
                                        {achievement.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-medium text-gray-900 mb-2">
                                            {achievement.title}
                                        </h3>
                                        <div className="prose max-w-none mb-3">
                                            <p className="text-gray-700 leading-relaxed">
                                                {achievement.description}
                                            </p>
                                        </div>
                                        <div className="bg-blue-50 px-3 py-2 inline-block">
                                            <span className="text-blue-700 font-medium text-sm">
                                                {achievement.highlight}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificates Section */}
            <section className="max-w-5xl mx-auto px-6 pb-12">
                <div className="bg-white">
                    <header className="mb-6">
                        <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3">
                            Professional Certifications
                        </h2>
                    </header>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Certificates List */}
                        <div className="space-y-4">
                            {certificatesData.map((cert, index) => (
                                <div 
                                    key={index} 
                                    onClick={() => handleCertificateClick(cert)}
                                    className={`
                                        p-4 border cursor-pointer transition-colors duration-200
                                        ${selectedCertificate === cert 
                                            ? 'bg-blue-50 border-blue-600' 
                                            : 'bg-white border-gray-200 hover:bg-gray-50'}
                                    `}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-900">{cert.title}</h3>
                                            <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                                        </div>
                                        <FileText className="w-5 h-5 text-blue-600" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Certificate Preview */}
                        <div className="bg-slate-50 border border-gray-200 p-6 flex flex-col items-center justify-center">
                            {selectedCertificate ? (
                                <div className="text-center">
                                    <h3 className="text-xl font-medium mb-3 text-gray-900">
                                        {selectedCertificate.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-6">
                                        Issued by {selectedCertificate.issuer} on {selectedCertificate.date}
                                    </p>
                                    
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Link 
                                            href={selectedCertificate.pdfUrl} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                                        >
                                            <FileText className="w-4 h-4" /> 
                                            View Certificate
                                        </Link>
                                        <Link 
                                            href={selectedCertificate.pdfUrl} 
                                            download
                                            className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-50 transition-colors duration-200"
                                        >
                                            <Download className="w-4 h-4" /> 
                                            Download PDF
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center text-gray-500">
                                    <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                                    <p className="text-sm">Select a certificate to preview</p>
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