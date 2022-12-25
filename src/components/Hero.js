import React from "react";
import Typewriter from "typewriter-effect";

// import woman image
import WomanImg from "../assets/img/banner-woman2.webp";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat pt-36 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left Side */}
          <div className="flex-1 flex flex-col items-center lg:items-start ">
            <h1 className="text-4x1 leading-[44px] md:text-5x1 md:leading-tight lg:text-7xl  font-bold pt-3">
              I Build & Design <br /> Web Interfaces
            </h1>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "I'm a passionate self-taught full-stack software engineer ."
                  )
                  .start();
              }}
            />

            <p className="pt-4 pb-8 md:pb-12 maw-w-[480px] text-lg text-center lg:text-left">
              {" "}
              my passion for software lies in dreaming up ideas and Making them
              come true with elegant interfaces.
            </p>

            <a href="#contact">
              <button
                type="button"
                className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              >
                Work with me
              </button>
            </a>
            <br></br>
            <br></br>
          </div>

          {/* right Side */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full animate-pulse">
            <img src={WomanImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
