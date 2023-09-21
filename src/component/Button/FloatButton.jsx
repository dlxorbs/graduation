import React from "react";
import styles from "./FloatButton.module.css";

function FloatButton(props) {
  console.log(props);
  return (
    <button
      className={`${styles.floatButton} ${props.className}`}
      onClick={props.onClick}
    >
      <span className="material-symbols-rounded">{props.icon}</span>
      <div className={styles.floatani}></div>
    </button>
  );
}

export default FloatButton;
