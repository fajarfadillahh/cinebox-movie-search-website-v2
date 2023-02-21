import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollToTop = () => {
  return (
    <div className="fixed right-10 bottom-16 z-50 inline-flex cursor-pointer bg-blue-600 p-2 text-[1.6rem] text-white transition-all duration-300 hover:bg-blue-700">
      <RiArrowUpSLine />
    </div>
  );
};

export default ScrollToTop;
