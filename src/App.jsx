import { useState,useEffect,Suspense, lazy} from 'react';
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import { requestTrandingToday } from "./services/api";

import HomePage from './pages/HomePage/HomePage'

import './App.css';
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
    <div>
      <HomePage movieData={movieData}/>
    </div>
  )
}

export default App
