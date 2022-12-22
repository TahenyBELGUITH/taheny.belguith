import React from "react";

// import projects
import Projects from "../components/Projects";
const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">
            My Latest work
          </h2>
          <p className="subtitle">I’d be happy to help you find a solution!</p>
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
