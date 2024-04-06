import MovieList from "../../components/MovieList/MovieList"
import css from "./MoviesPage.module.css"

const MoviesPage = ({ searchResult, onSearchClick }) => {
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
            <form onSubmit={handleSubmit}>
                <input name="searchInput" type="text" />
                <button type="submit">Search</button>
            </form>
            <MovieList movieData={searchResult} />
        </div>
    );
};


export default MoviesPage