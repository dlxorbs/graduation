import React from "react";
import Card from "./Card";
import styles from "./card.module.css";
import thumb from "../Img/symbol1_1.png";
import { useNavigate } from "react-router-dom";

// 카드리스트 페이지
//  카드에 맵함수 돌림.
export default function CardList(props) {
  const nav = useNavigate();

  const list = props.data.map((item) => {
    return (
      <Card
        key={item.id}
        thumbnail={item.data.img || thumb}
        title={item.main?.works || "제목없음"}
        type={props.data.type}
        major={item.data.major == "1" ? "산업디자인공학" : "미디어디자인공학"}
        studentinfo={item.data.studentinfo}
        // onClick={() => handleCardClick(item)}
      />
    );
  });

  return <div className={styles.cardList}>{list}</div>;
}
