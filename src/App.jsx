import { useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import { requestTrandingToday } from "./services/api";

import HomePage from './pages/HomePage/HomePage'

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <header>
          <nav className={css.nav}>
            <NavLink to="/" className={css.navLink}>Home</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage movieData={movieData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
