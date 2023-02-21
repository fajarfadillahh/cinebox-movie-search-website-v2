import React from "react";

// import components
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import ScrollUp from "../components/Scrolling/ScrollUp";
import ScrollToTop from "../components/Scrolling/ScrollToTop";

// import parts
import Trending from "../parts/HomePage/Trending";
import Popular from "../parts/HomePage/Popular";

const Home = () => {
  return (
    <>
      <div className="-z-50 mx-auto max-w-[1440px] overflow-hidden bg-gray-900">
        <Header />
        <Hero />
        <Trending />
        <Popular />
        <Footer />
        <ScrollUp />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Home;
