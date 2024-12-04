'use client';
import React, { useState } from 'react';
import { 
  FileText, 
  Book, 
  Globe, 
  Download, 
  Award, 
  ArrowRight 
} from 'lucide-react';

const ResearchPublications = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const researchPapers = [
    {
      title: "Planet Classification Using Machine Learning: A Data-Driven Approach",
      authors: ["Rahman Azizur", "Dr Santanu Das"],
      year: 2023,
      conference: "International Conference on Medical AI",
      category: "Machine Learning",
      abstract: "A comprehensive study exploring cutting-edge machine learning techniques for predictive healthcare diagnostics, focusing on early disease detection and personalized treatment recommendations.",
      pdfLink: "/papers/healthcare-ml-2023.pdf",
      citations: 24
    },
    // {
    //   title: "Optimization of Deep Neural Networks for Real-time Image Recognition",
    //   authors: ["Rahman Azizur Ayan", "Research Collaborators"],
    //   year: 2022,
    //   conference: "IEEE Computer Vision Symposium",
    //   category: "Computer Vision",
    //   abstract: "Investigates novel architectural approaches to improve computational efficiency and accuracy in deep learning image recognition models across multiple domains.",
    //   pdfLink: "/papers/neural-optimization-2022.pdf",
    //   citations: 37
    // },
    // {
    //   title: "Ethical Considerations in Artificial Intelligence Development",
    //   authors: ["Rahman Azizur Ayan"],
    //   year: 2023,
    //   conference: "Global AI Ethics Conference",
    //   category: "AI Ethics",
    //   abstract: "A critical analysis of ethical frameworks and guidelines necessary for responsible AI development, addressing potential societal impacts and mitigation strategies.",
    //   pdfLink: "/papers/ai-ethics-2023.pdf",
    //   citations: 18
    // }
  ];

  const publicationCategories = [
    'All', 
    'Machine Learning', 
    'Computer Vision', 
    'AI Ethics', 
    'Software Engineering'
  ];

  const filteredPapers = activeCategory === 'All' 
    ? researchPapers 
    : researchPapers.filter(paper => paper.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <FileText className="w-8 h-8 text-yellow-600" />
            <span className="text-gray-600 text-lg">Academic Contributions</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
              Research & Publications
            </span>
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
            Exploring innovative research at the intersection of technology, machine learning, and ethical AI development. 
            Dedicated to pushing the boundaries of technological innovation.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-8 space-x-4 flex-wrap">
          {publicationCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-yellow-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-yellow-50'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Research Papers */}
        <div className="space-y-6">
          {filteredPapers.map((paper, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {paper.title}
                  </h2>
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="w-4 h-4 text-yellow-600" />
                    <span className="text-gray-600">{paper.conference}</span>
                    <span className="text-gray-500">({paper.year})</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Book className="w-4 h-4 text-yellow-600" />
                    <span className="text-gray-700">
                      {paper.authors.join(', ')}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-600">{paper.citations} Citations</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{paper.abstract}</p>
              
              <div className="flex justify-between items-center">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                  {paper.category}
                </span>
                <a 
                  href={paper.pdfLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-yellow-600 hover:text-yellow-800 transition-colors"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download Paper
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a 
            href="/contact" 
            className="flex items-center mx-auto bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors duration-300 max-w-md"
          >
            Collaborate on Research
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResearchPublications;