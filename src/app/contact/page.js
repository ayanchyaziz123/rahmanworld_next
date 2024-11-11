'use client';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-yellow-700">Contact Me</h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Email</h2>
          <p className="text-gray-600">
            <a href="mailto:azizurusa22@gmail.com" className="text-blue-600 hover:underline">
              azizurusa22@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700">Phone</h2>
          <p className="text-gray-600">
            <a href="tel:+13476696071" className="text-blue-600 hover:underline">
              +1 (347) 669-6071
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
