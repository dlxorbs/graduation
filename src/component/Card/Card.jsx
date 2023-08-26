import React from "react";
import CardThumb from "./CardThumb";
import NameTag from "./NameTag";
import Button from "../Button/Button";
import styles from "./card.module.css";

// 카드 페이지 카드에 각각 썸네일과 버튼이 있거나로 제작했었음

export default function Card(props) {
  return (
    <div className={styles.card} style={props.style}>
      <CardThumb
        type={props.type}
        thumbnail={props.thumbnail}
        major={props.major}
        title={props.title}
        studentinfo={props.studentinfo}
        onClick={props.onClick}
      />
    </div>
  );
}
