import React from "react";
import "./Section.css";
export default function Center(props) {
  return (
    <div className="CenterContainer">
      <img className="image center" src={props.src} alt="" />
      <div className="textWrapper center">
        <h4>{props.head || "dlxorbs"}</h4>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
}
