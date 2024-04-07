import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import { requestTrandingToday, requestSearch } from "./services/api";

import Loader from './components/Loader/Loader';
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));

import css from './app.module.css';



export function App() {
  const [isError, setisError] = useState(false);
  const [movieData, setmovieData] = useState(null);
  const [searchResult, setSearchResult] = useState(null);



  const fetchData = async (TypeOfQuery, queryWord = '') => {
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
            <NavLink to="/movies" className={css.navLink} >movies</NavLink>
          </nav>
        </header>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage movieData={movieData} />} />
            <Route path="/movies" element={<MoviesPage searchResult={searchResult} onSearchClick={onSearchClick} />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App;
