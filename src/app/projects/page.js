import { projects } from "@/data/projects"; // Import the project data
import Project from "@/components/Project"; // Ensure your Project component is properly imported

const ProjectsPage = () => {
  return (
    <div className="container mx-auto mt-4 p-4 sm:p-6 max-w-6xl">
      <h1 className="text-3xl font-extrabold text-center mb-10" style={{ color: '#996232' }}>My Projects</h1>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="transform transition-transform hover:scale-105">
            <Project project={project} />
          </div>
        ))}
      </div>

      {/* Additional Projects Section */}
      <section id="more-projects" className="fade-in mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-700 text-center">More Projects</h2>
        <ul className="list-none space-y-6 text-gray-800">
        <li className="flex items-start space-x-4 py-2">
  <div>
    <a
      href="https://github.com/ayanchyaziz123/Express-js-Makeup-store"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 font-medium hover:underline"
    >
      Express.js and React Makeup Store
    </a>
    <p className="text-gray-700 mt-1">
      A full-stack makeup store application using Express.js with an MVC (Model-View-Controller) architecture for the backend and React with Redux for state management on the frontend. This project integrates deep learning and machine learning concepts to provide personalized recommendations.
    </p>
  </div>
</li>
          <li className="flex items-start space-x-4">

            <div>
              <a
                href="https://github.com/ayanchyaziz123/mobile_store_project_300_django"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                mobile_store_project_300_django
              </a>
              <p className="text-gray-600">A mobile store project with some deep learning and machine learning concepts.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">

            <div>
              <a
                href="https://github.com/ayanchyaziz123/house-price-prediction-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                house-price-prediction-system
              </a>
              <p className="text-gray-600">An AI-powered system for predicting house prices.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">

            <div>
              <a
                href="https://github.com/ayanchyaziz123/OpenGl-Traffic-Signal-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                OpenGl-Traffic-Signal-Project

              </a>
              <p className="text-gray-600">C++, A traffic control system where vehicles will follow the traffic signal as like real life.In this project There are 3 vehicles. If click on the right button of mouse then the vehicles will be stoped on the other hand if click on right button afterwards the vehicles will go.And it shows on trafiic signal 3 lights</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">

            <div>
              <a
                href="https://github.com/ayanchyaziz123/OOP-project-gym-management-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                OOP-project-gym-management-system with java swing
              </a>
              <p className="text-gray-600">A gym management system developed with Java Swing.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">

            <div>
              <a
                href="https://github.com/ayanchyaziz123/laravel-Gym-management-Project-"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                laravel-Gym-management-Project
              </a>
              <p className="text-gray-600">A Gym management project with laravel and bootstrap 4</p>
            </div>
          </li>
          {/* Add more projects as needed */}
        </ul>
      </section>
    </div>
  );
};

export default ProjectsPage;
