import React from "react";

// import services data
import { services } from "../data";
const Services = () => {
  return (
    <section id="services" className="section bg-tertiary ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* section title */}
          <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block font-body">
            What I offer for clients
          </h2>
          <p className="subtitle text-white">
            Find the awesome services you need
            <br />{" "}
            <span className="text-accent">
              {" "}
              to help you successfully meet your project{" "}
            </span>
          </p>
        </div>
      </div>
      {/* item grid */}
      <div className="grid lg:grid-cols-4 gap-8 p-12">
        {services.map((service, index) => {
          const { icon, name, description } = service;
          return (
            <div className="bg-secondary p-2 rounded-2xl " key={index}>
              <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-2 text-[28px]">
                {icon}
              </div>
              <h4 className="text-x1 font-medium mb-2 font-body">{name}</h4>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
