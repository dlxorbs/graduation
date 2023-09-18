import React from "react";
import "./Section.css";

export default function MainImg(props) {
  return (
    <div className="mainImage">
      <div className="imagecon">
        <div className="black"></div>
        <img className="smimg" src={props.src} alt="" />
      </div>
    </div>
  );
}
