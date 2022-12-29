import React from "react";

// import projects
import Projects from "../components/Projects";
const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block font-body">
            My Latest work
          </h2>
          <p className="subtitle text-white">
            I'm building scalable web applications, Mobile apps, and beautiful
            websites
            <span className="text-accent"> for companies!</span>
          </p>
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
