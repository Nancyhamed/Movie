import React from 'react'
import "./SearchResult.css"
import SearchClicked from '../SearchClicked/SearchClicked'
export default function SearchResult({result}) {
  return (
    <div className='list'>
        {
            result.map((res)=>{
                return <SearchClicked result={res}/>
            })
        }
    </div>
  )
}
