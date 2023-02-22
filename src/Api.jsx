import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

// get trending movies
export const getTrendingMovies = async () => {
  const movies = await axios.get(`
    ${baseUrl}/trending/movie/week?api_key=${apiKey}
  `);

  return movies.data.results;
};
