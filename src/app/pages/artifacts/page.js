import { projects } from "@/data/projects"; // Import the project data
import Project from "@/app/components/Artifact"; // Ensure your Project component is properly imported

const ProjectsPage = () => {
  const additionalProjects = [
    {
      title: "mobile_store_project_300_django",
      url: "https://github.com/ayanchyaziz123/mobile_store_project_300_django",
      description: "A mobile store project with some deep learning and machine learning concepts."
    },
    {
      title: "house-price-prediction-system",
      url: "https://github.com/ayanchyaziz123/house-price-prediction-system",
      description: "An AI-powered system for predicting house prices."
    },
    {
      title: "OpenGl-Traffic-Signal-Project",
      url: "https://github.com/ayanchyaziz123/OpenGl-Traffic-Signal-Project",
      description: "C++, A traffic control system where vehicles will follow the traffic signal as like real life. In this project there are 3 vehicles. If click on the right button of mouse then the vehicles will be stopped on the other hand if click on right button afterwards the vehicles will go. And it shows on traffic signal 3 lights."
    },
    {
      title: "OOP-project-gym-management-system with java swing",
      url: "https://github.com/ayanchyaziz123/OOP-project-gym-management-system",
      description: "A gym management system developed with Java Swing."
    },
    {
      title: "laravel-Gym-management-Project",
      url: "https://github.com/ayanchyaziz123/laravel-Gym-management-Project-",
      description: "A Gym management project with laravel and bootstrap 4."
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Main Projects Section */}
        <section className="bg-white mb-12">
          <header className="mb-6">
            <h1 className="text-3xl font-light text-gray-900 border-b border-gray-200 pb-3">
              Featured Artifacts
            </h1>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index}>
                <Project project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Additional Projects Section */}
        <section className="bg-white">
          <header className="mb-6">
            <h2 className="text-2xl font-light text-gray-900 border-b border-gray-200 pb-3">
              Additional Projects
            </h2>
          </header>

          <div className="space-y-6">
            {additionalProjects.map((project, index) => (
              <article key={index} className="bg-white border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectsPage;