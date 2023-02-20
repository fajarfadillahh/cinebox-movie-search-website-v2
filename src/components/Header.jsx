import React from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

// import components
import Navbar from "./Navbar/Navbar";
import NavbarMobile from "./Navbar/NavbarMobile";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-[1440px]">
      <div className="container flex h-24 items-center justify-between md:relative">
        <Link to="/" className="section-title text-[24px]">
          Cinebox<span className="text-blue-600">.</span>
        </Link>

        {/* navbar & button - desktop version */}
        <Navbar />
        <Link to="/" className="btn hidden md:flex">
          Account
        </Link>

        {/* navbar & toggle menu - mobile version */}
        <NavbarMobile />
        <div className="inline-flex cursor-pointer p-1 text-[1.5rem] text-white hover:bg-gray-800 md:hidden">
          <RiMenu3Fill />
        </div>
      </div>
    </header>
  );
};

export default Header;
