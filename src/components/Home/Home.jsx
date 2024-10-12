


import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieSlider from '../MovieSlider/MoviesSlider'
import "./Home.css"
import SeriesSlider from '../SeriesSlider/SeriesSlider'
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
                <h2>Generies</h2>
                <ul>
                    <li><a href="#top">Top</a></li>
                    <li><a href="#popular">Popular</a></li>
                    <li><a href="#series">TV series</a></li>
                </ul>
                </div>
                <div className="col-10">
                <h2 id='top' className='mb-5'>Top Movies</h2>
                <div className="row mb-5">
                    {top.map((m)=>
                    <div className="card col-md-3" key={m.id}>
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
                <div className="row mt-5">
                    <h2 id='popular'>Popular</h2>
                    {movies.map((m)=>
                    <div className="card col-md-3" key={m.id}>
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
                <h2 className='mt-5' id='series'>TV series</h2>
                <SeriesSlider/>
            </div>
        </div>
    </div>        
    </div>
</>
    )
}

