// pages/projects.js (or wherever your ProjectsPage component is located)

import { projects } from "@/data/projects"; // Import the project data
import Project from "@/components/Project"; // Ensure your Project component is properly imported

const ProjectsPage = () => {
  return (
    <div className="container mx-auto mt-2 p-4 sm:p-6  max-w-6xl">
      <h1 className="text-3xl font-semibold text-center mb-8" style={{ color: '#996232' }}>My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>

      {/* Additional Projects Section */}
      <section id="more-projects" className="fade-in mt-10 px-4">
        <h2 className="text-2xl font-bold mb-4 text-yellow-700" >More Projects</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <a
              href="https://github.com/ayanchyaziz123/mobile_store_project_300_django"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              mobile_store_project_300_django
            </a>
            – A mobile store project where users can purchase mobile phones. Includes some deep learning and machine learning concepts.
          </li>
          <li>
            <a
              href="https://github.com/ayanchyaziz123/house-price-prediction-system"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              house-price-prediction-system
            </a>
            – An AI-powered house price prediction system that allows users to predict house prices.
          </li>
          <li>
            <a
              href="https://github.com/ayanchyaziz123/OOP-project-gym-management-system"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              OOP-project-gym-management-system
            </a>
            – A gym management system developed in Java Swing.
          </li>
          {/* Add more projects as needed */}
        </ul>
      </section>
    </div>
  );
};

export default ProjectsPage;
