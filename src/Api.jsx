import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

// get trending movies
export const getTrendingMovies = async () => {
  const trendingMovies = await axios.get(`
    ${baseUrl}/trending/movie/week?api_key=${apiKey}
  `);

  return trendingMovies.data.results;
};

// get popular movies
export const getPopularMovies = async () => {
  const popularMovies = await axios.get(`
    ${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1
  `);

  return popularMovies.data.results;
};

// get genre movies
export const getGenreMovies = async () => {
  const genreMovies = await axios.get(`
    ${baseUrl}/genre/movie/list?api_key=${apiKey}&language=en-US
  `);

  return genreMovies.data.genres;
};
