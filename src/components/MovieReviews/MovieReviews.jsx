import { useState, useEffect } from 'react';
import { requestReviews } from "../../services/api";

const MovieReviews = ({movieId}) => {
  const [movieData, setMovieData] = useState(null);

  const fetchData = async (queryWord = '') => {
    try {
      const movieData = await requestReviews(queryWord);
      setMovieData(movieData);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  useEffect(() => {
    fetchData(movieId);
  }, [movieId]);


  return (
    <div>
      {movieData?.results?.length > 0 ? (
        <ul>
          {movieData.results.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  )
}

export default MovieReviews;
