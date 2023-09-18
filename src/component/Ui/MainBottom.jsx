import React from "react";
import styles from "./Ui.module.css";
import designLogo from "../Img/designLogo.svg";

function MainBottom(props) {
  return (
    <div
      className={styles.MainBottomLine}
      style={{ transform: `translate(0, ${props.move}%)` }}
    >
      <div className={styles.MainBottom}>
        <div className={styles.left}>
          <img src={designLogo} alt="BigCo Inc. logo" />
          <div>
            <p>
              TECH UNIVERSITY OF KOREA
              <br />
              DESIGN ENGINEERING
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <p>18th GRADUATION EXHIBITION</p>
        </div>
      </div>
    </div>
  );
}

export default MainBottom;

//https://fontawesome.com/icons/bars?f=classic&s=solid
