import { useLocation, Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { requestSearch } from '../../services/api';

import MoveListMessage from '../../components/MoveListMessage/MoveListMessage';
import MovieList from "../../components/MovieList/MovieList";

import css from "./MoviesPage.module.css";


const MoviesPage = () => {
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? '/');
    const [searchResult, setSearchResult] = useState(null);
    const [searchInputValue, setSearchInputValue] = useState('');

    const fetchData = async (queryWord) => {
        try {
            setSearchResult(await requestSearch(queryWord));
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputValue = event.target.elements.searchInput.value.trim();
        setSearchInputValue(inputValue);
    };

    useEffect(() => {
        if (searchInputValue) {
            fetchData(searchInputValue);
        }
    },[searchInputValue])

    return (
        <div>
            <Link className={css.backLink} to={backLinkRef.current}>⬅ Go Back</Link>
            <form onSubmit={handleSubmit}>
                <input name="searchInput" type="text" />
                <button type="submit" className={css.buttonSubmit}>Search</button>
            </form>
            <MovieList movieData={searchResult}/>
            {searchResult === null || searchResult.results.length === 0 && <MoveListMessage movieData={searchResult} />}
        </div>
    );
};

export default MoviesPage;
