import { Suspense, lazy } from 'react';
import {Route, Routes } from "react-router-dom";

import Loader from './components/Loader/Loader';
import Navigation from './components/Navigation/Navigation';
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));



export function App() {

  return (
      <div>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
  )
}

export default App;
