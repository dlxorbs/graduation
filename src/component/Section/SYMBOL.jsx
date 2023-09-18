import React from "react";
import styles from "./section.module.css";
import Section from "./Title";
import guide from "../Img/guide.svg";
import element from "../Img/element.svg";
import _default from "../Img/default.svg";

function Symbol(props) {
  return (
    <div className={`${styles.Section} ${styles.sym}`}>
      <Section text={"SYMBOL"}></Section>
      <h5 className={styles.sectionTitle}>
        물방울들이 모여서 우리만의 흐름을 만들어내는 동시에 무엇이든 형상화 할
        수 있는 ‘OO’을 표현합니다.
      </h5>
      <div className={styles.symbolArea}>
        <div className={styles.guide}>
          <img src={guide} alt="" />
          <span>guide</span>
        </div>
        <div className={styles.eledef}>
          <div className={styles.element}>
            <img src={element} alt="" />
            <span>element</span>
          </div>
          <div className={styles._default}>
            <img src={_default} alt="" />
            <span>default</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Symbol;

//https://fontawesome.com/icons/bars?f=classic&s=solid
