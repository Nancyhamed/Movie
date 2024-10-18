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
  const dispatch = useDispatch()

  // const fetchData = (value) => {
  //   fetch(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=ab84620c25925703ad5485179e1a4a0f"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       // Accessing the results array
  //       const results = json.results.filter((mov) => {
  //         return (
  //           value &&
  //           mov &&
  //           mov.title &&
  //           mov.title.toLowerCase().includes(value.toLowerCase())
  //         );
  //       });
  //       setResults(results);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // };

  const searFilter = (value)=>{
   const filter= movies.filter((mov)=>{
      return (
                  value &&
                  mov &&
                  mov.title &&
                  mov.title.toLowerCase().includes(value.toLowerCase())
                );
                
              })
              ;setResults(filter);
           
    }
  
  useEffect(()=>{
    dispatch(getMovies())
  },[dispatch])

  const handleChange = (value) => {
    setInput(value);
    // fetchData(value);
    searFilter(value)
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between reesponsivenavs">
        <div className="container">
          <div className="logodiv">
            <img src={logo} alt="" className="w-100 " />
          </div>
          <div className="container-fluid ">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto  mb-lg-0   ">
                <li className="nav-item ">
                  <Link
                    className="nav-link navlink navhover "
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link navlink navhover" to="movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link navlink navhover" to="series">
                    Series
                  </Link>
                </li>
                <li className="nav-item ">
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
        </div>
      </nav>
    </>
  );
}
// import React from 'react'
// import { json, Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import "./Nav.css"
// import logo from './logo3-removebg-preview.png'
// import { useState } from 'react'
// export default function Nav() {

//     const fetchData =(value)=>{
//         fetch('https://api.themoviedb.org/3/movie/popular?api_key=ab84620c25925703ad5485179e1a4a0f')
//         .then((response)=>response.json())
//         .then((json)=> {
//         const results= json.filter((mov)=>{
//             return mov && mov.title && mov.title.toLowerCase().includes(value)
//         });
//         console.log(results);
//         });
//     }

//     const handleChange=(value)=>{
//         setInput(value)
//         fetchData(value)
//     }

//     const [input,setInput]=useState("");
//     return (
//         <>
//     <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
//         <div className="container">
//         <div className="logodiv">
//         <img src={logo} alt="" className='w-100'/>
//         </div>
//         <div className="container-fluid">
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-3 navul">
//                 <li className="nav-item">
//                 <Link className="nav-link navlink" aria-current="page" to="/">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                 <Link className="nav-link navlink" to="movies">Movies</Link>
//                 </li>
//                 <li className="nav-item">
//                 <Link className="nav-link navlink" to="series">Series</Link>
//                 </li>
//                 <li className="nav-item">
//                 <Link className="nav-link navlink" to="watchlist">Watch List</Link>
//                 </li>
//             </ul>
//         <form className="d-flex">
//             <input className="form-control me-2"
//             value={input}
//             onChange={(e)=>handleChange(e.target.value)}
//             type="search" placeholder="Search" aria-label="Search"/>
//         </form>
//         <div className="btns">
//             <button className='btn'>Login</button>
//             <button className='btn'>Sign Up</button>
//         </div>
//         </div>
//         </div>
//         </div>
//     </nav>
//         </>
//     )
// }
