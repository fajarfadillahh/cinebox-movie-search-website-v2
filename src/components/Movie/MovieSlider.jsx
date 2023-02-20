import React from "react";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "../../assets/styles/_globals.css";

// import movielist data & movie card
import { MovieList } from "../../Data";
import MovieCard from "./MovieCard";

const MovieSlider = () => {
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={24}>
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
