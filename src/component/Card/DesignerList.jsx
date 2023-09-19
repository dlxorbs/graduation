import React from "react";
import Designer from "./Designer";
import styles from "./card.module.css";
import thumb from "../Img/symbol1_1.png";
import { useNavigate } from "react-router-dom";

// 카드리스트 페이지
// 카드에 맵함수 돌림.
export default function DesignerList(props) {
  const nav = useNavigate();

  const list = props.data.map((item) => {
    return (
      <Designer
        key={item.id}
        thumbnail={item.img || thumb}
        title={item.name || "제목없음"}
        // major={item.major == "1" ? "산업디자인공학" : "미디어디자인공학"}
        onClick={function () {
          console.log(item.id + "이동");
          nav("/designers/" + item.id);
        }}
      />
    );
  });

  return <div className={styles.cardList}>{list}</div>;
}