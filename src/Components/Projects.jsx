import React from "react";
import zkNMRS from "../assets/portfolio/zk-NMRS-website.png";
import GameHub from "../assets/portfolio/nyatoGameHub.jpg";
import portfolioWebsite from "../assets/portfolio/portfolioWebsite.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: zkNMRS,
      demoUrl: "https://inmrs.netlify.app/login",
      codeUrl: "https://github.com/EricJoshua1/ZKP-NMR",
    },
    {
      id: 2,
      src: GameHub,
      demoUrl: "https://game-corner-five.vercel.app/",
      codeUrl: "https://github.com/EricJoshua1/Games-platform",
    },
    {
      id: 3,
      src: portfolioWebsite,
      demoUrl: "https://ericjoshua-myportfolio.netlify.app/",
      codeUrl: "https://github.com/EricJoshua1/my-portfolio",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen">
        <div className="pb-8">
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="text-lg md:text-xl py-4">
            Check out some of my Projects right here
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-6">
          {projects.map(({ id, src, demoUrl, codeUrl }) => (
            <div key={id} className="shadow-md shadow-gray-700 rounded-lg">
              <img
                src={src}
                alt="Project preview"
                className="rounded-t-md duration-200 hover:scale-105"
              />
              <div className="p-4 flex items-center justify-center">
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base px-4 py-2 m-2 duration-200 hover:scale-105 bg-gray-700 rounded hover:bg-gray-600"
                >
                  Demo
                </a>
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base px-4 py-2 m-2 duration-200 hover:scale-105 bg-gray-700 rounded hover:bg-gray-600"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
