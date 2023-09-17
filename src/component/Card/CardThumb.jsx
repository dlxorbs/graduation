import React from "react";
import styles from "./card.module.css";

export default function CardThumb(props) {
  return (
    <div className={styles.thumbnailContainer} onClick={props.onClick}>
      <div
        className={styles.thumbnail}
        style={{ "--thumbnail": "url(" + props.thumbnail + ")" }}
      ></div>

      {/* 호버시 나타나는 정보들 */}
      <div className={styles.bottomOverlay}>
        <span className={styles.work}>{props.title || "title"}</span>
        <span>{props.studentinfo}</span>
      </div>
    </div>
  );
}
