import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { addToWatchlist } from "../../redux/Slices/watchlistslice"
import { useDispatch } from "react-redux"
function MovieDetails() {
    const params = useParams()
    const [movie, setMovie] = useState({})
    const dispatch = useDispatch;
    const handleAdd = (mo) => {
        dispatch(handleAdd(mo));
    }

    function getMovieDetailes() {
        fetch(`http://localhost:4000/getMovie/${params.movie_id}`)
            .then((response) => response.json())
            .then((movie) => setMovie(movie))
            .catch((error) => console.error("Error fetching movie:", error));
    }

    useEffect(() => {
        getMovieDetailes();
    }, [params.movie_id])
    return (
        <>
            <div className="backdrop">
                <div className="details-drop"></div>
                <img src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`} alt="..." style={{ width: "100%", height: "100vh" }} />
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="..." />
                    <div className="info">
                        <h1>{movie.title}</h1>
                        <p>Release Date: {movie.release_date}</p>
                        <span style={{ marginRight: "30px", color: "white" }}> Rating: {movie.vote_average}</span>
                        <span style={{ color: "white" }}>Language: {movie.original_language}</span>
                        {movie.genres && movie.genres.length > 0 && (
                            <div style={{ marginTop: "20px", color: "white" }}>
                                <h4>Genres:</h4>
                                <ul>
                                    {movie.genres.map((genre) => (
                                        <li key={genre.id}>{genre.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <p style={{ marginTop: "30px" }}>{movie.overview}</p>
                        <Link className="btn btn-primary" style={{ marginTop: "20px" }} onClick={() => handleAdd(movie)}>Add to watchlist</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MovieDetails