import React from "react";
import Resume from "./Resume.pdf";
import { BsFillTelephonePlusFill, BsDownload } from "react-icons/bs";

// import images
import Image from "../assets/img/about.webp";
const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-6">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl animate-pulse"
            src={Image}
          />

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="section-title before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-4 before:hidden before:lg:block font-body ">
                myself
              </h2>

              <br></br>
              <br></br>
              <p className="mb-8">
                I’m currently completing coursework at Microverse, a remote
                software development platform that allows devs worldwide to
                pair-program and build projects together.
                <br /> I’ve spent the last several months completely immersed in
                remote development building everything from landing pages to
                rails APIs.
              </p>
            </div>
            <a href="#contact" className="flex gap-6">
              <button
                className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300
                bg-transparent hover:bg-accent-hover text-accent font-semibold hover:text-white py-2 px-4 border border-accent-500 hover:border-transparent rounded flex gap-2 items-center"
              >
                <BsFillTelephonePlusFill />
                Contact
              </button>
              <a href={Resume} download>
                <button
                  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300
                bg-transparent hover:bg-accent-hover text-accent font-semibold hover:text-white py-2 px-4 border border-accent-500 hover:border-transparent rounded flex items-center gap-2"
                >
                  <BsDownload />
                  my CV
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
