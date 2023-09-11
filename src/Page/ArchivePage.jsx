import React, { useState, useEffect } from "react";
import ChipFilter from "../component/Input/ChipFilter";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import $ from "jquery";
import CardList from "../component/Card/CardList";

export default function ArchivePage() {
  const [data, setData] = useState([]); // 기본 데이터 지정
  const [filtered, setFiltered] = useState([]); // data에서 기반으로 필터링한 데이터 저장
  const [selectedCard, setSelectedCard] = useState(null);
  const [post, setPost] = useState({
    id: "",
    title: "",
    studentinfo: "",
    grade: "",
    year: "",
    type: "",
    imgscr: "",
    major: "",
    content: "",
    comments: [],
  });
  // 타입 0:과제경진대회 1:포트 2:로고 ...

  // firebase 데이터 가져오기
  useEffect(() => {
    let Datas = [];
    db.collection("post")
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          Datas.push(doc.data());
        });
        setData(Datas);
        setFiltered(Datas);
      });
    console.log(data);
  }, []);
  useEffect(() => {
    console.log(data);
  });

  return (
    <div className={styles.page_Wrapper}>
      <div className={styles.InnerContainer}>
        <div className={styles.CardCon}>
          {filtered.length > 0 ? ( // filtered에 데이터가 있는지 확인
            <CardList data={filtered} type={"Archive"} />
          ) : (
            <div className={styles.nothing}> 내용이 없습니다. </div>
          )}
        </div>
      </div>
    </div>
  );
}
