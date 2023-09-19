import React, { useState } from "react";
import "./Button.css";

function Button(props) {
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      style={{
        "--margin": props.margin,
        "--top": y + "px",
        "--left": x + "px",
      }}
      onMouseDown={(e) => {
        // console.log(e.nativeEvent.offsetX);
        setX(e.nativeEvent.offsetX);
        setY(e.nativeEvent.offsetY);
      }}
    >
      <div className="floatani"></div>
      <span>{props.title || "Button"}</span>
    </button>
  );
}

export default Button;
