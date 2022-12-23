import React from "react";
import Resume from "./Resume.pdf";

// import images
import Image from "../assets/img/about.webp";
const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
          />

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-[34px] lg:text-4x1 lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[3rem] before:hidden before:lg:block font-body ">
              </h2><br></br><br></br>
              <p className="mb-8">
                I’m currently completing coursework at Microverse, a remote
                software development platform that allows devs worldwide to
                pair-program and build projects together . <br />
                I’ve spent the last several months completely immersed in remote
                development building everything from landing pages to rails APIs
                .
              </p>
            </div>
            <a href="#contact" className="flex gap-6">
              <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
                Contact me
              </button>
              <a href={Resume} download>
                <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all">
                  Download my CV
                </button>
              </a>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
