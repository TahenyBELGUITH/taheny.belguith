import React from "react";
// import skills data
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="flex flex-col items-center text-center lg:items-center justify-center pt-8">
        <h2 className="text-[44px] lg:text-4x1 font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[3rem] before:hidden before:lg:block font-body text-accent ">
          Skills
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-8 md:grid-flow-row">
          {skills.map((skill, index) => {
            return (
              <>
                <div className="flex items-center justify-center" key={index}>
                  <img src={skill.image} />
                </div>
              </>
              //
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
