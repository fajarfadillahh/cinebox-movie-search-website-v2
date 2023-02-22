import React from "react";
import {
  RiGithubFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

// import footer-links data
import { FooterLinks } from "../Data";

const Footer = () => {
  return (
    <footer className="relative pt-60 pb-8">
      {/* gradient */}
      <div className="absolute -bottom-[60px] -right-[150px] h-[400px] w-[400px] rounded-full bg-gradient-to-t from-red-500 to-yellow-300 blur-[120px] lg:blur-[150px]" />

      <div className="container relative grid justify-items-center gap-8">
        <ul className="flex items-center gap-8">
          {[
            [<RiTwitterFill />, "/"],
            [<RiYoutubeFill />, "/"],
            [<RiInstagramFill />, "/"],
            [<RiGithubFill />, "/"],
          ].map(([social, url], index) => {
            return (
              <li key={index}>
                <Link
                  to={url}
                  className="inline-flex w-max text-[1.5rem] text-white hover:text-blue-600"
                >
                  {social}
                </Link>
              </li>
            );
          })}
        </ul>

        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 sm:gap-x-20">
          {FooterLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  to={link.path}
                  className="font-medium text-white hover:text-blue-600 hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="section-text text-center">
          &copy; Copyrights 2023, Cinebox. | Made by Fajar Fadillah A ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
