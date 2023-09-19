import React, { useState, useEffect } from "react";
import ChipFilter from "../component/Input/ChipFilter";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import $ from "jquery";
import Button from "../component/Button/Button";
import "./Guest.css";
import GuestCardList from "../component/Card/GuestCardList";
import GuestWriteCard from "../component/Card/GusetWriteCard";
export default function GuestBookPage() {
  const [data, setData] = useState([]); // 기본 데이터 지정
  const [filtered, setFiltered] = useState([]); // data에서 기반으로 필터링한 데이터 저장
  const [selectedCard, setSelectedCard] = useState(null);

  const [to, setTo] = useState("");

  const [from, setFrom] = useState("");

  const [detail, setDetail] = useState("");

  const [checked, setChecked] = useState(false);

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
    const timestamp = new Date().getTime().toString();
    const guest = {
      id: timestamp,

      to: to,

      detail: detail,

      from: from,

      type: checked,
    };

    db.collection("GusetBook")
      .doc(timestamp)
      .set(guest)
      .then(() => {
        console.log("작성됨");
      });
  };

  return (
    <div className={styles.page_Wrapper}>
      <div className={styles.GuestContainer}>
        <div className={styles.writeContainer}>
          <GuestWriteCard
            type={"write"}
            src={checked}
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
          ></GuestWriteCard>

          <div className={styles.btnContainer}>
            <input
              type="checkbox"
              id="toggle"
              hidden
              checked={checked}
              onClick={(e) => {
                setChecked(!checked);
              }}
            />

            <label for="toggle" class="toggleSwitch">
              <span class="toggleButton"></span>
            </label>

            <Button
              onClick={(e) => {
                done();
              }}
            ></Button>
          </div>
        </div>
        <div className={styles.CardCon}>
          <GuestCardList data={data}></GuestCardList>
        </div>
      </div>
    </div>
  );
}
