import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "./MovieSlider.css";
import SearchResult from "../SearchResult/SearchResult";

const AutoPlaySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 800, // 0.5 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Remove padding for centering
    arrows: false,
  };

  const [movies, setmovies] = useState([]);

  async function getApi() {
    let result = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=ab84620c25925703ad5485179e1a4a0f`
    );
    setmovies(result.data.results);
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
    
      <div className="movslider">
        <Slider {...settings} className="slider">
          {movies.map((m) => (
            <div className="background" key={m.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + m.backdrop_path}
                alt=""
                className="backimage"
              />
              <div className="movvcard">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + m.poster_path}
                  alt=""
                  className="cardimg"
                />
              </div>
            </div>
            
          ))
        }
      </Slider>
        </div>
    </>
  );
};

export default AutoPlaySlider;
