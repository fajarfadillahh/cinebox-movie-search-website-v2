import React, { useEffect, useState } from "react";

// import api
import { getGenreMovies } from "../../Api";

// import tmdb icon
import TMDBIcon from "../../assets/images/tmdb-icon.svg";

const MovieCard = ({ poster, releaseDate, title, rating, genreMovie }) => {
  // change format date
  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric", year: "numeric" };
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", options);
  };

  // fixed format rating
  const formatRating = (rating) => {
    return rating.toFixed(1);
  };

  // genre movies state
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenreMovies().then((result) => {
      setGenres(result);
    });
  }, []);

  const getGenres = (genreIds) => {
    const genresList = genreIds.map((id) => {
      const genre = genres.find((genre) => genre.id === id);
      return genre.name;
    });
    return (
      <div className="flex items-center gap-[6px] truncate pt-3">
        {genresList.slice(0, 3).map((genre, index) => (
          <p
            key={index}
            className="rounded-full border-[1.5px] border-white py-[1px] px-[6px] text-[10px] text-white"
          >
            {genre}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="group grid gap-6">
      <div className="overflow-hidden">
        <img
          src={poster}
          alt={`${title} movie`}
          className="h-full w-full origin-center object-cover transition-all duration-300 group-hover:scale-110"
        />
      </div>

      <div className="overflow-hidden p-1">
        <p className="section-text pb-3 text-[14px]">
          {formatDate(releaseDate)}
        </p>
        <h3 className="section-title truncate pb-2 text-[22px]">{title}</h3>
        <div className="flex items-center gap-3">
          <img src={TMDBIcon} alt="tmdb icon" className="w-7" />
          <p className="section-text">{formatRating(rating)} / 10</p>
        </div>

        {/* genres movie */}
        {getGenres(genreMovie)}
      </div>
    </div>
  );
};

export default MovieCard;
