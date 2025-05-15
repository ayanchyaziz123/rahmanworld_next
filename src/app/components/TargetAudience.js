import React from "react";
import { Users, Target, Network, BookOpen } from 'lucide-react';

const TargetAudience = () => {
    const audienceCategories = [
        {
            icon: <Users className="w-6 h-6 text-blue-600" />,
            title: "Prospective Employers and Clients",
            description: "Organizations, including companies and startups, seeking a versatile software engineer, full-stack developer, or data scientist, will find this portfolio valuable. It demonstrates my technical expertise across both frontend and backend development and highlights my skills in machine learning and artificial intelligence, providing insight into my ability to contribute effectively to complex, data-driven projects."
        },
        {
            icon: <Network className="w-6 h-6 text-blue-600" />,
            title: "Collaborative Partners",
            description: "This portfolio appeals to fellow developers, designers, and data scientists who are looking for a skilled and cooperative partner. My work reflects a commitment to team-driven projects and showcases a proficiency in tackling diverse technical challenges while integrating seamlessly with other professionals to achieve shared goals."
        },
        {
            icon: <BookOpen className="w-6 h-6 text-blue-600" />,
            title: "Academic and Research Institutions",
            description: "Academic institutions and research organizations will find my portfolio relevant as it underscores a strong alignment between theory and practical application. It highlights my involvement in AI-driven projects and data science applications, making me a valuable candidate for research roles that push the boundaries of innovation in technology and applied sciences."
        },
        {
            icon: <Target className="w-6 h-6 text-blue-600" />,
            title: "Tech Enthusiasts and Learners",
            description: "This portfolio is designed to be an informative resource for students and emerging professionals in the tech industry. It provides insights into best practices in software development, coding methodologies, and applications of machine learning, offering a practical guide to real-world technology solutions."
        }
    ];

    return (
        <section id="target-audience" className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            Target Audience
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Audience Categories */}
                <div className="space-y-6">
                    {audienceCategories.map((category, index) => (
                        <div 
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    {category.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;