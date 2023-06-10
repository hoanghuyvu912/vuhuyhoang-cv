import React from "react";
import "./Contact.scss";
import {
  IconMailFilled,
  IconMapPin,
  IconPhoneFilled,
} from "@tabler/icons-react";

export default function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row" style={{ paddingTop: "15%" }}>
          <div
            className="col-6"
            style={{ display: "flex", justifyContent: "right" }}
          >
            <img
              id="phone"
              src={require("../../assets/phone.png")}
              alt=""
              className="img-fluid"
              style={{ width: "50%" }}
            />
          </div>
          <div className="col-6">
            <h1>You can reach me at:</h1>
            <ul style={{ padding: 0 }}>
              <li style={{ marginBottom: "1rem" }}>
                <IconPhoneFilled style={{ marginRight: "1rem" }} />
                <a href="tel:+84902284465">0902284465</a>
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <IconMailFilled style={{ marginRight: "1rem" }} />
                <a href="mailto:huyhoangvu091295@gmail.com">
                  huyhoangvu091295@gmail.com"
                </a>
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <IconMapPin style={{ marginRight: "1rem" }} />
                <a href="tel:+84902284465">0902284465</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
