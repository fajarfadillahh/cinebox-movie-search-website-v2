import React from "react";

// import components
import Header from "../components/Header";
import Footer from "../components/Footer";

import ScrollUp from "../components/Scrolling/ScrollUp";
import ScrollToTop from "../components/Scrolling/ScrollToTop";

// import parts
import Hero from "../parts/NotFoundPage/Hero";

const NotFound = () => {
  return (
    <>
      <div className="-z-50 mx-auto max-w-[1440px] overflow-hidden bg-gray-900">
        <Header />
        <Hero />
        <Footer />
        <ScrollUp />
        <ScrollToTop />
      </div>
    </>
  );
};

export default NotFound;
