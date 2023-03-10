import React from "react";
import "./Project.css";
//  icons
import { FiGithub, FiChrome } from "react-icons/fi";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center ">
      <div className="img__wrap">
        <div className="mb-8">
          <img
            className="rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:animate-pulse cursor-pointer img__img"
            src={item.image}
          />
        </div>
        <div className="img__description">
          <p>{item.description}</p>
        </div>
      </div>
      <p className="capitalize text-accent text-sm mb-3 font-body">
        {item.category}
      </p>
      <h3 className="text-2x1 font-semibold capitalize mb-3 font-body">
        {item.name}
      </h3>
      <div className="flex gap-2">
        <a href={item.href} target="_blank">
          <button
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300
                bg-transparent hover:bg-accent-hover text-accent font-semibold hover:text-white py-2 px-4 border border-accent-500 hover:border-transparent rounded items-center flex gap-2"
          >
            <FiChrome />
            Live project
          </button>
        </a>
        <a href={item.code} target="_blank">
          <button
            className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300
                bg-transparent hover:bg-accent-hover text-accent font-semibold hover:text-white py-2 px-4 border border-accent-500 hover:border-transparent rounded items-center flex gap-2"
          >
            <FiGithub />
            Live code
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
