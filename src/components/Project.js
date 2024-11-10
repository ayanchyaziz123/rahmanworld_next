
import Link from 'next/link';
const Project = ({ project }) => {
    return (
      <div className="bg-white p-4 border-dotted border-2 border-gray-400 text-center rounded-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2" style={{ color: '#996232' }}>{project.title}</h3>
          <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
          <Link
              href={project.link}
              className="text-gray-700 underline hover:text-gray-900"
            >
              View Project
            </Link>
        </div>
      </div>
    );
  };
  
  export default Project;
  