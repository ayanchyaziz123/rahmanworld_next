
import Link from 'next/link';
const Project = ({ project }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
          <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
          <Link
              href={project.link}
              className="text-blue-500 hover:text-blue-700 underline"
            >
              View Project
            </Link>
        </div>
      </div>
    );
  };
  
  export default Project;
  