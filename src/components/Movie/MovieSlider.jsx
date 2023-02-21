import React from "react";

// import swiper components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// import swiper styles
import "swiper/css";

// import movielist data & movie card
import { MovieList } from "../../Data";
import MovieCard from "./MovieCard";

const MovieSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={24}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation]}
    >
      {MovieList.map((movie) => {
        return (
          <SwiperSlide key={movie.id} className="max-w-[250px]">
            <MovieCard
              poster={movie.poster}
              releaseDate={movie.release_date}
              title={movie.title}
              rating={movie.rating}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MovieSlider;