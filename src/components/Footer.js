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
                <a
                  href={href}
                  target="_blank"
                  key={index}
                  className="text-accent text-base"
                >
                  {icon}
                </a>
              );
            })}
          </div>
          <br></br>
          {/* copyright */}
          <p>
            &copy; 2023{" "}
            <span className="text-accent animate-pulse">
              <a href="https://github.com/TahenyBELGUITH" target="_blank">
                Taheny Belguith
              </a>
            </span>{" "}
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
