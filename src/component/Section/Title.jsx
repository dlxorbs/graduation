import React from "react";
import styles from "./section.module.css";

export default function Section(props) {
  return (
    <div>
      <div className={styles.Section_title}>
        <span>{props.text}</span>
      </div>
    </div>
  );
}

//https://fontawesome.com/icons/bars?f=classic&s=solid
