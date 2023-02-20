import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// import header-links data
import { HeaderLinks } from "../../Data";

const NavbarMobile = ({ navbarOpen, setNavbarOpen }) => {
  const refNavbar = useRef(null);

  const handleClickNavbar = (event) => {
    if (refNavbar.current && !refNavbar.current.contains(event.target)) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickNavbar);

    return () => {
      document.removeEventListener("mousedown", handleClickNavbar);
    };
  }, []);

  return (
    <div
      className={`fixed top-20 right-[6%] w-[250px] origin-top-right bg-gray-800 p-7 transition-all duration-300 md:hidden ${
        navbarOpen ? "scale-100" : "scale-0"
      }`}
      ref={refNavbar}
    >
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
