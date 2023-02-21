import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

// import components
import MovieSlider from "../../components/Movie/MovieSlider";

const Popular = () => {
  return (
    <section className="section relative">
      <div className="container grid gap-8">
        <div className="text-left">
          <h1 className="section-title pb-1 text-[28px] lg:text-[38px]">
            Popular<span className="text-blue-600">.</span>
          </h1>
          <p className="section-text">
            The most popular films currently showing in theaters.
          </p>
        </div>

        {/* popular - movie slider */}
        <MovieSlider />
      </div>
    </section>
  );
};

export default Popular;
