import MoveList from '../../components/MovieList/MovieList'
import css from './HomePage.module.css'

const HomePage = ({ movieData }) => {
  return (
    <div className={css.MovieListingWrap}>
      <h2>Tranding today</h2>
      <MoveList movieData={movieData}/>
    </div>
  )
}

export default HomePage