import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className=" text-gray-300 text-xl mt-20">
          Hi! l'm Eric Joshua, a devoted{" "}
          <span className="font-bold text-cyan-400">Web3 developer</span> with a
          deep interest in creating{" "}
          <span className=" text-cyan-400">
            website applications and systems
          </span>{" "}
          that run on{" "}
          <span className="font-bold text-cyan-400">blockchain technology</span>
          . My current role involves researching, desingning and implementing
          scalable solutions that improve the{" "}
          <span className=" text-cyan-400">
            safety management processes in construction
          </span>{" "}
          using blockchain technology.
        </p>

        <br />

        <p className=" text-gray-300 text-xl">
          My first dive into Web development and blockchain technology came
          during my Master's degree in 2022, when I joined CONTILAB as an
          assistant researcher. I was instantly captivated by this vibrant world
          where creativity was the core value that drove solving real-world
          challenges through innovative technology. This fueled me through a
          rigorous path of self-taught programming, a journey featured with
          countless late nights and occasional frustrations, but the thrill of
          seeing my code come to life kept me hooked. Every successful
          deployment felt like a victory lap, keeping me on a continuous quest
          for knowledge.
        </p>

        <br />

        <p className="text-gray-300 text-xl">
          These experiences have shaped me into a resilient developer with a
          knack for turning complex problems into elegant, functional solutions.
          As I continue to forge my path in tech, I'm looking to team up with
          people who are commited to making a significant impact.
        </p>
      </div>
    </div>
  );
};

export default About;
