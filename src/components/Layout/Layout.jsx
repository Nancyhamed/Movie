
import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import SearchResult from '../SearchResult/SearchResult';
    export default function Layout() {
        const  [results,setResults]=useState([]);
    return (
        <>
        <Nav setResults={setResults}/>
        <SearchResult result={results}/>
        <Outlet></Outlet>
        <Footer/>
        </>
    )
    }


