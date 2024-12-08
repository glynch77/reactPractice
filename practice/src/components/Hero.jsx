import React from 'react';
import heroImage from '../assets/images/heroImage2.jpg';
;  // Ensure this path is correct

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center text-center relative"
      style={{
        backgroundImage: `url(${heroImage})`,  // Correctly set the background image
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional dark overlay */}
      <h1 className="text-4xl md:text-6xl font-bold z-10">Hi, I'm GEORGE LYNCH</h1>
      <p className="text-xl mt-4 z-10">A passionate Software Developer</p>
      <button className="mt-6 bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 z-10">
        <a href="#projects">View My Work</a>
      </button>
    </section>
  );
};

export default Hero;
