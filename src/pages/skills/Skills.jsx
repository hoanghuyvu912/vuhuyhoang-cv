import React from "react";
import { motion as m } from "framer-motion";

export default function Skills() {
  return (
    <div id="skills">
      <div className="container">
        <div
          id="skills-1"
          className="row"
          style={{
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          <m.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            exit={{ opacity: 1 }}
            className="col-6 left"
            style={{
              textAlign: "right",
              paddingLeft: "10%",
            }}
          >
            <div id="strength">
              <h1
                style={{
                  color: "rgb(221, 51, 51)",
                  fontWeight: "bolder",
                  fontSize: "50px",
                }}
              >
                My strength
              </h1>
              <ul>
                <h4>Efficient at all 4 English skills.</h4>
                <h4>Logical thinking, ambitious mindset.</h4>
                <h4>
                  Sociable. Got a technical topic needs discussing? I'm in.
                </h4>
                <h4>Eager to learn, willing to earn.</h4>
              </ul>
            </div>
          </m.div>
          <div className="col-6 right">
            <m.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              exit={{ opacity: 1 }}
              src={require("../../assets/Shutterstock263031548_VectorGoddess.jpg.png")}
              alt=""
            />
          </div>
        </div>
        <div
          id="skills-2"
          className="row"
          style={{
            marginBottom: "5%",
          }}
        >
          <div
            className="col-6 left"
            style={{ display: "flex", justifyContent: "right" }}
          >
            <m.img
              src={require("../../assets/handshake.png")}
              alt="handshake"
              className="img-fluid"
              width="50%"
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{ duration: 1 }}
              // transition={{
              //   type: "spring",
              //   stiffness: 260,
              //   damping: 20,
              // }}
            />
          </div>
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
                What I can offer
              </h1>
              <ul style={{ padding: 0 }}>
                <h4>Patience and focus.</h4>
                <h4>Solo and team work.</h4>
                <h4>
                  Got a hard task needs solving? I can do it solo or work out a
                  way with others.
                </h4>
                <h4>Whatever needed to finish the task at hand.</h4>
              </ul>
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
}
