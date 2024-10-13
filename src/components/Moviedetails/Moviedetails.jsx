import React from 'react'
import { useParams } from 'react-router-dom'

export default function Moviedetails() {
    let params=useParams()
    let movid=params.movieid;
  return (
    <h2>{movid}</h2>
  )
}
