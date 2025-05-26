import React from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/azizur-rahman-720636165/',
      label: 'LinkedIn',
      color: 'text-blue-600 hover:text-blue-800'
    },
    {
      icon: Github,
      href: 'https://github.com/ayanchyaziz123',
      label: 'GitHub',
      color: 'text-gray-700 hover:text-gray-900'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="bg-white mb-8">
            <header className="mb-6">
              <h1 className="text-3xl font-light text-gray-900 border-b border-gray-200 pb-3">
                Contact Information
              </h1>
            </header>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            {/* Email Section */}
            <article className="bg-white border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-medium text-gray-900 mb-2">
                    Email Address
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      <a 
                        href="mailto:azizurusa22@gmail.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      >
                        azizurusa22@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Phone Section */}
            <article className="bg-white border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-50 rounded">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-medium text-gray-900 mb-2">
                    Phone Number
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed">
                      <a 
                        href="tel:+13476696071"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      >
                        +1 (347) 669-6071
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Social Media Links */}
            <article className="bg-white border border-gray-200 p-6">
              <h2 className="text-xl font-medium text-gray-900 mb-4">
                Professional Networks
              </h2>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors duration-200 ${color}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </article>

            {/* Contact Note */}
            <div className="bg-slate-50 border border-gray-200 p-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-center">
                  Feel free to reach out for collaboration opportunities, research discussions, 
                  or any questions about my work in AI and software engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;