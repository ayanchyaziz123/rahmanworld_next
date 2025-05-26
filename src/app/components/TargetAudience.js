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
        <section id="target-audience" className="max-w-5xl mx-auto px-6 py-12">
            <div className="bg-white">
                <header className="mb-6">
                    <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3">
                        Target Audience
                    </h2>
                </header>

                <div className="space-y-8">
                    {audienceCategories.map((category, index) => (
                        <article 
                            key={index}
                            className="bg-white border-b border-gray-100 last:border-0 pb-8 last:pb-0"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-blue-50 rounded">
                                    {category.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-medium text-gray-900 mb-3">
                                        {category.title}
                                    </h3>
                                    <div className="prose max-w-none">
                                        <p className="text-gray-700 leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;