import React from "react";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <m.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxHeight: "100vh",
        }}
      >
        <h1
          style={{ fontWeight: "bolder", padding: "1rem ", fontSize: "50px" }}
        >
          Welcome to my{" "}
          <span style={{ color: "rgb(221, 51, 51)" }}>portfolio</span>
        </h1>
        <div>
          <img
            src={require("../../../src/assets/20901374_1524369140962185_6449363542250159267_o.jpg")}
            alt="self-portrait"
            className="img-fluid"
            style={{ borderRadius: "50%", height: "50%" }}
          />
        </div>
        {/* <div
          style={{ width: "300px", height: "150px", background: "Red" }}
        ></div> */}
      </div>
    </m.div>
  );
}
