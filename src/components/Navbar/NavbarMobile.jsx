import React from "react";
import { Link } from "react-router-dom";

// import header-links data
import { HeaderLinks } from "../../Data";

const NavbarMobile = () => {
  return (
    <div className="fixed top-20 right-[6%] w-[250px] bg-gray-800 p-7 md:hidden">
      <ul className="mb-6 flex flex-col">
        {HeaderLinks.map((link, index) => {
          return (
            <li key={index}>
              <Link
                to={link.path}
                className="section-text flex h-[52px] items-center px-4 hover:bg-gray-900/40"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link to="/" className="btn">
        Account
      </Link>
    </div>
  );
};

export default NavbarMobile;
