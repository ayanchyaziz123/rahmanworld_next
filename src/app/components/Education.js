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
        <section id="education" className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Education Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationDetails.map((edu, index) => (
                        <div 
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-start space-x-4 mb-4">
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    {edu.icon}
                                </div>
                                <div>
                                    <img 
                                        src={edu.logo} 
                                        alt={`${edu.institution} logo`} 
                                        className="w-32 h-20 mb-4 rounded object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-blue-800">
                                {edu.degree}
                            </h3>
                            <p className="text-gray-700 mb-2">{edu.institution}</p>
                            <p className="text-gray-500 mb-4">{edu.period}</p>
                            <p className="text-gray-700 text-md">
                                {edu.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;