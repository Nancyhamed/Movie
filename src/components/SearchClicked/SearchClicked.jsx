import React from 'react'
import './searchClicked.css'
import { Link } from 'react-router-dom'

export default function SearchClicked({result}) {
  return (
    <Link to={`/movies/${result._id}`} className='searchClicked'>
        <div >{result.title}</div>
    </Link>
  )
}
