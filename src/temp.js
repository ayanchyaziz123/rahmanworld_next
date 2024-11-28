


'use client'
import React, { useState } from 'react';
import { Users, Rocket, Code, Database, Cloud, Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">NextGen</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600 transition">Team</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              <a href="#" className="block text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#team" className="block text-gray-700 hover:text-blue-600 transition">Team</a>
              <a href="#testimonials" className="block text-gray-700 hover:text-blue-600 transition">Testimonials</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition">Contact</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HomePage = () => {
  // Sample data
  const teamMembers = [
    { name: 'John Smith', role: 'CEO', image: 'images/dp.jpeg' },
    { name: 'Sarah Johnson', role: 'CTO', image: '/api/placeholder/120/120' },
    { name: 'Michael Chen', role: 'Lead Developer', image: '/api/placeholder/120/120' },
    { name: 'Emma Williams', role: 'Project Manager', image: '/api/placeholder/120/120' }
  ];

  const testimonials = [
    {
      text: "Next Generation Innovation transformed our business with their cutting-edge solutions.",
      author: "David Miller",
      company: "Tech Solutions Inc."
    },
    {
      text: "Their team's expertise and dedication to innovation is unmatched in the industry.",
      author: "Lisa Chen",
      company: "Global Systems Ltd."
    },
    {
      text: "Working with them has been a game-changer for our digital transformation.",
      author: "Robert Jones",
      company: "Future Corp"
    }
  ];

  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: "Custom Software Development",
      description: "Tailored solutions to meet your unique business needs"
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure services"
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Cybersecurity",
      description: "Protect your business with advanced security solutions"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 pt-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Next Generation Innovation L.L.C</h1>
          <p className="text-xl mb-8">Transforming Ideas into Digital Reality</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            Get Started
          </button>
        </div>
      </section>

      

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-blue-600">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Next Generation Innovation</h3>
              <p className="text-gray-400">Transforming Ideas into Digital Reality</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Services</li>
                <li>Team</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Software Development</li>
                <li>Cloud Solutions</li>
                <li>Data Analytics</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@nextgeninnovation.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Innovation Street</li>
                <li>Tech City, TC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Next Generation Innovation L.L.C. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
