
import { getSeries } from "../../redux/Slices/tvSeriseslice";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import './SeriesSlider.css';
import { Link } from "react-router-dom";

const AutoPlaySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // 0.5 seconds
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Remove padding for centering
    arrows: false,
  };
  const { tvSerise } = useSelector((state) => state.tvSerise);
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSeries());
  }, []);

  return (
    <>
      <div className="  seriesSlider">
        <Slider {...settings} className="slider">
          {tvSerise.map((s) => (
            <Link to={`/series/${s._id}`} className="cardd">
            <div  key={s._id}>
              
              <img
                src={ s.poster_path}
                alt=""
                className="image"
                
              />
              <h3 className="mt-3 seriesname">{s.title}</h3>
          </div>
            </Link>
            

          ))}
        </Slider>
      </div>
    </>
  );
};

export default AutoPlaySlider;

