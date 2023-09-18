import React from "react";
import styles from "./section.module.css";
import Section from "./Title";

import Various from "../Img/Various.svg";
import Flow from "../Img/Flow.svg";
import Wave from "../Img/Wave.svg";

import Various2 from "../Img/Various2.png";
import Flow2 from "../Img/Flow2.png";
import Wave2 from "../Img/Wave2.png";

function Variation(props) {
  return (
    <div className={`${styles.Section} ${styles.var}`}>
      <Section text={"VARIATION"}></Section>
      <h5 className={styles.sectionTitle}>
        유연이 가지고 있는 의미를 바탕으로 3가지 키워드를 도출합니다.
      </h5>
      <div className={styles.grid}>
        <div></div>
        <div>
          <h4>Various</h4> <span>다채로운</span>
        </div>
        <div>
          <h4>Flow</h4> <span>흐름으로</span>
        </div>
        <div>
          <h4>Wave</h4> <span>물결치다</span>
        </div>
        <div className={styles.leftTitle}>
          <span>2D 버전</span>
        </div>
        <div>
          <img src={Various} alt="" />
        </div>
        <div>
          <img src={Flow} alt="" />
        </div>
        <div>
          <img src={Wave} alt="" />
        </div>
        <div className={styles.leftTitle}>
          <span>3D 버전</span>
        </div>
        <div>
          <img src={Various2} alt="" />
        </div>
        <div>
          <img src={Flow2} alt="" />
        </div>
        <div>
          <img src={Wave2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Variation;

//https://fontawesome.com/icons/bars?f=classic&s=solid
