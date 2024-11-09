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
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-700">Blogs</h1>

      {/* Category Filter */}
      <div className="mb-8">
        <label className="font-semibold mr-4">Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border p-2 rounded-md"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              <Link href={`/blogs/${blog.slug}`}>
                {blog.title}
              </Link>
            </h2>
            <p className="text-gray-600 text-sm mb-2">{blog.date}</p>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <Link
              href={`/blogs/${blog.slug}`}
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

