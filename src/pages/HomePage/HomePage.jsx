import { useState, useEffect } from 'react';
import { requestTrandingToday } from "../../services/api";
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

const HomePage = () => {
  const [movieData, setMovieData] = useState(null);

  const fetchData = async () => {
    try {
      const trendingData = await requestTrandingToday();
      setMovieData(trendingData);
    } catch (error) {
      console.error('Виникла помилка:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={css.MovieListingWrap}>
      <h2>Тренди сьогодні</h2>
      <MovieList movieData={movieData} />
    </div>
  );
};

export default HomePage;
