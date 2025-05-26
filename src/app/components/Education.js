import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
    const educationDetails = [
        {
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Masterlogo.png",
            degree: "Master of Science in Computer Science and Artificial Intelligence",
            institution: "Indiana Wesleyan University",
            period: "2024 - Present",
            description: "Advanced coursework in software architecture, machine learning, and cloud-based solutions. Engaged in research and capstone projects.",
            icon: <GraduationCap className="w-6 h-6 text-blue-600" />
        },
        {
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThojYZr_EOQlsW3U_UlbcConqVxaxyzsTpvw&s",
            degree: "Bachelor of Science in Computer Science and Engineering",
            institution: "Metropolitan University",
            period: "2018 - 2022",
            description: "Specialized in backend development and software engineering, with a focus on programming languages, algorithms, and database management.",
            icon: <BookOpen className="w-6 h-6 text-blue-600" />
        }
    ];

    return (
        <section id="education" className="max-w-5xl mx-auto px-6 py-12">
            <div className="bg-white">
                <header className="mb-6">
                    <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3">
                        Educational Background
                    </h2>
                </header>

                <div className="space-y-8">
                    {educationDetails.map((edu, index) => (
                        <article key={index} className="bg-white border-b border-gray-100 last:border-0 pb-8 last:pb-0">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-2 bg-blue-50 rounded">
                                    {edu.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start gap-4 mb-3">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-medium text-gray-900 mb-1">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                                            <p className="text-sm text-gray-500 mb-3">{edu.period}</p>
                                        </div>
                                        <img 
                                            src={edu.logo} 
                                            alt={`${edu.institution} logo`} 
                                            className="w-16 h-10 object-contain flex-shrink-0"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="prose max-w-none">
                                <p className="text-gray-700 leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;