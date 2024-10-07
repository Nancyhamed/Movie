import React from "react";
import './index.css';
import { deleteFromWatchlist } from "../../redux/Slices/watchlistslice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
export default function Watchlist() {

    const watchlist = useSelector((state) => state.watchlist);
    const dispatch = useDispatch();
    console.log(watchlist);

    const handleDelete = (movie) => {
        dispatch(deleteFromWatchlist(movie));
    }

    const [filter, setFilter] = useState('all');
    const filteredWatchlist = watchlist.filter(item => {
        console.log(item.media_type);
        if (filter === 'all') {
            return true;
        } else { return item.media_type === filter }
    });

    if (!Array.isArray(watchlist) || watchlist.length === 0) {
        return <h2 className="text-center mt-5">Your watchlist is empty</h2>;
    }


    return (
        <div className="container mt-5">
            <h1 className='text-center mb-4 title'>Your WatchList</h1><hr className="mb-5 " />
            <div className="mb-3">
                <button className={`btn ${filter === 'all' ? 'btn-danger' : 'btn-outline-danger'} me-2`} onClick={() => { setFilter('all') }}>All</button>
                <button className={`btn ${filter === 'movie' ? 'btn-danger' : 'btn-outline-danger'} me-2`} onClick={() => setFilter('movie')}>Movies</button>
                <button className={`btn ${filter === 'tv' ? 'btn-danger' : 'btn-outline-danger'} `} onClick={() => setFilter('tv')}>Tv</button>
            </div>

            {filteredWatchlist.map((item) => (

                <div className="card  border-0 rounded-2 mb-3  shadow" key={item._id} style={{ outline: '0' }}>
                    <div className="row g-0 card_bg  ">
                        <div className="col-md-2">
                            <img
                                src={item.poster_path}
                                alt={item.title}
                                className="img-fluid rounded-start imag"
                                style={{

                                    height: '220px', width: '160px', objectFit: 'cover'
                                }} />
                        </div>

                        <div className="col-md-10">
                            <div className="card-body d-flex flex-column h-200">
                                <div className="con">
                                    <h5 className="card-title fw-bold">{item.title}</h5>
                                    <button className="deletebutton"
                                        onClick={() => handleDelete(item)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.4" stroke="currentColor" className="del">

                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </button>
                                </div>
                                <p style={{ color: ' hsl(201, 51%, 45%)', fontSize: '14px', fontWeight: 'bold' }}>{item.release_date
                                }</p>




                                <span className="tv" >{item.media_type === 'movie' ? 'Movie' : 'TV Series'}</span>
                                <p className="card-text mt-3" style={{ fontSize: '14px' }}>
                                    {item.overview}
                                </p>
                            </div>
                            <div>


                            </div>
                        </div>

                    </div>

                </div>

            ))}
        </div>

    );
}

