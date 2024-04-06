import { NavLink } from 'react-router-dom';

const MovieList = ({ movieData }) => {
  if (!movieData) {
    return null;
  }

  return (
    <div>
      <ul>
        {movieData.results.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
