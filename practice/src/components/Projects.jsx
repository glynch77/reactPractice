import React from 'react';

const Projects = () => {
  const projectList = [
    { title: "Project 1", description: "Business Web Page Lawn Services", link: "https://xyzlawn.netlify.app/landingpage.html" },
    { title: "Project 2", description: "The second project is my Portfolio", link: "https://workwithgeorge.netlify.app/" },
    { title: "Project 3", description: "Fencing Web Page HSW Fence", link: "https://hswfencellc.com/" },
    { title: "Project 4", description: "Fitness Web Page Unstoppable you Fitness", link: "https://unstoppableyoufitness.netlify.app/" },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-400 hover:underline mt-2 inline-block"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
