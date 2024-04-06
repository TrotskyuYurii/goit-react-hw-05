import { NavLink, useParams } from 'react-router-dom';
import MovieCast from '../../components/MovieCast/MovieCast';
import  MovieReviews from '../../components/MovieReviews/MovieReviews';


const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return (
    <div>
      <p>MovieDetailsPage {movieId}</p>
      <div>
        <p>Additional information</p>
        <ul>
          <li><NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink></li>
          <li><NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
