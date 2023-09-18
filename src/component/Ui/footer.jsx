import React from "react";
import styles from "./Ui.module.css";
import designLogo from "../Img/designLogo.svg";

function Footer(props) {
  return (
    <div className={styles.Footer}>
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
      <div className={styles.MainBottom2}>
        <div>
          경기도 시흥시 산기대학로 237 (정왕동) 한국공학대학교 <br />
          디자인공학부 A동 407호 / 031-8041-0660
        </div>
        <div>
          제18회 졸업 전시 [유연: 다채로운 흐름으로 물결치다]
          <br />
          @tukd.show
        </div>
        <div>
          ALL RIGHTS RESERVED
          <br />
          ⓒ한국공학대학교 디자인공학부{" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;

//https://fontawesome.com/icons/bars?f=classic&s=solid
