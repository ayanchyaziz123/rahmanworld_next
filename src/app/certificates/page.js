'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, Download } from 'lucide-react';

// Sample certificate data - replace with your actual certificates
const certificatesData = [
  {
    title: "Build Your First React Website",
    issuer: "Coursera",
    date: "June 2023",
    pdfUrl: "/certificates/Build Your First React Website.pdf"
  },
  {
    title: "AI For Everyone",
    issuer: "Coursera",
    date: "September 2022",
    pdfUrl: "/certificates/AI For Everyone.pdf"
  },
  {
    title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    issuer: "Coursera",
    date: "March 2023",
    pdfUrl: "/certificates/Front-End Web UI Frameworks and Tools: Bootstrap 4.pdf"
  },
  {
    title: "Build Your Portfolio Website with HTML and CSS",
    issuer: "CompTIA",
    date: "November 2022",
    pdfUrl: "/certificates/Build Your Portfolio Website with HTML and CSS.pdf"
  }
];

const CertificatesPage = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(certificatesData[0]); // Default to first certificate

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-6xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-yellow-600">
        My Professional Certifications
      </h1>
      
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-8">
        {/* Certificates List */}
        <div className="space-y-4 sm:space-y-6">
          {certificatesData.map((cert, index) => (
            <div 
              key={index} 
              onClick={() => handleCertificateClick(cert)}
              className={`
                p-4 sm:p-6 rounded-xl border cursor-pointer transition-all duration-300
                ${selectedCertificate === cert 
                  ? 'bg-yellow-50 border-yellow-600 shadow-lg' 
                  : 'bg-white border-gray-200 hover:bg-gray-50'}
              `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{cert.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{cert.issuer} • {cert.date}</p>
                </div>
                <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Preview */}
        <div className="bg-white rounded-xl border p-6 sm:p-8 flex flex-col items-center justify-center mt-6 md:mt-0">
          {selectedCertificate ? (
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-yellow-600">
                {selectedCertificate.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Issued by {selectedCertificate.issuer} on {selectedCertificate.date}
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
                <Link 
                  href={selectedCertificate.pdfUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  <FileText className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> View Certificate
                </Link>
                <Link 
                  href={selectedCertificate.pdfUrl} 
                  download
                  className="flex items-center justify-center border border-yellow-600 text-yellow-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-yellow-50 transition-colors"
                >
                  <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Download PDF
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              <FileText className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-gray-300" />
              <p className="text-sm sm:text-base">Select a certificate to preview</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;