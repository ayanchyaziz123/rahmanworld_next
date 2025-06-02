'use client';
import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Eye, Upload, ExternalLink } from 'lucide-react';

const ArtifactAdminPage = () => {
  // Mock data - replace with your actual projects data source
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-commerce Platform",
      slug: "ecommerce-platform",
      description: "A full-stack e-commerce platform built with React and Node.js",
      image: "/images/project1.jpg",
      image2: "/images/project1-2.jpg",
      image3: "/images/project1-3.jpg",
      link: "https://github.com/ayanchyaziz123/ecommerce",
      github: "https://github.com/ayanchyaziz123/ecommerce",
      date: "2024-01-15",
      content: "<p>This e-commerce platform features a complete shopping experience...</p>",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web Development",
      status: "completed"
    },
    {
      id: 2,
      title: "AI Chat Bot",
      slug: "ai-chat-bot",
      description: "An intelligent chatbot using natural language processing",
      image: "/images/project2.jpg",
      image2: "",
      image3: "",
      link: "https://github.com/ayanchyaziz123/ai-chatbot",
      github: "https://github.com/ayanchyaziz123/ai-chatbot",
      date: "2024-02-01",
      content: "<p>This AI chatbot leverages machine learning...</p>",
      technologies: ["Python", "TensorFlow", "Flask", "NLP"],
      category: "AI/ML",
      status: "in-progress"
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    image: '',
    image2: '',
    image3: '',
    link: '',
    github: '',
    date: '',
    content: '',
    technologies: [],
    category: '',
    status: 'in-progress'
  });

  const categories = ["Web Development", "AI/ML", "Mobile App", "Desktop App", "Data Science", "Other"];
  const statusOptions = ["in-progress", "completed", "archived"];
  const availableTechnologies = [
    "React", "Next.js", "Vue.js", "Angular", "Node.js", "Express", "Django", "Flask",
    "Python", "JavaScript", "TypeScript", "Java", "C++", "MongoDB", "PostgreSQL", 
    "MySQL", "AWS", "Firebase", "Docker", "TensorFlow", "PyTorch", "Pandas", "NumPy"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value.toLowerCase()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      setFormData(prev => ({
        ...prev,
        slug: slug
      }));
    }
  };

  const handleTechnologyChange = (tech) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.includes(tech)
        ? prev.technologies.filter(t => t !== tech)
        : [...prev.technologies, tech]
    }));
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      slug: project.slug,
      description: project.description,
      image: project.image,
      image2: project.image2 || '',
      image3: project.image3 || '',
      link: project.link,
      github: project.github,
      date: project.date,
      content: project.content,
      technologies: project.technologies || [],
      category: project.category,
      status: project.status
    });
    setIsEditing(true);
  };

  const handleAdd = () => {
    setEditingProject(null);
    setFormData({
      title: '',
      slug: '',
      description: '',
      image: '',
      image2: '',
      image3: '',
      link: '',
      github: '',
      date: new Date().toISOString().split('T')[0],
      content: '',
      technologies: [],
      category: '',
      status: 'in-progress'
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingProject) {
      // Update existing project
      setProjects(prev => prev.map(project => 
        project.id === editingProject.id 
          ? { ...project, ...formData }
          : project
      ));
    } else {
      // Add new project
      const newProject = {
        id: Date.now(),
        ...formData
      };
      setProjects(prev => [...prev, newProject]);
    }
    setIsEditing(false);
    setEditingProject(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(project => project.id !== id));
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="bg-white mb-8">
          <header className="mb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-light text-gray-900 border-b border-gray-200 pb-3">
                Artifact Management
              </h1>
              {!isEditing && (
                <button
                  onClick={handleAdd}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <Plus className="w-4 h-4" />
                  Add New Project
                </button>
              )}
            </div>
          </header>
        </div>

        {/* Project Form */}
        {isEditing && (
          <div className="bg-white border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-gray-900">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <Save className="w-4 h-4" />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  <X className="w-4 h-4" />
                  Cancel
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Basic Info */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    placeholder="Enter project title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    placeholder="project-url-slug"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    placeholder="Brief project description"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    >
                      <option value="">Select Category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    >
                      {statusOptions.map(status => (
                        <option key={status} value={status}>
                          {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Link
                    </label>
                    <input
                      type="url"
                      name="link"
                      value={formData.link}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                      placeholder="https://project-demo.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      GitHub Link
                    </label>
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                      placeholder="https://github.com/username/repo"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Images & Technologies */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Main Image URL
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    placeholder="/images/project-main.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Image 2 (Optional)
                  </label>
                  <input
                    type="url"
                    name="image2"
                    value={formData.image2}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    placeholder="/images/project-2.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Image 3 (Optional)
                  </label>
                  <input
                    type="url"
                    name="image3"
                    value={formData.image3}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    placeholder="/images/project-3.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Technologies Used
                  </label>
                  <div className="border border-gray-300 p-3 max-h-40 overflow-y-auto">
                    <div className="grid grid-cols-2 gap-2">
                      {availableTechnologies.map(tech => (
                        <label key={tech} className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={formData.technologies.includes(tech)}
                            onChange={() => handleTechnologyChange(tech)}
                            className="w-4 h-4 text-blue-600"
                          />
                          {tech}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-gray-500">
                      Selected: {formData.technologies.join(', ') || 'None'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Width Content */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Content (HTML)
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={8}
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                placeholder="Detailed project description, features, technical details, etc. (HTML supported)"
              />
            </div>
          </div>
        )}

        {/* Project List */}
        {!isEditing && (
          <div className="bg-white border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-medium text-gray-900">
                All Projects ({projects.length})
              </h2>
            </div>

            <div className="divide-y divide-gray-100">
              {projects.map((project) => (
                <article key={project.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      {/* Project Image */}
                      <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">
                            <Upload className="w-6 h-6" />
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-medium text-gray-900">
                            {project.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs ${
                            project.status === 'completed' 
                              ? 'bg-green-100 text-green-700' 
                              : project.status === 'in-progress'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {project.status.replace('-', ' ')}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs">
                            {project.category}
                          </span>
                          <span>{project.date}</span>
                          <span>/{project.slug}</span>
                        </div>
                        
                        <p className="text-gray-700 text-sm mb-2 line-clamp-2">
                          {project.description}
                        </p>

                        {project.technologies && project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 4).map(tech => (
                              <span key={tech} className="text-xs bg-gray-100 text-gray-600 px-2 py-1">
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="text-xs text-gray-500">
                                +{project.technologies.length - 4} more
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      {project.link && (
                        <button
                          onClick={() => window.open(project.link, '_blank')}
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                          title="View Project"
                        >
                          <ExternalLink  className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => window.open(`/projects/${project.slug}`, '_blank')}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        title="Preview"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(project)}
                        className="p-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="p-2 text-red-600 hover:text-red-800 transition-colors duration-200"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {projects.length === 0 && (
                <div className="p-12 text-center text-gray-500">
                  <p>No projects found. Click "Add New Project" to create your first artifact.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtifactAdminPage;