import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <h2 className="footertxt">Produced by</h2>
          <h3 className="footertxt2">
            <span>TECNO</span>GROUP
          </h3>
          <div className="icons">
            <div className="iconchild">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
