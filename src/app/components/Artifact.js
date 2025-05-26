import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const Project = ({ project }) => {
    return (
      <article className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-sm transition-shadow duration-200">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            {project.description.length > 100
              ? project.description.slice(0, 150) + '...'
              : project.description}
          </p>
          <Link
            href={project.link}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
          >
            View Project 
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </article>
    );
};
  
export default Project;