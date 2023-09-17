import React from "react";
import "./Section.css";
export default function Left(props) {
  return (
    <div className="LeftContianer">
      <div className={`textWrapper ${props.type || ""}`}>
        <h4
          style={{
            "--width": props.width + "px",
          }}
        >
          {props.head || "dlxorbs"}
        </h4>
        <p className="text">{props.text}</p>
      </div>

      <img className={`image ${props.img || ""}`} src={props.src} alt="" />
    </div>
  );
}