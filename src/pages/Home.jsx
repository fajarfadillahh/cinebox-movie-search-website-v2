import React from "react";

// import components
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <div className="-z-50 mx-auto h-[3000px] max-w-[1440px] overflow-hidden bg-gray-900">
        <Header />
        <Hero />
      </div>
    </>
  );
};

export default Home;
