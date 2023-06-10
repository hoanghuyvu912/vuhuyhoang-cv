import React from "react";

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
            <div>
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
            </div>
          </div>
          <div className="col-6 right">
            <img
              id="img-1"
              src={require("../../assets/594px-HCMUT_official_logo.png")}
              alt="wrench"
              className="img-fluid"
              style={{ width: "170px", height: "170px" }}
            />
          </div>
        </div>
        <div
          id="journey-2"
          className="row"
          style={{
            marginBottom: "5%",
          }}
        >
          <div
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
          </div>
          <div
            className="col-6 right"
            style={{
              textAlign: "left",
              paddingRight: "10%",
            }}
          >
            <div>
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
            </div>
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
            <div>
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
            </div>
          </div>
          <div className="col-6 right">
            <img
              id="img-3"
              src={require("../../assets/Axon_Active_logo_min.jpg")}
              alt="wrench"
              className="img-fluid"
              style={{ width: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
