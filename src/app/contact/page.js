import React from 'react';
import { 
  LinkedinIcon, 
  GithubIcon, 
  TwitterIcon 
} from 'lucide-react';

const ContactPage = () => {
  const socialLinks = [
    { 
      icon: LinkedinIcon, 
      href: 'https://www.linkedin.com/in/yourusername', 
      label: 'LinkedIn',
      color: 'text-blue-600 hover:text-blue-700'
    },
    { 
      icon: GithubIcon, 
      href: 'https://github.com/yourusername', 
      label: 'GitHub',
      color: 'text-gray-800 hover:text-gray-900'
    },
    { 
      icon: TwitterIcon, 
      href: 'https://twitter.com/yourusername', 
      label: 'Twitter',
      color: 'text-sky-500 hover:text-sky-600'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-white to-gray-50">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md border-l-4 border-emerald-500 p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-emerald-600 to-indigo-800 bg-clip-text text-transparent">
            Contact Me
          </span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-indigo-600 mx-auto rounded-full mb-8"></div>
        
        {/* Email Section */}
        <div className="mb-6 bg-emerald-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-emerald-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </h2>
          <p className="text-gray-700 pl-9">azizurusa22@gmail.com</p>
        </div>
        
        {/* Phone Section */}
        <div className="mb-6 bg-indigo-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2 text-indigo-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-8.284 0-15-6.716-15-15V5z" />
            </svg>
            Phone
          </h2>
          <p className="text-gray-700 pl-9">+1 (347) 669-6071</p>
        </div>
        
        {/* Social Media Links */}
        <div className="bg-rose-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-rose-800 text-center">
            Find Me On
          </h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${color} transition-colors duration-300 hover:scale-110 transform`}
                aria-label={label}
              >
                <Icon className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;