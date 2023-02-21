import React from "react";

// import tmdb icon
import TMDBIcon from "../../assets/images/tmdb-icon.svg";

const MovieCard = ({ poster, releaseDate, title, rating }) => {
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
        <p className="section-text pb-3 text-[14px]">{releaseDate}</p>
        <h3 className="section-title truncate pb-2 text-[22px]">{title}</h3>
        <div className="flex items-center gap-3">
          <img src={TMDBIcon} alt="tmdb icon" className="w-7" />
          <p className="section-text">{rating} / 10</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
