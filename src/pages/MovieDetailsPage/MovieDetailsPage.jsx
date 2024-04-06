import { NavLink, useParams, Route, Routes, useLocation } from 'react-router-dom';
import MovieCast from '../../components/MovieCast/MovieCast';
import MovieReviews from '../../components/MovieReviews/MovieReviews';
import { useRef } from 'react';

const MovieDetailsPage = () => {

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/');
  const { movieId } = useParams();

  return (
    <div>
      <NavLink to={backLinkRef.current}>⬅Go back</NavLink>
      <div>
        <img src="" alt="" />
        <div>
          <p>title</p>
          <p>UserScore</p>
          <p>Overview</p>
          <p>Genres</p>
        </div>
      </div>


      <p>Additional information</p>
      <ul>
        <li><NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink></li>
        <li><NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink></li>
      </ul>


      <Routes>
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
      </Routes>
    </div>
  );
};

export default MovieDetailsPage;
