'use client';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { blogs } from '../../../data/blogs';

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Memoize categories to prevent unnecessary recalculation
  const categories = useMemo(() => 
    ["All", ...new Set(blogs.map((blog) => blog.category))], 
    []
  );

  // Memoize filtered blogs for better performance
  const filteredBlogs = useMemo(() => {
    const categoryFiltered = selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);
    
    return searchQuery
      ? categoryFiltered.filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : categoryFiltered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="bg-white mb-8">
          <header className="mb-6">
            <h1 className="text-3xl font-light text-gray-900 border-b border-gray-200 pb-3">
              Blog Posts
            </h1>
          </header>
        </div>

        {/* Filters */}
        <div className="bg-white border border-gray-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-blue-600 transition-colors duration-200"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-sm">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 pr-10 text-sm focus:outline-none focus:border-blue-600 transition-colors duration-200"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Blog Content */}
        {filteredBlogs.length === 0 ? (
          <div className="bg-white border border-gray-200 p-12 text-center">
            <p className="text-gray-600">No blog posts found matching your criteria.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredBlogs.map((blog, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 p-6 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h2 className="text-xl font-medium text-gray-900 mb-2">
                      <Link 
                        href={`/blogs/${blog.slug}`}
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        {blog.title}
                      </Link>
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs">
                      {blog.category}
                    </span>
                    <span>{blog.date}</span>
                  </div>
                </div>
                
                <div className="prose max-w-none mb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {blog.description}
                  </p>
                </div>
                
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                >
                  Read More
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsPage;