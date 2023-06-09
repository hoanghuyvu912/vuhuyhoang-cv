import React from "react";
import "./AboutMe.scss";
import { motion as m } from "framer-motion";

export default function AboutMe() {
  return (
    <m.div
      id="about-me"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-6 left"
            style={{
              textAlign: "right",
              paddingTop: "5%",
              paddingLeft: "10%",
            }}
          >
            <div id="info">
              <h1
                style={{
                  color: "rgb(221, 51, 51)",
                  fontWeight: "bolder",
                  fontSize: "50px",
                }}
              >
                VU HUY HOANG
              </h1>
              <h3>Fresher Web Developer</h3>
            </div>

            <p id="introduction">
              Graduated from{" "}
              <strong
                style={{
                  color: "rgb(221, 51, 51)",
                  fontWeight: "bolder",
                }}
              >
                Ho Chi Minh University of Technology
              </strong>
              , I had work as a Heat and Thermal Engineer for 2 years. Although
              being grateful for my job, I found myself yearning for something
              else, something beyond all those construction work. And that's
              when I decided to pursue the{" "}
              <strong
                style={{
                  color: "rgb(221, 51, 51)",
                  fontWeight: "bolder",
                }}
              >
                Software Developer career
              </strong>
              .
            </p>
          </div>
          <div className="col-6 right">
            <div id="demonstrate" style={{ marginTop: "30%" }}>
              <img
                id="img-1"
                src={require("../../assets/wrench-screwdriver.png")}
                alt="wrench"
                className="img-fluid"
                style={{ width: "250px", height: "170px" }}
              />

              <img
                id="img-2"
                src={require("../../assets/protective-helmet.png")}
                alt="wrench"
                className="img-fluid"
                style={{ width: "250px", height: "250px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}
