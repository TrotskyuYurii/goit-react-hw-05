import { NavLink } from 'react-router-dom';

const MovieList = ({ movieData }) => {
  if (!movieData || movieData.results.length === 0) {
    return <div><h3>Sorry, there are no movies found 😒</h3></div>;
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
