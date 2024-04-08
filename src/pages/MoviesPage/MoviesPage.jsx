import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import MovieList from "../../components/MovieList/MovieList"

import css from "./MoviesPage.module.css"

const MoviesPage = ({ searchResult, onSearchClick }) => {

    const location = useLocation();
    const backLinkRef = useRef(location.state ?? '/');

    const handleSubmit = (event) => {
        event.preventDefault();
        const searchInputValue = event.target.elements.searchInput.value.trim();
       
        if (searchInputValue === "") {
            return;
        }

        onSearchClick(searchInputValue);
    };

    return (
        <div>
            <Link className={css.backLink} to={backLinkRef.current}>⬅ Go Back</Link>
            <form onSubmit={handleSubmit}>
                <input name="searchInput" type="text" />
                <button type="submit" className={css.buttonSubmit}>Search</button>
            </form>
            <MovieList movieData={searchResult} />
        </div>
    );
};


export default MoviesPage