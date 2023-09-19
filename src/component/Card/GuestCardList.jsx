import React from "react";
import GuestCard from "./GuestCard";
import styles from "./card.module.css";
import thumb from "../Img/symbol1_1.png";
import { useNavigate } from "react-router-dom";

// 카드리스트 페이지
// 카드에 맵함수 돌림.
export default function GuestCardList(props) {
  const nav = useNavigate();

  const list = props.data.map((item) => {
    return (
      <GuestCard
        className={"read"}
        key={item.id}
        type={item.type}
        to={item.to}
        from={item.from}
        detail={props.detail}
      />
    );
  });

  return <div className={styles.cardList}>{list}</div>;
}
