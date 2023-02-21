import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollToTop = () => {
  const [scrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setScrollVisible(true) : setScrollVisible(false);
    });
  }, []);

  const handleScrollVisible = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed right-10 z-50 inline-flex cursor-pointer bg-blue-600 p-2 text-[1.6rem] text-white transition-all duration-300 hover:bg-blue-700 ${
        scrollVisible ? "bottom-16" : "-bottom-full"
      }`}
      onClick={handleScrollVisible}
    >
      <RiArrowUpSLine />
    </div>
  );
};

export default ScrollToTop;
