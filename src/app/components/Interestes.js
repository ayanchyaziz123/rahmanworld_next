import React from 'react';
import { 
    Brain, 
    Rocket, 
    Code, 
    Telescope, 
    Cpu, 
    Atom 
} from 'lucide-react';

const Interests = () => {
    const interestsList = [
        { 
            icon: <Brain className="w-6 h-6 text-blue-600" />, 
            title: "Machine Learning",
            description: "Exploring advanced algorithms and data-driven solutions that push the boundaries of artificial intelligence."
        },
        { 
            icon: <Atom className="w-6 h-6 text-blue-600" />, 
            title: "Artificial Intelligence", 
            description: "Investigating cutting-edge AI technologies and their potential to transform various industries."
        },
        { 
            icon: <Code className="w-6 h-6 text-blue-600" />, 
            title: "Coding and Software Development", 
            description: "Passionate about creating elegant, efficient, and scalable software solutions across diverse platforms."
        },
        { 
            icon: <Rocket className="w-6 h-6 text-blue-600" />, 
            title: "Space Engineering", 
            description: "Fascinated by the challenges of space exploration and the technological innovations driving astronomical research."
        },
        { 
            icon: <Telescope className="w-6 h-6 text-blue-600" />, 
            title: "Astronomy", 
            description: "Intrigued by the mysteries of the universe and the scientific exploration of celestial bodies and cosmic phenomena."
        },
        { 
            icon: <Cpu className="w-6 h-6 text-blue-600" />, 
            title: "Quantum Computing", 
            description: "Exploring the revolutionary potential of quantum technologies to solve complex computational problems."
        }
    ];

    return (
        <section id="interests" className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                            Interests & Hobbies
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                {/* Interests Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {interestsList.map((interest, index) => (
                        <div 
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    {interest.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                                        {interest.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {interest.description}
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

export default Interests;