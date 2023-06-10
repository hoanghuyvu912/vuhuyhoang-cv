import React from "react";
import { motion as m } from "framer-motion";

export default function Journey() {
  return (
    <div id="journey">
      <div className="container">
        <div
          id="journey-1"
          className="row"
          style={{
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          <div
            className="col-6 left"
            style={{
              textAlign: "right",
              paddingLeft: "10%",
            }}
          >
            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              exit={{ opacity: 1 }}
            >
              <h1
                style={{
                  color: "rgb(221, 51, 51)",
                  fontWeight: "bolder",
                  fontSize: "50px",
                }}
              >
                HCM University of Technology
              </h1>
              <h3>Heat and Thermal Engineering</h3>
            </m.div>
          </div>
          <m.div
            className="col-6 right"
            initial={{ y: "-50%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
          >
            <img
              id="img-1"
              src={require("../../assets/594px-HCMUT_official_logo.png")}
              alt="wrench"
              className="img-fluid"
              style={{ width: "170px", height: "170px" }}
            />
          </m.div>
        </div>
        <div
          id="journey-2"
          className="row"
          style={{
            marginBottom: "5%",
          }}
        >
          <m.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="col-6 left"
            style={{ display: "flex", justifyContent: "right" }}
          >
            <img
              id="img-2"
              src={require("../../assets/1664870062949-logo.hs.png")}
              alt="wrench"
              className="img-fluid"
              style={{ width: "70%", marginLeft: "auto" }}
            />
          </m.div>
          <div
            className="col-6 right"
            style={{
              textAlign: "left",
              paddingRight: "10%",
            }}
          >
            <m.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              exit={{ opacity: 1 }}
            >
              <h1
                style={{
                  color: "rgb(221, 51, 51)",
                  fontWeight: "bolder",
                  fontSize: "50px",
                }}
              >
                Panasonic Sales Vietnam
              </h1>
              <h3>Project Service Engineer</h3>
            </m.div>
          </div>
        </div>
        <div
          id="journey-3"
          className="row"
          style={{
            marginBottom: "5%",
          }}
        >
          <div
            className="col-6 left"
            style={{
              textAlign: "right",
              paddingLeft: "10%",
            }}
          >
            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              exit={{ opacity: 1 }}
            >
              <h1
                style={{
                  color: "rgb(221, 51, 51)",
                  fontWeight: "bolder",
                  fontSize: "50px",
                }}
              >
                Axon Active
              </h1>
              <h3>Non-it Trainee</h3>
            </m.div>
          </div>
          <m.div
            className="col-6 right"
            initial={{ y: "50%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
          >
            <img
              id="img-3"
              src={require("../../assets/Axon_Active_logo_min.jpg")}
              alt="wrench"
              className="img-fluid"
              style={{ width: "50%" }}
            />
          </m.div>
        </div>
      </div>
    </div>
  );
}
