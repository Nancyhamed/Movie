import React, { useEffect, useState } from "react";
// import "./TvSeries.css";
import { Link } from "react-router-dom";
import { getSeries } from "../../redux/Slices/tvSeriseslice";
import { useSelector, useDispatch } from "react-redux";
import { addToWatchlist } from "../../redux/Slices/watchlistslice";
export default function Series() {
  const [series, setSeries] = useState([]);
  const [seriesGeners, setSeriesGeners] = useState([]);
  const [seriesGenre, setSeriesGenre] = useState("Drama");

  const genresList = [
    { id: 18, name: "Drama" },
    { id: 10764, name: "Action" },
    { id: 10765, name: "Crime" },
    { id: 10751, name: "Family" },
    { id: 16, name: "Romantic" },
    { id: 10766, name: "Fantasy" },
    { id: 10767, name: "Animation" },
  ];

  function getseriesGenerById(genreId) {
    const filteredSeries = tvSerise.filter((series) =>
      series.genre_ids.includes(parseInt(genreId))
    );
    return filteredSeries;
  }

  const { tvSerise } = useSelector((state) => state.tvSerise);
  const dispatch = useDispatch();
  // console.log(tvSerise);

  const handleAdd = (mov) => {
    dispatch(addToWatchlist(mov));
  };

  useEffect(() => {
    dispatch(getSeries());
    setSeriesGeners(genresList);
    setSeries(getseriesGenerById(18));
    setSeriesGenre("Drama");
  }, [dispatch]);

  function handleSeriesGenresChange(e) {
    const selectedSeriesGenreId = e.target.value;
    const selectedSeriesGenreName =
      e.target.options[e.target.selectedIndex].text;
    setSeries(getseriesGenerById(selectedSeriesGenreId));
    setSeriesGenre(selectedSeriesGenreName);
  }

  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-md-12 d-flex my-5">
            <h2>Discover Tv Showes</h2>
            <select
              className="form-select w-25 mx-5"
              aria-label="Default select example"
              onChange={handleSeriesGenresChange}
            >
              {seriesGeners.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>
          <h2 className="my-4">{seriesGenre}</h2>
          <hr />
        </div>
        <div className="row g-3">
          {series && series.length > 0 ? (
            series.map((series) => (
              <Link to={`/series/${series._id}`}
              className="card col-md-3 col-sm-8 col-10"> 
                <div  key={series._id}>
                      <i
                        className="fa-solid fa-plus bookmark"
                        onClick={() => handleAdd(series)}
                      ></i>
                      <img src={series.poster_path} alt="" className="" />
                      <h5>{series.title}</h5>
                      <div className="rate">
                        <i className="fa-solid fa-star"></i>
                        <p>{series.vote_average}</p>
                      </div>
                    </div>
              </Link>



              // <div className="col-lg-3 my-3 mx-4  img-container">
              //   <Link
              //     className="btn btn-dark"
              //     to={`/series/${series._id}`}
              //     style={{ backgroundColor: "transparent", border: "none" }}
              //   >
              //     <div className="col-lg-4 mb-3 px-4  img-container "></div>
              //     <div
              //       className="card"
              //       key={series._id}
              //       style={{ width: "17rem" }}
              //     >
              //       <img src={series.poster_path} alt={series.title} />
              //       <div className="ovelay-sec">
              //         <h5>{series.title}</h5>
              //         <span style={{ color: "red" }}>
              //           {series.release_date}
              //         </span>
              //         <p>
              //           <RiStarSFill /> {series.vote_average}
              //         </p>
              //       </div>
              //     </div>
              //     <Link
              //       className="btn btn-primary"
              //       style={{ marginTop: "10px" }}
              //       onClick={() => handleAdd(series)}
              //     >
              //       Add to watchlist
              //     </Link>
              //   </Link>
              // </div>
            ))
          ) : (
            <h5>There Is No Tv Series At this Time</h5>
          )}
        </div>
      </div>
    </div>
  );
}
