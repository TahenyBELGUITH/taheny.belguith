import React from "react";

// import navigation data
import { navigation } from "../data";
// import link
import { Link } from "react-scroll";

function Nav() {
  return (
    <nav className="mt-8 md:my-8">
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((item, index) => {
          return (
            <li
              className="text-white hover:text-accent cursor-pointer hover:rotate-3"
              key={index}
            >
              <Link
                to={item.href}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="transition-all duration-300 "
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
