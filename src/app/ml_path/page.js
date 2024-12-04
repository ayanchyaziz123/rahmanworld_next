'use client'
import React, { useState } from 'react';
import { 
  Database, 
  Cpu, 
  TrendingUp, 
  Network, 
  Layers, 
  Globe, 
  Code,
  Book,
  ArrowRight,
  Target
} from 'lucide-react';

const MachineLearningPathway = () => {
  const [activeSection, setActiveSection] = useState(null);

  const mlTopics = [
    {
      icon: Database,
      title: "Data Fundamentals & Preparation",
      subtopics: [
        "Data Collection Strategies",
        "Data Cleaning Techniques",
        "Feature Engineering",
        "Dimensionality Reduction",
        "Data Normalization & Scaling",
        "Handling Missing Values",
        "Outlier Detection and Treatment"
      ],
      description: "Master the art of transforming raw data into high-quality, model-ready insights. Learn sophisticated techniques for data preparation and preprocessing.",
      deepDive: [
        "Statistical methods for data analysis",
        "Advanced pandas and NumPy techniques",
        "Data visualization with Matplotlib and Seaborn",
        "Understanding data distributions and statistical significance"
      ]
    },
    {
      icon: Cpu,
      title: "Machine Learning Foundations",
      subtopics: [
        "Types of Machine Learning Paradigms",
        "Supervised vs Unsupervised Learning",
        "Reinforcement Learning Basics",
        "Model Training Methodologies",
        "Cross-Validation Techniques",
        "Bias-Variance Tradeoff",
        "Model Evaluation Metrics"
      ],
      description: "Develop a robust understanding of machine learning concepts, algorithms, and fundamental principles that drive intelligent systems.",
      deepDive: [
        "Mathematical foundations of ML algorithms",
        "Probabilistic machine learning",
        "Advanced model selection techniques",
        "Performance optimization strategies"
      ]
    },
    {
      icon: TrendingUp,
      title: "Regression & Predictive Modeling",
      subtopics: [
        "Linear Regression",
        "Multiple Linear Regression",
        "Polynomial Regression",
        "Logistic Regression",
        "Ridge & Lasso Regression",
        "Elastic Net Regression",
        "Time Series Regression",
        "Bayesian Regression"
      ],
      description: "Dive deep into predictive modeling techniques, understanding how to build and interpret regression models for various scenarios.",
      deepDive: [
        "Advanced feature selection techniques",
        "Handling multicollinearity",
        "Regularization in depth",
        "Interpreting regression coefficients"
      ]
    },
    {
      icon: Network,
      title: "Classification & Clustering Techniques",
      subtopics: [
        "Naive Bayes Classification",
        "Decision Trees",
        "Random Forest",
        "Support Vector Machines",
        "K-Nearest Neighbors",
        "K-Means Clustering",
        "Hierarchical Clustering",
        "DBSCAN Clustering"
      ],
      description: "Master advanced classification and clustering algorithms, learning to categorize and group data with high precision.",
      deepDive: [
        "Ensemble learning techniques",
        "Advanced clustering algorithms",
        "Handling imbalanced datasets",
        "Performance optimization strategies"
      ]
    },
    {
      icon: Layers,
      title: "Advanced Machine Learning Techniques",
      subtopics: [
        "Ensemble Methods",
        "Gradient Boosting",
        "XGBoost",
        "LightGBM",
        "CatBoost",
        "Advanced Optimization Techniques",
        "Hyperparameter Tuning",
        "Model Interpretability"
      ],
      description: "Explore sophisticated machine learning techniques that push the boundaries of predictive performance and model complexity.",
      deepDive: [
        "Advanced ensemble learning",
        "Model stacking and blending",
        "Advanced feature engineering",
        "Complex model architectures"
      ]
    },
    {
      icon: Globe,
      title: "Deep Learning & Neural Networks",
      subtopics: [
        "Neural Network Fundamentals",
        "Convolutional Neural Networks",
        "Recurrent Neural Networks",
        "Transformer Architectures",
        "Transfer Learning",
        "Natural Language Processing",
        "Computer Vision Techniques",
        "Generative Adversarial Networks"
      ],
      description: "Unlock the power of deep learning, exploring advanced neural network architectures and their applications in AI.",
      deepDive: [
        "Advanced neural network architectures",
        "Deep learning framework mastery",
        "GPU-accelerated machine learning",
        "Advanced NLP and computer vision techniques"
      ]
    }
  ];

  const recommendedTools = [
    {
      category: "Programming Languages",
      tools: ["Python", "R", "Julia"]
    },
    {
      category: "ML Frameworks",
      tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"]
    },
    {
      category: "Data Manipulation",
      tools: ["Pandas", "NumPy", "Dask"]
    },
    {
      category: "Visualization",
      tools: ["Matplotlib", "Seaborn", "Plotly"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Target className="w-8 h-8 text-yellow-600" />
            <span className="text-gray-600 text-lg">Comprehensive Learning Path</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
              Machine Learning Mastery Roadmap
            </span>
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
            A meticulously crafted journey from foundational concepts to advanced machine learning techniques. 
            Transform your understanding and build cutting-edge AI solutions.
          </p>
        </div>

        {/* Learning Pathway */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {mlTopics.map((topic, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-lg transition-all duration-300 
                ${activeSection === index 
                  ? 'border-2 border-yellow-600 transform -translate-y-2' 
                  : 'hover:shadow-xl'}`}
              onClick={() => setActiveSection(activeSection === index ? null : index)}
            >
              <div className="flex items-center mb-4">
                <topic.icon className="w-10 h-10 text-yellow-600 mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">{topic.description}</p>
              {activeSection === index && (
                <>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-yellow-600 mb-2">Key Topics</h4>
                    <ul className="space-y-2">
                      {topic.subtopics.map((subtopic, subIndex) => (
                        <li 
                          key={subIndex} 
                          className="text-sm text-gray-700 before:content-['✓'] before:text-yellow-600 before:mr-2"
                        >
                          {subtopic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-600 mb-2">Deep Dive</h4>
                    <ul className="space-y-2">
                      {topic.deepDive.map((dive, diveIndex) => (
                        <li 
                          key={diveIndex} 
                          className="text-sm text-gray-700 before:content-['→'] before:text-yellow-600 before:mr-2"
                        >
                          {dive}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Recommended Tools */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
              Essential Tools & Frameworks
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedTools.map((toolGroup, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-yellow-600">
                  {toolGroup.category}
                </h3>
                <ul className="space-y-2">
                  {toolGroup.tools.map((tool, toolIndex) => (
                    <li 
                      key={toolIndex} 
                      className="text-gray-700 flex items-center"
                    >
                      <Code className="w-4 h-4 text-yellow-600 mr-2" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            <span className="bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
              Recommended Learning Resources
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Book className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Books</h3>
              <ul className="space-y-2">
                <li>Hands-On Machine Learning (Géron)</li>
                <li>Pattern Recognition (Bishop)</li>
                <li>Deep Learning (Goodfellow)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Globe className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Online Courses</h3>
              <ul className="space-y-2">
                <li>Coursera ML Specialization</li>
                <li>Fast.ai Deep Learning</li>
                <li>Stanford CS229</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Network className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Practice Platforms</h3>
              <ul className="space-y-2">
                <li>Kaggle Competitions</li>
                <li>GitHub Projects</li>
                <li>Google Colab</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="flex items-center mx-auto bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors duration-300">
            Begin Your ML Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MachineLearningPathway;