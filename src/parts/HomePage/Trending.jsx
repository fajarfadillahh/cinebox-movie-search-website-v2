import React, { useEffect, useState } from "react";

// import trending movie data
import { getTrendingMovies } from "../../Api";

// import components
import MovieSlider from "../../components/Movie/MovieSlider";

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then((result) => {
        setMovies(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="section relative">
      <div className="container grid gap-8">
        <div className="text-left">
          <h1 className="section-title pb-1 text-[28px] lg:text-[38px]">
            Trending<span className="text-blue-600">.</span>
          </h1>
          <p className="section-text">This week's most watched movies.</p>
        </div>

        {/* trending - movie slider */}
        <MovieSlider movies={movies} />
      </div>
    </section>
  );
};

export default Trending;
