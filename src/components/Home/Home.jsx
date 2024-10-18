import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieSlider from "../MovieSlider/MoviesSlider";
import Upcoming from "../upComing/Upcoming";
import "./Home.css";
import SeriesSlider from "../SeriesSlider/SeriesSlider";
import img from "./inner.jpg";
import { Link } from "react-router-dom";
import { addToWatchlist } from "../../redux/Slices/watchlistslice";
import { useSelector, useDispatch } from "react-redux";
import { getMovies, getPopularMovies, getTopRateMovies } from "../../redux/Slices/movieslice";



export default function Home() {
  const handleAdd = (m) => {
    dispatch(addToWatchlist(m));
  };

  const dispatch = useDispatch();
  const { movies, popularMovies, topRatedMovies} = useSelector((state) => state.movies);


  useEffect(() => {
    dispatch(getMovies());
    dispatch(getPopularMovies());
    dispatch(getTopRateMovies());
 },[dispatch]);

  console.log("populaer here",popularMovies);
  console.log("movies here", movies);
  console.log("top rated :",topRatedMovies)


  //   function filter(cat) {
  //     const filteredMovies = movies.filter((movie) => movie.category === cat);
  //     return filteredMovies;
  //   }
  // const[filt,setFelt]=useState([]);
  return (
    <>
      <MovieSlider />
      <div className="container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h2 className="Generies">Generies</h2>
              <ul className="side_ul">
                <li>
                  <a href="#top">Top</a>
                </li>
                <li>
                  <a href="#popular">Popular</a>
                </li>
                <li>
                  <a href="#UpComing">Up Coming</a>
                </li>
                <li>
                  <a href="#series">TV series</a>
                </li>
              </ul>
            </div>
            <div className="col-10">
              <h2 id="top" className="mb-5 title">
                Top Movies
              </h2>
              <div className="row mb-5">
                {topRatedMovies &&
                  topRatedMovies.map((m) => (
                    <Link className="card col-md-3 col-sm-8 col-10" to={`/movies/${m._id}`} >
                      <div  key={m._id}>
                      <i
                        className="fa-solid fa-plus bookmark"
                        onClick={() => handleAdd(m)}
                      ></i>
                      <img src={m.poster_path} alt="" className="" />
                      <h5>{m.title}</h5>
                      <div className="rate">
                        <i className="fa-solid fa-star"></i>
                        <p>{m.vote_average}</p>
                      </div>
                    </div>
                    </Link>
                  ))}
              </div>
              <h2 className="mb-5 title" id="UpComing">
                Up Coming
              </h2>
              <Upcoming />
              <h2 className="mb-5 mt-5 title" id="popular">
                Popular
              </h2>
              <div className="row mt-5">
                {popularMovies &&
                  popularMovies.map((m) => (
                    <Link to={`/movies/${m._id}`}
                    className="card col-md-3 col-sm-8 col-10">
                      <div key={m._id}>
                      <i
                        className="fa-solid fa-plus bookmark"
                        onClick={() => handleAdd(m)}
                      ></i>
                      <img src={m.poster_path} alt="" className="" />
                      <h5>{m.title}</h5>
                      <div className="rate">
                        <i className="fa-solid fa-star"></i>
                        <p>{m.vote_average}</p>
                      </div>
                    </div>
                    </Link>
                  ))}
              </div>
              <h2 className="mt-5 title" id="series">
                TV series
              </h2>
              <SeriesSlider />
              <div className="toAbout mb-5">
                <div className="aboutimg">
                  <img src={img} alt="" />
                </div>
                <div className="text">
                  <h3 className="abouttitle">Know More About us?</h3>
                  <p className="text-light">
                    Movie Night is one of the biggest Websites to recommend you
                    the Trending Movies, Quibusdam voluptate provident
                    voluptatibus eligendi aliquam blanditiis?
                  </p>
                  <p className="text-light">
                    To Know more About us and be one of our family, following
                    the trending movies, you can click here{" "}
                  </p>
                  <button className="btn">
                    <Link to="about" className="btnlink">
                      About
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
