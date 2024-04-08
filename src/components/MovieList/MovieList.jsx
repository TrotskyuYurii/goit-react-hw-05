import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movieData, backLinkRef }) => {
  
  // console.log(backLinkRef);

  if (movieData === null || movieData.results.length === 0) {
    return null;
  }

  return (
    <ul>
      {movieData.results.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: backLinkRef }}> {movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
