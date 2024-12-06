import React from 'react';
import { BookUser, Shield, Code } from 'lucide-react';

const Experience = () => {
    const experienceDetails = [
        {
            icon: <Code className="w-6 h-6 text-yellow-600" />,
            title: "Software Engineer Intern",
            company: "Next Generation Innovation LLC",
            period: "2024 - Present",
            responsibilities: [
                "Participating in software development projects as part of Curricular Practical Training (CPT) for international student experience.",
                "Gaining hands-on experience in software engineering practices and industry workflows.",
                "Collaborating with team members to develop and improve software solutions.",
                "Applying academic knowledge to real-world software development challenges.",
                "Contributing to the company's technological innovation and growth."
            ]
        },
        {
            icon: <BookUser className="w-6 h-6 text-yellow-600" />,
            title: "Coding Mentor",
            company: "CUNY Queens College",
            period: "2023 - 2024",
            responsibilities: [
                "Supported students and aspiring developers in learning programming languages and concepts.",
                "Assisted in understanding and applying object-oriented programming principles.",
                "Helped with debugging, troubleshooting code, and improving efficiency.",
                "Encouraged clean code, modularization, and proper documentation.",
                "Provided insights into the software development industry and technical interview preparation."
            ]
        },
        {
            icon: <Shield className="w-6 h-6 text-yellow-600" />,
            title: "Software + SQA Engineer",
            company: "Inverse AI, Bangladesh",
            period: "2022 - 2023",
            responsibilities: [
                "Developed and maintained automated test scripts using Selenium and Python for quality assurance.",
                "Conducted functional and performance testing on a video editor application for Android.",
                "Tested video compression functionality, ensuring optimized performance and quality output.",
                "Documented bugs and collaborated with developers to troubleshoot and resolve issues effectively.",
                "Ensured software met high standards by implementing thorough testing procedures and best practices."
            ]
        }
    ];

    return (
        <section id="experience" className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                </div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experienceDetails.map((exp, index) => (
                        <div 
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-start space-x-4 mb-4">
                                <div className="p-3 bg-yellow-50 rounded-lg">
                                    {exp.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-yellow-800">
                                        {exp.title}
                                    </h3>
                                    <p className="text-gray-700">{exp.company}</p>
                                    <p className="text-gray-500 mb-4">{exp.period}</p>
                                </div>
                            </div>
                            <ul className="space-y-2">
                                {exp.responsibilities.map((responsibility, idx) => (
                                    <li 
                                        key={idx} 
                                        className="text-gray-700 text-sm before:content-['•'] before:text-yellow-600 before:mr-2 before:font-bold"
                                    >
                                        {responsibility}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;