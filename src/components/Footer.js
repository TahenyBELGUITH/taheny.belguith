import React from "react";

// import social data
import { social } from "../data";

const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-x-6 space-y-0 items-center justify-between ">
          {/* social icons */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a href={href} key={index} className="text-accent text-base">
                  {icon}
                </a>
              );
            })}
          </div>
          <br></br>
          {/* copyright */}
          <p>
            &copy; 2023 <span className="text-accent">Taheny Belguith</span> . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
