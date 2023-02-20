import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

// import components
import MovieSlider from "../../components/Movie/MovieSlider";

const Trending = () => {
  return (
    <section className="section relative">
      <div className="container grid gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="section-title pb-1 text-[28px] lg:text-[38px]">
              Trending<span className="text-blue-600">.</span>
            </h1>
            <p className="section-text">This week's most watched movies.</p>
          </div>

          {/* navigation arrow */}
          <div className="hidden items-center gap-4 md:inline-flex">
            <div className="swiper-button-prev">
              <RiArrowLeftSLine />
            </div>
            <div className="swiper-button-next">
              <RiArrowRightSLine />
            </div>
          </div>
        </div>

        {/* trending - movie slider */}
        <MovieSlider />
      </div>
    </section>
  );
};

export default Trending;
