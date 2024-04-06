import { useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import { requestTrandingToday, requestSearch } from "./services/api";

import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import MovieDetailsPage from './pages/MovieDetailsPage/MovieDetailsPage'
// import MovieCast from './components/MovieCast/MovieCast'
// import MovieReviews from './components/MovieReviews/MovieReviews'

import css from './app.module.css';



export function App() {
  const [isError, setisError] = useState(false);
  const [movieData, setmovieData] = useState(null);
  const [searchResult, setSearchResult] = useState(null);



  const fetchData = async (TypeOfQuery, queryWord='') => {
    try {
      setisError(false);
  
      if (TypeOfQuery === 'Tranding') {
        const movieData = await requestTrandingToday();
        setmovieData(movieData);
        return;
      }

      if (TypeOfQuery === 'Search') {
        const movieData = await requestSearch(queryWord);
        setSearchResult(movieData);
        return;
      }
  
  
    } catch (error) {
      setisError(true);
      console.error('Error occurred:', error);
    } finally {
      setisError(false);
    }
  };
  

const onSearchClick = (queryWord) => {
  fetchData('Search', queryWord);
}

  useEffect(() => {
    fetchData('Tranding');
  }, []);



  return (
    <BrowserRouter>
      <div>
        <header className={css.header}>
          <nav className={css.nav}>
            <NavLink to="/" className={css.navLink}>Home</NavLink>
            <NavLink to="/movies" className={css.navLink}>movies</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage movieData={movieData} />} />
          <Route path="/movies" element={<MoviesPage searchResult={searchResult} onSearchClick={onSearchClick}/>} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}/>
            <Route path="/movies/:movieId/cast" element={<MovieDetailsPage />} />
            <Route path="/movies/:movieId/reviews" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
