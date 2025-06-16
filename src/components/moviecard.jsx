import './movicard.css'
function MovieCard({ movie }) //movie will be a object with title,releasedat,imagelink
{

    function LikeMovie()
    {
        alert("Movie Liked ")
    }
    return <div className="movie-card">
        
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}></img>
            <button onClick={LikeMovie}>
                LIKE
            </button>
        </div>
        <div className="movie-description">
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>{movie.release_date.split("-")[0]}</p>
        </div>

    </div>
}

export default MovieCard