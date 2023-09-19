import React from "react";
import "./Guestcard.css";
import CardimgBlue from "../Img/CardBlue.svg";
import CardimgWhite from "../Img/CardWhite.svg";
export default function GuestCard(props) {
  return (
    <div className={`CardContainer ${props.className}`}>
      <div className="guestcard">
        <div className={`to`}>
          <span
            style={{
              "--color": props.type ? "#3775BB" : "#ffffff" || "#ffffff",
            }}
          >
            TO. {props.to}
          </span>
        </div>

        <span
          className="detail"
          style={{
            "--color": props.type ? "#3775BB" : "#ffffff" || "#ffffff",
          }}
        >
          {props.detail}
        </span>
        <div className={`from`}>
          <span
            style={{
              "--color": props.type ? "#3775BB" : "#ffffff" || "#ffffff",
              // border: "1px solid #66666640",
            }}
          >
            FROM.{props.from}
          </span>
        </div>
      </div>
      <img
        src={props.type ? CardimgWhite : CardimgBlue || CardimgBlue}
        alt=""
      />
    </div>
  );
}
