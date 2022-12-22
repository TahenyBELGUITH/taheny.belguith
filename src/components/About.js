import React from "react";

// import images
import Image from "../assets/img/about.webp";
const About = () => {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
          />

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3x1 lg:text-4x1 font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block ">
                Taheny Belguith
              </h2>
              <p className="mb-4 text-accent">Full-Stack Engineer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I’m currently completing coursework at Microverse, a remote
                software development platform that allows devs worldwide to
                pair-program and build projects together. I’ve spent the last
                several months completely immersed in remote development,
                building everything from landing pages to rails APIs. I love
                coding specifically because I love the puzzle-solving aspect of
                it. This has made me participate in different hackathons. <br></br>Are you currently
                looking for a passionate Front-end Web engineer? Let's meet up!
                Send me an email
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
