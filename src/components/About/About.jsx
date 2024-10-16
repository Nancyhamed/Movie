import React from "react";
import AboutHeader from "../AboutHeader/AboutHeader";
// import Aboutcontent from "../AboutContent/Aboutcontent";
import Aboutcontent from '../AboutContent/Aboutcontent';
import AboutLaseSec from "../AboutLastSec/AboutLaseSec";

export default function About() {
  return (
    <div>
      <AboutHeader />
      <Aboutcontent />
      <AboutLaseSec />
    </div>
  );
}
