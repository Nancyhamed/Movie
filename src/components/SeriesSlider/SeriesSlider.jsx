import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import './SeriesSlider.css'

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


  const [series, setseries] = useState([]);

  async function getApi() {
    let result = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=ab84620c25925703ad5485179e1a4a0f`);
    setseries(result.data.results);
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>

        
        <div className="par mt-5">
        <Slider {...settings}>
            {series.map((s) => (
                <div className="cardd ">
                <img src={`https://image.tmdb.org/t/p/w500`+s.poster_path} alt="" className='image'/>
                <h3 className='mt-3 seriesname'>{s.original_name}</h3>
                </div>
            ))}
        </Slider>
        </div>

    </>
  );
};

export default AutoPlaySlider;



