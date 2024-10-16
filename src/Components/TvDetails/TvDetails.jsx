import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addToWatchlist } from "../../redux/Slices/watchlistslice";
import { useDispatch } from "react-redux";
function SeriesDetails() {
  const params = useParams();
  const [series, setSeries] = useState({});
 const dispatch = useDispatch;
 const handleAdd = (mo) => {
   dispatch(handleAdd(mo));
 };
  function getSeriesDetailes(){
      fetch(`http://localhost:4000/getTvSeries/${params.series_id}`)
      .then((response)=>response.json())
      .then((series)=>setSeries(series))
      .catch((error)=>console.error("Error fetching", error));
  }

  useEffect(() => {
    getSeriesDetailes();
  }, [params.series_id]);

  const background = `https://image.tmdb.org/t/p/w200${series.backdrop_path}`;

  return (
    <div>
      <div className="container-fluid">
        <div
          className="row "
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)) , url(${background}) `,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

            height: " 90vh",
          }}
        >
          <div className="col-md-6">
            <img
              src={`https://image.tmdb.org/t/p/w200${series.poster_path}`}
              className="details-img"
            />
          </div>
          <div className="col-md-6 text-start px-3 py-5">
            <h1>{series.title}</h1>
            <p>Release Date: {series.release_date}</p>
            <span style={{ marginRight: "30px", color: "white" }}>
              {" "}
              Rating: {series.vote_average}
            </span>
            <span style={{ color: "white" }}>
              Language: {series.original_language}
            </span>
            {series.genres && series.genres.length > 0 && (
              <div style={{ marginTop: "20px", color: "white" }}>
                <h4>Genres:</h4>
                <ul>
                  {series.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            )}
            <p style={{ marginTop: "30px" }}>{series.overview}</p>
            <Link
              className="btn btn-primary"
              style={{ marginTop: "20px" }}
              onClick={() => handleAdd(series)}
            >
              Add to watchlist
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SeriesDetails;
