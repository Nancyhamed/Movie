import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import "./Movie.css"
import { Link } from "react-router-dom";
function MovieContent() {
    const [movies,setMovies]=useState([]);
    const [genres, setGenres] = useState([]);
    const [genre,setGenre]=useState("Action Movies");
    
    const genreList=[
        {id:12, name:'Action'},
        {id:14, name:'Animation'},
        {id:16, name:'Crime'},
        {id:18, name:'Horror'},
        {id:27, name:'Family'},
        {id:28, name:'Drama'},
        {id:35, name:'Romantic'},
        {id:53, name:'Science Fiction'},
        {id:80, name:'Fantasy'},
    ]


    // function getByGenre(genreId){
    //     fetch(`http://localhost:4000/movies`)
    //     .then(response=>response.json())
    //     .then(data=>{
    //         const filteredMovies = data.filter(movie => movie.genre_ids.includes(parseInt(genreId)));
    //         setMovies(filteredMovies || [])
    //     })
    //     .catch(error=>console.error("Error fetching movies:", error))
    // }
    useEffect(() => {
        setGenres(genreList);
        // getByGenre(12);
        setGenre("Action Movies"); 
    }, []);

    function handleGenreChange(event) {
        const selectedGenreId = event.target.value;
        const selectedGenreName = event.target.options[event.target.selectedIndex].text;
        // getByGenre(selectedGenreId);
        setGenre(selectedGenreName);
    }
    return (
        <div>
            <div className="topContent">
                <h1>Discover Movies</h1>
                <select className="form-select" aria-label="Default select example" onChange={handleGenreChange}>
                    {genres.map((genre)=>(
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    ))}
                </select>
            </div>
                <h2>{genre}</h2>
                <hr/>
                <div className="content">
                    {movies && movies.length > 0 ?( movies.map((movie)=>(
                        <>
                        <Link className="btn btn-dark" to={`/movie/${movie._id}`} style={{backgroundColor:"transparent" , border:"none"}}>
                            <div className="card" key={movie.id} style={{"width": "30rem"}}>
                                <div className="up">
                                    <h5>{movie.title}</h5>
                                    <span style={{color:"red"}}>{movie.release_date}</span>
                                    <p><FontAwesomeIcon  className='rate-icon'  icon={faStar} /> {movie.vote_average}</p>

                                </div>
                                <img  src={movie.poster_path} alt={movie.title}/>
                                <div className="card-body">
                                    <h4 className="card-title">{movie.title}</h4>
                                </div>
                            </div>  
                        <Link className="btn btn-primary" style={{marginTop:"10px"}} to="/">Add to watchlist</Link> 
                        </Link>
                        </>                
                    ))):(<p>No Movies Found...</p>)}
                </div>
        </div>
    )
}

export default MovieContent


