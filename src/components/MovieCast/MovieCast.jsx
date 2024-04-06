import { useState, useEffect } from 'react';
import { requestCast } from "../../services/api";

const MovieCast = ({ movieId }) => {
  const [movieData, setMovieData] = useState(null);

  const fetchData = async (queryWord = '') => {
    try {
      const movieData = await requestCast(queryWord);
      setMovieData(movieData);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);

  useEffect(() => {
    if (movieData) {
      console.log(movieData);
    }
  }, [movieData]);

  return (
    <div>MovieCast</div>
  )
}

export default MovieCast;
