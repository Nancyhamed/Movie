import { useEffect, useState } from "react";
import { getMovies } from '../../redux/Slices/movieslice';
import { useSelector, useDispatch } from 'react-redux';
import { addToWatchlist } from '../../redux/Slices/watchlistslice';

import { RiStarSFill } from "react-icons/ri";
import "./Movie.css"
import { Link } from "react-router-dom";
function MovieContent() {
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);
    const [genre, setGenre] = useState("Action Movies");

    const genreList = [
        { id: 12, name: 'Action' },
        { id: 14, name: 'Animation' },
        { id: 16, name: 'Crime' },
        { id: 18, name: 'Horror' },
        { id: 27, name: 'Family' },
        { id: 28, name: 'Drama' },
        { id: 35, name: 'Romantic' },
        { id: 53, name: 'Science Fiction' },
        { id: 80, name: 'Fantasy' },
    ]


    function getByGenre(genreId) {

        const filteredMovies = movies.filter(movie => movie.genre_ids.includes(parseInt(genreId)));
        return filteredMovies;

    }

    const { movies } = useSelector((state) => state.movies);
    const dispatch = useDispatch()
    // console.log(movies);

    const handleAdd = (mov) => {
        dispatch(addToWatchlist(mov));
    }
    useEffect(() => {
        dispatch(getMovies());
        setGenres(genreList);
        setMovie(getByGenre(12));
        setGenre("Action Movies");
    }, [dispatch]);

    function handleGenreChange(event) {
        const selectedGenreId = event.target.value;
        const selectedGenreName = event.target.options[event.target.selectedIndex].text;
        setMovie(getByGenre(selectedGenreId));
        setGenre(selectedGenreName);
    }
    return (
        <div>
            <div className="topContent">
                <h1>Discover Movies</h1>
                <select
                    className="form-select w-25 mx-5"
                    aria-label="Default select example"
                    onChange={handleGenreChange}
                >
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.id}>
                            {genre.name}
                        </option>
                    ))}
                </select>
            </div>
            <h2>{genre}</h2>
            <hr />
            <div className="content">
                {movie && movie.length > 0 ? (movie.map((movie) => (
                    <>
                        <Link
                            className="btn btn-dark"
                            to={`/movies/${movie._id}`}
                            style={{ backgroundColor: "transparent", border: "none" }}
                        >
                            <div className="col-lg-4 mb-3 px-4  img-container "></div>
                            <div
                                className="card"
                                key={movie._id}
                                style={{ width: "17rem" }}
                            >
                                <img src={movie.poster_path} alt={movie.title} />
                                <div className="ovelay-sec">
                                    <h5>{movie.title}</h5>
                                    <span style={{ color: "red" }}>
                                        {movie.release_date}
                                    </span>
                                    <p>
                                        <RiStarSFill /> {movie.vote_average}
                                    </p>
                                </div>
                            </div>
                            <Link
                                className="btn btn-primary"
                                style={{ marginTop: "10px" }}
                                onClick={() => handleAdd(movie)}
                            >
                                Add to watchlist
                            </Link>
                        </Link>
                    </>
                ))) : (<p>No Movies Found...</p>)}
            </div>
        </div>
    )
}

export default MovieContent
