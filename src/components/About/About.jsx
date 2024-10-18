import React from "react";
import AboutHeader from "../AboutHeader/AboutHeader";
// import AboutContent from "../AboutContent/Aboutcontent";
import AboutContent from '../AboutContent/AboutContent';
import AboutLaseSec from "../AboutLastSec/AboutLaseSec";

export default function About() {
  return (
    <div>
      <AboutHeader />
      <AboutContent />
      <AboutLaseSec />
    </div>
  );
}
