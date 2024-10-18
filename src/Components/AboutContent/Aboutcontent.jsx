import React from "react";
import "./AboutContent.css";
import about2 from "../../Assets/about2.jpg";
export default function AboutContent() {
  return (
    <div>
      <div className="container ">
        <div className="row g-1">
          <div className="col-md-7 text-start px-5">
            <div className="about-content">
              <h2>About Us</h2>
              <h5>Welcome To our Movies And Tv Series Website</h5>
              <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                eos ut veniam minima, fugiat ullam culpa laudantium, illo
                veritatis illum provident beatae eum possimus recusandae
                voluptas assumenda laborum labore quo!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
                nisi eius eaque corrupti repudiandae quis consequatur
                praesentium porro suscipit veritatis! Distinctio cum unde ab
                rerum molestiae possimus atque, cumque qui impedit numquam,
                ipsum illum optio, dignissimos enim hic aliquid commodi
                laboriosam consectetur ea eligendi quibusdam! Numquam dolorum
                quam explicabo vero!
              </p>
            </div>
          </div>

          <div className="col-md-5">
            <div className="img-container">
              <img src={about2} alt="about_us" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
