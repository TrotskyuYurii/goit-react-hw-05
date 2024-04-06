import { useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import { requestTrandingToday } from "./services/api";

import HomePage from './pages/HomePage/HomePage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import css from './app.module.css';



export function App() {
  const [isError, setisError] = useState(false);
  const [movieData, setmovieData] = useState(null);



  const fetchData = async () => {
    try {
      setisError(false);
      const movieData = await requestTrandingToday();
      setmovieData(movieData);
    } catch (error) {
      setisError(true);
      console.log('error', error);
    } finally {
      setisError(false);
    }
  };

const onSearchClick = (query) => {
  
}

  useEffect(() => {
    fetchData();
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
          <Route path="/movies" element={<MoviesPage onSearchClick={onSearchClick}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
