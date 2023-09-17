import React from "react";
import Card from "./Card";
import styles from "./card.module.css";
import thumb from "../Img/symbol1_1.png";
import { useNavigate } from "react-router-dom";

// 카드리스트 페이지
// 카드에 맵함수 돌림.
export default function CardList(props) {
  const nav = useNavigate();

  const list = props.data.map((item) => {
    // data에서 학생 정보를 추출하기 위한 로직
    let studentinfo = [];

    if (
      item.id &&
      item.id.endsWith("_t") &&
      Array.isArray(item.data.teamMembers)
    ) {
      // item이 팀멤버인 경우, studentname만 추출
      studentinfo = item.data.teamMembers.map(
        (member) => member.studentname + " "
      );
    } else if (item.data && item.data.studentinfo) {
      // 그 외의 경우는 item.data.studentinfo를 사용
      studentinfo = item.data.studentinfo;
    }

    return (
      <Card
        key={item.id}
        thumbnail={item.data.img || thumb}
        title={item.main?.works || "제목없음"}
        type={props.data.type}
        // major={item.data.major == "1" ? "산업디자인공학" : "미디어디자인공학"}
        studentinfo={studentinfo}
        onClick={function () {
          console.log(item.id + "이동");
          nav("/post/" + item.id);
        }}
      />
    );
  });

  return <div className={styles.cardList}>{list}</div>;
}
