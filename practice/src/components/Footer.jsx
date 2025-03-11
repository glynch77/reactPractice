import React from 'react';
import resumePDF from '../assets/Resume/Resume (2) copy.pdf';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} osu4life75@gmail.com. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Social Media Icons */}
          <a
            href="https://github.com/glynch77"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/george-lynch-781354148?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHvvkttfTRFyQ%2BMqmPGRZDw%3D%3D" // Path to your PDF file
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href={resumePDF} // Path to your PDF file
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
