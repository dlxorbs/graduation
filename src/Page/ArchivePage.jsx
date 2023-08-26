import React, { useState, useEffect } from "react";
import ChipFilter from "../component/Input/ChipFilter";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import $ from "jquery";
import CardList from "../component/Card/CardList";

export default function ArchivePage() {
  const [data, setData] = useState([]); // 기본 데이터 지정
  const [datalist1, setDatalist1] = useState([]); // 첫 번째 ChipFilter에서 받아온 데이터 저장
  const [datalist2, setDatalist2] = useState([]); // 두 번째 ChipFilter에서 받아온 데이터 저장
  const [datalist3, setDatalist3] = useState([]); // 세 번째 ChipFilter에서 받아온 데이터 저장
  const [dataLNB, setDatalistLNB] = useState([]); // LNB 받아온 데이터 저장
  const [lnbfilter, setLnbfilter] = useState(20221);
  const [filtered, setFiltered] = useState([]); // data에서 기반으로 필터링한 데이터 저장
  const [majordata, setMajordata] = useState("");
  const [comments, setComments] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [comment, setComment] = useState("");
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

  // const year = [2018, 2019, 2020, 2021, 2022];
  const major = ["미디어디자인공학", "산업디자인공학"];
  const grade = ["1", "2", "3", "4"];

  // firebase 데이터 가져오기
  useEffect(() => {
    let Datas = [];
    db.collection("Archive")
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

  return (
    <div className={styles.page_Wrapper}>
      <h3>콘테스트 아카이빙</h3>

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
