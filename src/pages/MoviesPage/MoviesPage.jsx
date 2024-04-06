import MovieList from "../../components/MovieList/MovieList"
import css from "./MoviesPage.module.css"

const MoviesPage = ({ searchResult, onSearchClick }) => {

    const handleClick = (event) => {

        event.preventDefault();
        const searchInputValue = event.target.form.elements.searchInput.value.trim();
       
        if (searchInputValue === "") {
            return;
        }

        onSearchClick(searchInputValue);
    };

    return (
        <div>
            <form>
                <input name="searchInput" type="text" />
                <button type="submit" onClick={handleClick}>Search</button>
            </form>
            <MovieList movieData={searchResult} />
        </div>
    )
}

export default MoviesPage