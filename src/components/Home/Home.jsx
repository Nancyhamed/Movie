
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieSlider from '../MovieSlider/MoviesSlider'
import Upcoming from'../upComing/Upcoming'
import "./Home.css"
import SeriesSlider from '../SeriesSlider/SeriesSlider'
import img from './inner.jpg'
import { Link } from 'react-router-dom'
export default function Home() {

    let [movies,setmovies]=useState([])
    let [top,settop]=useState([])

    async function getApi(){
        let result= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=ab84620c25925703ad5485179e1a4a0f`)
        setmovies(result.data.results)
        
        let topmovies=await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=ab84620c25925703ad5485179e1a4a0f`)
        settop(topmovies.data.results)
    }

    useEffect(()=>{
        getApi()
    }
    ,[])

    
    return (
        <>
        
        <MovieSlider/>
        
        <div className="container mt-5">
        <div class="container">
            <div className="row">
                <div className="col-2">
                <h2 className='Generies'>Generies</h2>
                <ul>
                    <li><a href="#top">Top</a></li>
                    <li><a href="#popular">Popular</a></li>
                    <li><a href="#UpComing">Up Coming</a></li>
                    <li><a href="#series">TV series</a></li>
                </ul>
                </div>
                <div className="col-10">
                <h2 id='top' className='mb-5 title'>Top Movies</h2>
                <div className="row mb-5">
                    {top.map((m)=>
                    <div className="card col-md-3 col-sm-8 col-10" key={m.id}>
                    <i className="fa-solid fa-plus bookmark"></i>
                    <img src={`https://image.tmdb.org/t/p/w500`+m.poster_path} alt="" className=''/>
                    <h5>{m.title}</h5>
                    <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <p>{m.vote_average}</p>
                    </div>
                </div>
                    )}
                </div>
                <h2  className='mb-5 title' id='UpComing'>Up Coming</h2>
                <Upcoming/>
                <h2  className='mb-5 mt-5 title' id='popular'>Popular</h2>
                <div className="row mt-5">
                    {movies.map((m)=>
                    <div className="card col-md-3 col-sm-8 col-10" key={m.id}>
                        <i className="fa-solid fa-plus bookmark"></i>
                        <img src={`https://image.tmdb.org/t/p/w500`+m.poster_path} alt="" className=''/>
                        <h5>{m.title}</h5>
                        <div className="rate">
                        <i className="fa-solid fa-star"></i>
                        <p>{m.vote_average}</p>
                        </div>
                    </div>
                    )}
                </div>
                <h2 className='mt-5 title' id='series'>TV series</h2>
                <SeriesSlider/>
                <div className="toAbout">
                    <div className="aboutimg">
                    <img src={img} alt="" />
                    </div>
                    <div className="text">
                        <h3 className='abouttitle'>Know More About us ?</h3>
                        <p>Movie Night is one if biggest Websites to reccomend you the Trending Movies, Quibusdam voluptate provident voluptatibus eligendi aliquam blanditiis?</p>
                        <p>To Know more About us and be one of our family , following the trending amovies , you can click here </p>
                        <button className='btn'><Link to="about" className='btnlink'>About</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </div>        
    </div>
</>
    )
}

