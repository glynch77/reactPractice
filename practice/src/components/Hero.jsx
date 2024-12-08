import React from 'react';
import heroImage from '../assets/images/heroImage2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import resumePDF from '../assets/Resume/Resume copy.pdf';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center text-center relative"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional dark overlay */}
      <h1 className="text-4xl md:text-6xl font-bold z-10">Hi, I'm GEORGE LYNCH</h1>
      <p className="text-xl mt-4 z-10">A passionate Software Developer</p>
      <button className="mt-6 bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 z-10">
        <a href="#projects">View My Work</a>
      </button>
      
      {/* Social Links */}
      <div className="flex space-x-6 mt-6 z-10">
      <a href="https://github.com/glynch77" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" className="hover:opacity-80" />
      </a>
      <a href="https://www.linkedin.com/in/george-lynch-781354148?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4utkY5NiTt6ZYlWNN1K%2Bew%3D%3D" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:opacity-80" />
      </a>
      <a href={resumePDF} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFileAlt} size="2x" className="hover:opacity-80" />
      </a>
    </div>
    </section>
  );
};

export default Hero;
