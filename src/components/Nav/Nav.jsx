
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import logo from "./logo3-removebg-preview.png";
import { getMovies } from '../../redux/Slices/movieslice';
import { useSelector, useDispatch } from 'react-redux';

export default function Nav({ setResults }) {
  const [input, setInput] = useState("");
  const { movies } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const searFilter = (value) => {
    const filter = movies.filter((mov) => {
      return (
        value &&
        mov &&
        mov.title &&
        mov.title.toLowerCase().includes(value.toLowerCase())
      );
    });
    setResults(filter);
  };

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const handleChange = (value) => {
    setInput(value);
    searFilter(value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between reesponsivenavs">
        <div className="container">
          <div className="logodiv mt-2">
            <img src={logo} alt="" className="w-100" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link navlink navhover" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navlink navhover" to="movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navlink navhover" to="series">
                  Series
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navlink navhover" to="watchlist">
                  WatchList
                </Link>
              </li>
            </ul>
            <form className="d-flex mx-2">
              <input
                className="form-control ms-2"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <div className="btns d-flex">
              <button className="btn">
                <Link to="login" className="btnlink">
                  Login
                </Link>
              </button>
              <button className="btn">
                <Link to="signup" className="btnlink">
                  SignUp
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
