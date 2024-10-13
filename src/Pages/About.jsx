import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import Aboutcontent from '../Components/AboutContent/Aboutcontent'
import AboutLaseSec from '../Components/AboutLastSec/AboutLaseSec'

export default function About() {
  return (
    <div>
      <AboutHeader/>
      <Aboutcontent/>
       <AboutLaseSec/> 
    </div>
  )
}
