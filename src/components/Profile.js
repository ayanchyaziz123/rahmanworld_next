// src/components/Profile.js
import React from 'react';

const Profile = () => {
  return (
    <div className="py-8" style={{ backgroundColor: '#f8f6f3' }}>
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center md:space-x-8">

        {/* Cover Photo on the Left Side */}
        <div
          className="w-full md:w-1/2 h-48 md:h-[400px] bg-cover bg-center rounded-sm relative"
          style={{ backgroundImage: "url('/images/cover.jpeg')" }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-sm"></div>
        </div>

        {/* Text and Links on the Right Side */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0 text-gray-900 text-center md:text-left space-y-4 p-6">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: '#996232' }}>
            Hi, I&apos;m Rahman – a software engineer specializing in web development and AI
          </h1>
          <a
            href="https://leetcode.com/u/Eclipsewolf28/"
            className="text-lg font-bold text-yellow-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leetcoder
          </a>

          {/* Social Links */}
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.linkedin.com/in/azizur-rahman-720636165/"
              className="text-gray-700 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/ayanchyaziz123"
              className="text-gray-700 hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="mailto:azizurusa22@gmail.com"
              className="text-gray-700 hover:text-red-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-envelope fa-2x"></i>
            </a>
          </div>
          <a
            href="projects.html"
            className="mt-6 inline-block bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-700 transition duration-300 ease-in-out"
          >
            See My Works
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
