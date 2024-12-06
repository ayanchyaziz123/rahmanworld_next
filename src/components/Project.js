import Link from 'next/link';

const Project = ({ project }) => {
    return (
      <div className="bg-white p-4 border-dotted border-2 border-gray-400 text-center rounded-md transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
          <p className="mt-2 text-gray-600 text-sm mb-4">{project.description}</p>
          <Link
            href={project.link}
            className="inline-flex items-center font-semibold hover:text-opacity-80 transition-all duration-300"
            style={{ color: '#996232' }}
          >
            View Project 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2 inline" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    );
};
  
export default Project;