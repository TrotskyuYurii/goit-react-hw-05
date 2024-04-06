

const MovieList = ({ movieData }) => {

  if (!movieData) {
    return;
  }

  return (
    <div>
        <ul>
          {movieData.results.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
    </div>
  )
}

export default MovieList