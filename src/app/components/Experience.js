import React from 'react';
import { BookUser, Shield, Code } from 'lucide-react';

const Experience = () => {
    const experienceDetails = [
        {
            icon: <Code className="w-6 h-6 text-blue-600" />,
            title: "Software Engineer Intern",
            company: "NGI (Next Generation Innovation)",
            type: "Full Time",
            location: "New York, USA",
            period: "April 2025 – July 2025",
            responsibilities: [
                "Developed an AI-powered transcription app using OpenAI Whisper, Django, and Next.js for real-time speech-to-text and task detection.",
                "Built a scalable company website with Next.js and Django, improving load performance by 25%.",
                "Created modular, reusable frontend components to enhance code quality and development speed.",
                "Collaborated with backend engineers and UI/UX designers for seamless integration and responsive UX."
            ]
        },
        {
            icon: <BookUser className="w-6 h-6 text-blue-600" />,
            title: "Coding Mentor",
            company: "Indiana Wesleyan University",
            type: "Part Time",
            location: "Merrillville, USA",
            period: "Jan 2025 – Feb 2026",
            responsibilities: [
                "Mentored junior students in Python, Java, C, and C++, strengthening coding and problem-solving skills.",
                "Guided application of OOP principles for clean, maintainable code.",
                "Assisted in developing and improving small projects, reinforcing software design best practices."
            ]
        },
        {
            icon: <Shield className="w-6 h-6 text-blue-600" />,
            title: "Software Engineer",
            company: "Inverse AI",
            type: "Full Time",
            location: "Sylhet, Bangladesh",
            period: "Nov 2021 – Dec 2022",
            responsibilities: [
                "Designed automated test scripts with Python, OOP, and PyTest, improving coverage and reliability.",
                "Built and maintained API and mobile automation frameworks using Appium.",
                "Performed functional, regression, and integration testing across web and mobile platforms.",
                "Collaborated in Agile sprints, reporting defects and validating fixes for on-time releases."
            ]
        }
    ];

    return (
        <section id="experience" className="max-w-5xl mx-auto px-6 py-12">
            <div className="bg-white">
                <header className="mb-6">
                    <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3">
                        Professional Experience
                    </h2>
                </header>

                <div className="space-y-8">
                    {experienceDetails.map((exp, index) => (
                        <article key={index} className="bg-white border-b border-gray-100 last:border-0 pb-8 last:pb-0">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-2 bg-blue-50 rounded">
                                    {exp.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-medium text-gray-900 mb-1">
                                        {exp.title}
                                    </h3>
                                    <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mb-4">
                                        <span>{exp.period}</span>
                                        <span className="text-gray-300">·</span>
                                        <span>{exp.type}</span>
                                        <span className="text-gray-300">·</span>
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="prose max-w-none">
                                <ul className="text-gray-700 space-y-2">
                                    {exp.responsibilities.map((responsibility, idx) => (
                                        <li key={idx} className="leading-relaxed">
                                            {responsibility}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
