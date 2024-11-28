import React from "react";

const TargetAudience = () => {
  return (
    <section id="target-audience" className="container mx-auto mt-2 p-4 sm:p-6 max-w-6xl">
     
           {/* Header */}
           <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
                        Target Audience
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                </div>

      <h3 className="text-2xl font-semibold mb-2">1. Prospective Employers and Clients</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Organizations, including companies and startups, seeking a versatile software engineer, full-stack developer, or data scientist, will find this portfolio valuable. It demonstrates my technical expertise across both frontend and backend development and highlights my skills in machine learning and artificial intelligence, providing insight into my ability to contribute effectively to complex, data-driven projects.
      </p>

      <h3 className="text-2xl font-semibold mb-2">2. Collaborative Partners</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        This portfolio appeals to fellow developers, designers, and data scientists who are looking for a skilled and cooperative partner. My work reflects a commitment to team-driven projects and showcases a proficiency in tackling diverse technical challenges while integrating seamlessly with other professionals to achieve shared goals.
      </p>

      <h3 className="text-2xl font-semibold mb-2">3. Academic and Research Institutions</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Academic institutions and research organizations will find my portfolio relevant as it underscores a strong alignment between theory and practical application. It highlights my involvement in AI-driven projects and data science applications, making me a valuable candidate for research roles that push the boundaries of innovation in technology and applied sciences.
      </p>

      <h3 className="text-2xl font-semibold mb-2">4. Tech Enthusiasts and Learners</h3>
      <p className="text-gray-700 leading-relaxed">
        This portfolio is designed to be an informative resource for students and emerging professionals in the tech industry. It provides insights into best practices in software development, coding methodologies, and applications of machine learning, offering a practical guide to real-world technology solutions.
      </p>
    </section>
  );
};

export default TargetAudience;
