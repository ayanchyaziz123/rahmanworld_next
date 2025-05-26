import React from "react";

const ValueProposition = () => {
  return (
    <section id="value-proposition" className="max-w-5xl mx-auto px-6 py-12">
      <div className="bg-white">
        <header className="mb-6">
          <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3">
            Personal Value Proposition
          </h2>
        </header>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-4">
            My portfolio showcases my journey as a software engineer and problem
            solver. The unique value I bring to the table lies in my ability to
            integrate technical expertise with creative solutions. Through my work, I
            demonstrate not only strong coding skills in Java, Python, React, and
            Next.js but also my ability to approach challenges from a holistic
            perspective.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I pride myself on my adaptability, whether that means building dynamic
            web applications using modern frameworks or leveraging machine learning
            to create intelligent solutions. This portfolio demonstrates my
            commitment to quality and my ability to create scalable, efficient systems
            that make a real impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;