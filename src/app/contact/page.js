'use client';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-8 px-4 flex flex-col items-center justify-center bg-gray-50 ">
      <h1 className="text-4xl font-bold mb-8 text-yellow-700">Contact Me</h1>

      <div className="space-y-6 mb-16 max-w-3xl">
        {/* Email Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Email</h2>
          <p className="text-gray-600">
            <a href="mailto:azizurusa22@gmail.com" className="text-yellow-500 hover:underline transition-all duration-300 ease-in-out hover:text-yellow-600">
              azizurusa22@gmail.com
            </a>
          </p>
        </div>

        {/* Phone Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Phone</h2>
          <p className="text-gray-600">
            <a href="tel:+13476696071" className="text-yellow-500 hover:underline transition-all duration-300 ease-in-out hover:text-yellow-600">
              +1 (347) 669-6071
            </a>
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 space-x-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Find Me On</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://www.linkedin.com/in/azizur-rahman-720636165/" className="text-yellow-500 hover:underline transition-all duration-300 ease-in-out hover:text-yellow-600">
            LinkedIn
          </a>
          <a href="https://github.com/ayanchyaziz123" className="text-yellow-500 hover:underline transition-all duration-300 ease-in-out hover:text-yellow-600">
            GitHub
          </a>
          <a href="https://twitter.com" className="text-yellow-500 hover:underline transition-all duration-300 ease-in-out hover:text-yellow-600">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
