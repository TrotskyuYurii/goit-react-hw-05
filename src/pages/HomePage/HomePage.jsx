import MoveList from '../../components/MovieList/MovieList'

const HomePage = ({ movieData }) => {
  return (
    <div>
      <h2>Tranding today</h2>
      <MoveList movieData={movieData}/>
    </div>
  )
}

export default HomePage