import React from "react";
import { SkillBars } from "react-skills";

// import skills data
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="bg-tertiary py-12 container">
      <div className="flex flex-col items-center text-center lg:items-center justify-center">
        <h2 className="text-[44px] lg:text-4x1 font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:-right-[7rem]  before:hidden before:lg:block font-body ">
          Skills
        </h2>
      </div>
      <br></br>
      <br></br>
      {/*  */}
      <div class="w-full px-4">
        <div class="mb-8">
          <h3 className="font-body">ReactJs</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[90%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">Redux</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[70%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">Tailwind</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[90%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">Ruby</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[93%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">JavaScript</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[97%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">Rails</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[93%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">PostgreSQL</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[93%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">mySQL</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[90%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">Jest</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[90%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">Oracle</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[90%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">Postman</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[90%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">Git</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[99%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">Java</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[90%] rounded-2xl"></div>
          </div>
        </div>
        <div class="mb-8">
          <h3 className="font-body">Bootstrap</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[92%] rounded-2xl"></div>
          </div>
        </div>

        <div class="mb-8">
          <h3 className="font-body">Photoshop</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[100%] rounded-2xl"></div>
          </div>
        </div>

        <div class="mb-8">
          <h3 className="font-body">WordPress</h3>
          <div class="bg-light relative h-[10px] w-full rounded-2xl">
            <div class="bg-accent absolute top-0 left-0 h-full w-[60%] rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
