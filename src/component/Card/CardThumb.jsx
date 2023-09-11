import React from "react";
import styles from "./card.module.css";

export default function CardThumb(props) {
  const studentinfo = props.studentinfo.map((item) => {
    return <span className={styles.studentinfo}>{item || "학생정보"}</span>;
  });

  return (
    <div className={styles.thumbnailContainer} onClick={props.onClick}>
      <div
        className={styles.thumbnail}
        style={{ "--thumbnail": "url(" + props.thumbnail + ")" }}
      ></div>

      {/* 호버시 나타나는 정보들 */}
      <div className={styles.bottomOverlay}>
        <span className={styles.work}>{props.title || "title"}</span>
        {studentinfo}
        <span>{props.major}</span>
      </div>
    </div>
  );
}
