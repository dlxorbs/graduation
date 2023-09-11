import React from "react";
import "./Section.css";
export default function Left(props) {
  return (
    <div className="LeftContianer">
      <div className="text">
        <h4
          style={{
            "--width": props.width + "px",
          }}
        >
          {props.head || "dlxorbs"}
        </h4>
        <p>{props.text}</p>
      </div>

      <img className="image" src={props.src} alt="" />
    </div>
  );
}
