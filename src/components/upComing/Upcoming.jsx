import React, { useEffect } from 'react';
import Slider from 'react-slick';
import './Upcomig.css';
import { getSeries } from "../../redux/Slices/tvSeriseslice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

const AutoPlaySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    centerPadding: '0px', // No padding for centering
};

const { tvSerise } = useSelector((state) => state.tvSerise);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getSeries());
}, [dispatch]);


  return (
    <>
      <div className=" mt-5">
        <Slider {...settings}>
          {tvSerise&&tvSerise.map((s) => (
            <Link to={`/series/${s._id}`} className='text-decoration-none'>
              <div className="cardd " key={s._id}>
              <img
                src={s.poster_path}
                alt=""
                className="image"
              />
              <h3 className="mt-3 seriesname">{s.original_title}</h3>
            </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default AutoPlaySlider;



