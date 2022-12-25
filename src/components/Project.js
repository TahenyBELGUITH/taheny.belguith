import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center ">
      <div className="mb-8">
        <img
          className="rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 animate-pulse"
          src={item.image}
        />
      </div>
      <p className="capitalize text-accent text-sm mb-3 font-body">
        {item.category}
      </p>
      <h3 className="text-2x1 font-semibold capitalize mb-3 font-body">
        {item.name}
      </h3>
      <div className="flex gap-2">
        <a href={item.href}>
          <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            Live project
          </button>
        </a>
        <a href={item.code}>
          <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            Live code
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
