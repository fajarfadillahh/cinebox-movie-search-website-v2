import React from "react";
import { NavLink } from "react-router-dom";

// import header-links data
import { HeaderLinks } from "../../Data";

const Navbar = () => {
  return (
    <div className="hidden md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
      <ul className="flex items-center gap-8">
        {HeaderLinks.map((link, index) => {
          return (
            <li key={index}>
              <NavLink
                to={link.path}
                className="section-text navbar-link hover:text-gray-300"
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
