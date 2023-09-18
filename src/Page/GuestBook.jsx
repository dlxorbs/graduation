import React, { useState, useEffect } from "react";
import ChipFilter from "../component/Input/ChipFilter";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import $ from "jquery";
import CardList from "../component/Card/CardList";
import logo from "../component/Img/Union.svg";
import "./Guest.css";
import GuestCard from "../component/Card/GusetCard";
export default function GuestBookPage() {
  const [data, setData] = useState([]); // 기본 데이터 지정
  const [filtered, setFiltered] = useState([]); // data에서 기반으로 필터링한 데이터 저장
  const [selectedCard, setSelectedCard] = useState(null);

  const [to, setTo] = useState("");

  const [from, setFrom] = useState("");

  const [detail, setDetail] = useState("");

  // firebase 데이터 가져오기
  useEffect(() => {
    let Datas = [];
    db.collection("GusetBook")
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          // 문서 ID를 포함하여 데이터를 가져옴
          const postData = {
            id: doc.id,
            ...doc.data(),
          };
          console.log(doc.data());
          Datas.push(postData);
        });
        setData(Datas);
        setFiltered(Datas);
      });
  }, []);

  const done = async function () {
    const guest = {
      to: to,

      detail: detail,

      from: from,
    };

    db.collection("GusetBook").set(guest);
  };

  return (
    <div className={styles.page_Wrapper}>
      <div className={styles.GuestContainer}>
        <div className={styles.writeContainer}>
          <GuestCard
            type={"write"}
            Tovalue={to}
            onTochange={(e) => {
              setTo(e.target.value);
            }}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
            value={detail}
            onFromchange={(e) => {
              setFrom(e.target.value);
              console.log(from);
            }}
            Fromvalue={from}
          ></GuestCard>
        
        </div>
        <div className={styles.CardCon}></div>
      </div>
    </div>
  );
}
