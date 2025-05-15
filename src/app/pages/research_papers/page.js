'use client';
import React, { useState } from 'react';
import { 
  FileText, 
  Book, 
  Globe, 
  Download, 
  Award, 
  ArrowRight,
  Eye 
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
    // Previous commented-out papers remain the same
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
            <FileText className="w-8 h-8 text-blue-600" />
            <span className="text-gray-600 text-lg">Academic Contributions</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
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
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50'
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
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-600">{paper.conference}</span>
                    <span className="text-gray-500">({paper.year})</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Book className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">
                      {paper.authors.join(', ')}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">{paper.citations} Citations</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{paper.abstract}</p>
              
              <div className="flex justify-between items-center">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {paper.category}
                </span>
                <div className="flex items-center space-x-4">
                  <a 
                    href={paper.pdfLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Download
                  </a>
                  <a 
                    href={paper.pdfLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 hover:text-green-800 transition-colors"
                  >
                    <Eye className="mr-2 w-4 h-4" />
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a 
            href="/contact" 
            className="flex items-center mx-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 max-w-md"
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