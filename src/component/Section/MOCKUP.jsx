import React from "react";
import styles from "./section.module.css";
import Section from "./Title";


function Mockup(props) {
  return (
    <div className={`${styles.Section} ${styles.moc}`}>
      <Section text={"MOCKUP"}></Section>
      <div className={styles.grid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Mockup;

//https://fontawesome.com/icons/bars?f=classic&s=solid
