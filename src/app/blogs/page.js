'use client';
import Link from 'next/link';
import { useState } from 'react';
import { blogs } from '../../data/blogs';

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="container mx-auto py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 sm:mb-8 text-gray-900">Blogs</h1>

      {/* Category Filter */}
      <div className="flex items-center justify-center mb-6 sm:mb-8">
        <label className="font-medium text-gray-700 mr-4">Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded-full py-2 px-3 sm:px-4 focus:outline-none focus:border-yellow-500 transition"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredBlogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <div className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-gray-900">
                <Link href={`/blogs/${blog.slug}`} className="hover:underline hover:text-yellow-600">
                  {blog.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 mb-2 sm:mb-4">{blog.date}</p>
              <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4">{blog.description}</p>
              <Link
                href={`/blogs/${blog.slug}`}
                className="inline-block font-semibold text-yellow-600 hover:text-yellow-700"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
