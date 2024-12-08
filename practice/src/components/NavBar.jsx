import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">About <span className='text-indigo-700'>Me</span></h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#hero" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
