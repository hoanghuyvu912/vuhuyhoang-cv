import React from "react";

export default function AboutMe() {
  return (
    <div id="about-me" style={{ height: "100vh" }}>
      <div className="container" style={{ height: "100%" }}>
        <div className="row" style={{ height: "100%" }}>
          <div id="left" className="col-6" style={{ height: "100%" }}>
            <div id="info">
              <h1>VU HUY HOANG</h1>
              <h3>Fresher Web Developer</h3>
            </div>

            <p id="introduction">
              Graduated from Ho Chi Minh University of Technology, I had work as
              a Heat and Thermal Engineer for 2 years. Although being grateful
              for my job, I found myself yearning for something else, something
              beyond all those construction work. And that's when I decided to
              pursuit the Software Developer career.
            </p>
          </div>
          <div id="right" className="col-6" style={{ height: "100%" }}>
            <div id="demonstrate">
              <img
                id="img-1"
                src={require("../assets/wrench-screwdriver.png")}
                alt="wrench"
                className="img-fluid"
                style={{ width: "250px", height: "170px" }}
              />

              <img
                id="img-2"
                src={require("../assets/protective-helmet.png")}
                alt="wrench"
                className="img-fluid"
                style={{ width: "250px", height: "250px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
