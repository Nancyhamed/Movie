import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { addToWatchlist } from "../../redux/Slices/watchlistslice";
import { useDispatch } from "react-redux";
function SeriesDetails() {
  const params = useParams();
  const [series, setSeries] = useState({});
 const dispatch = useDispatch();
 const handleAdd = (mo) => {
   dispatch(addToWatchlist(mo));
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

  const background = `${series.backdrop_path}`;

  return (
    <div>
      <div className="container-fluid my-5 mx-0">
        <div
          className="row mt-4 "
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.88), rgba(0,0,0,0.88)) , url(${background}) `,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",

            height: " 100vh",
          }}
        >
          <div className="col-md-6 text-center">
            <img
              src={`${series.poster_path}`}
              className="details-img "
            />
          </div>
          <div className="col-md-6 text-start px-3 py-5">
            <h1>{series.title}</h1>
            <p className="text-light" >Release Date: {series.release_date}</p>
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
            <p className="text-light fs-6" style={{ marginTop: "30px" }}>{series.overview}</p>
            <Link
              className="btn btn-primary "
              style={{ marginTop: "20px" , border:"0" }}
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
