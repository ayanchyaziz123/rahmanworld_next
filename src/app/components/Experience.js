import React from 'react';
import { BookUser, Shield, Code } from 'lucide-react';

const Experience = () => {
    const experienceDetails = [
        {
            icon: <Code className="w-6 h-6 text-blue-600" />,
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
            icon: <BookUser className="w-6 h-6 text-blue-600" />,
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
            icon: <Shield className="w-6 h-6 text-blue-600" />,
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
                                    <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
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