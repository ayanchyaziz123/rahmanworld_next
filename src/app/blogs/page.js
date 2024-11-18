'use client';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { blogs } from '../../data/blogs';

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
    <div className="container mx-auto py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-gray-900">
        Our Blog
        <span className="text-yellow-600">.</span>
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Filter */}
        <div className="flex items-center w-full sm:w-auto">
          <label className="font-medium text-gray-700 mr-4">Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-auto border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {filteredBlogs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No blogs found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-white shadow-md rounded-lg overflow-hidden transform hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="p-6">
                <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-yellow-600 bg-yellow-50 rounded-full">
                  {blog.category}
                </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-yellow-600 transition">
                  <Link href={`/blogs/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
                <p className="text-gray-700 leading-relaxed mb-4 line-clamp-3">{blog.description}</p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="inline-flex items-center font-semibold text-yellow-600 group-hover:text-yellow-700"
                >
                  Read More 
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsPage;