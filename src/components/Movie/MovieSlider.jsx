import React from "react";

// import swiper components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, FreeMode, Mousewheel } from "swiper";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import movielist data & movie card
import MovieCard from "./MovieCard";

const MovieSlider = ({ movies }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={24}
      keyboard={{
        enabled: true,
      }}
      freeMode={true}
      mousewheel={true}
      modules={[Keyboard, FreeMode, Mousewheel]}
    >
      {movies.map((movie) => {
        return (
          <SwiperSlide key={movie.id} className="max-w-[250px]">
            <MovieCard
              poster={`${import.meta.env.VITE_BASEURLIMG}/${movie.poster_path}`}
              releaseDate={movie.release_date}
              title={movie.title}
              rating={movie.vote_average}
              genreMovie={movie.genre_ids}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MovieSlider;
