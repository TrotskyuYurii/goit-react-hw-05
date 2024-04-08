
const MoveListMessage = ({ movieData }) => {
    if (movieData===null) {
        return <div><h3>Start searching for your movies 😊</h3></div>;
    } else if (movieData.results.length === 0) {
        return <div><h3>Sorry, there are no movies found 😒</h3></div>;
    }
}

export default MoveListMessage