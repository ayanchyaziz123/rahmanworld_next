'use client';
import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X, Eye } from 'lucide-react';

const BlogAdminPage = () => {
  // Mock data - replace with your actual blog data source
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Introduction to Machine Learning",
      slug: "intro-to-ml",
      category: "AI/ML",
      date: "2024-01-15",
      description: "A comprehensive introduction to machine learning concepts and applications.",
      content: "<p>This is the full content of the blog post...</p>",
      status: "published"
    },
    {
      id: 2,
      title: "React Best Practices",
      slug: "react-best-practices",
      category: "Web Development",
      date: "2024-02-01",
      description: "Essential best practices for React development.",
      content: "<p>Here are some React best practices...</p>",
      status: "draft"
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    date: '',
    description: '',
    content: '',
    status: 'draft'
  });

  const categories = ["AI/ML", "Web Development", "Software Engineering", "Data Science", "Tech News"];

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

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      category: blog.category,
      date: blog.date,
      description: blog.description,
      content: blog.content,
      status: blog.status
    });
    setIsEditing(true);
  };

  const handleAdd = () => {
    setEditingBlog(null);
    setFormData({
      title: '',
      slug: '',
      category: '',
      date: new Date().toISOString().split('T')[0],
      description: '',
      content: '',
      status: 'draft'
    });
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editingBlog) {
      // Update existing blog
      setBlogs(prev => prev.map(blog => 
        blog.id === editingBlog.id 
          ? { ...blog, ...formData }
          : blog
      ));
    } else {
      // Add new blog
      const newBlog = {
        id: Date.now(),
        ...formData
      };
      setBlogs(prev => [...prev, newBlog]);
    }
    setIsEditing(false);
    setEditingBlog(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      setBlogs(prev => prev.filter(blog => blog.id !== id));
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingBlog(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="bg-white mb-8">
          <header className="mb-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-light text-gray-900 border-b border-gray-200 pb-3">
                Blog Management
              </h1>
              {!isEditing && (
                <button
                  onClick={handleAdd}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  <Plus className="w-4 h-4" />
                  Add New Blog
                </button>
              )}
            </div>
          </header>
        </div>

        {/* Blog Form */}
        {isEditing && (
          <div className="bg-white border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium text-gray-900">
                {editingBlog ? 'Edit Blog Post' : 'Add New Blog Post'}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    placeholder="Enter blog title"
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
                    placeholder="blog-url-slug"
                  />
                </div>

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
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    placeholder="Brief description of the blog post"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={10}
                    className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    placeholder="Write your blog content here (HTML supported)"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog List */}
        {!isEditing && (
          <div className="bg-white border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-medium text-gray-900">
                All Blog Posts ({blogs.length})
              </h2>
            </div>

            <div className="divide-y divide-gray-100">
              {blogs.map((blog) => (
                <article key={blog.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-medium text-gray-900">
                          {blog.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs ${
                          blog.status === 'published' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {blog.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs">
                          {blog.category}
                        </span>
                        <span>{blog.date}</span>
                        <span>/{blog.slug}</span>
                      </div>
                      
                      <p className="text-gray-700 text-sm line-clamp-2">
                        {blog.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => window.open(`/blogs/${blog.slug}`, '_blank')}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        title="Preview"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(blog)}
                        className="p-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="p-2 text-red-600 hover:text-red-800 transition-colors duration-200"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {blogs.length === 0 && (
                <div className="p-12 text-center text-gray-500">
                  <p>No blog posts found. Click "Add New Blog" to create your first post.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdminPage;