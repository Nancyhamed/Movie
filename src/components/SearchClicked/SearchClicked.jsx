import React from 'react'
import './searchClicked.css'
export default function SearchClicked({result}) {
  return (
    <>
        <div className='searchClicked' onClick={(e)=>alert(`you clicked on ${result.title}`)}>{result.title}</div>
    </>
  )
}
