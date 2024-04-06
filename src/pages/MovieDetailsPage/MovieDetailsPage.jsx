import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  
    const { movieId } = useParams();
  
  return (
    <div>MovieDetailsPage {movieId} </div>
  )
}

export default MovieDetailsPage