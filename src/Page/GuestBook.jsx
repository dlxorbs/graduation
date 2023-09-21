import React, { useState, useEffect } from "react";
import ChipFilter from "../component/Input/ChipFilter";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import $ from "jquery";
import Button from "../component/Button/Button";
import "./Guest.css";
import GuestCardList from "../component/Card/GuestCardList";
import GuestWriteCard from "../component/Card/GusetWriteCard";
import Search from "../component/Ui/Search";
import FloatButton from "../component/Button/FloatButton";
export default function GuestBookPage() {
  const [data, setData] = useState([]); // 기본 데이터 지정
  const [filtered, setFiltered] = useState([]); // data에서 기반으로 필터링한 데이터 저장
  const [selectedCard, setSelectedCard] = useState(null);

  const [to, setTo] = useState("");

  const [from, setFrom] = useState("");

  const [detail, setDetail] = useState("");

  const [checked, setChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    // Firebase Firestore에서 "GuestBook" 컬렉션에 대한 참조를 만듭니다.
    const guestBookRef = db.collection("GuestBook");

    const unsubscribe = guestBookRef.onSnapshot((querySnapshot) => {
      const updatedData = [];
      querySnapshot.forEach((doc) => {
        // 문서 ID를 포함하여 데이터를 가져옴
        const postData = {
          id: doc.id,
          ...doc.data(),
        };
        updatedData.unshift(postData); // 데이터를 역순으로 추가합니다.
      });

      setData(updatedData); // 업데이트된 데이터를 역순으로 상태에 반영합니다.
      setFiltered(updatedData);
    });

    // 컴포넌트가 언마운트되면 리스너를 정리합니다.
    return () => {
      unsubscribe(); // 리스너 정리
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.
  const done = async function () {
    const timestamp = new Date().getTime().toString();
    const guest = {
      id: timestamp,

      to: to,

      detail: detail,

      from: from,

      type: checked,
    };

    if (to == "" || from == "" || detail == "") {
      alert("글을 모두 입력해 주세요.");
    } else {
      db.collection("GuestBook")
        .doc(timestamp)
        .set(guest)
        .then(() => {
          console.log("작성됨");
        });

      setChecked(false);
      setDetail("");
      setFrom("");
      setTo("");
    }
  };
  useEffect(() => {
    console.log("isModalOpen", isModalOpen);
  }, [isModalOpen]);
  const handleOpen = () => {
    setIsModalOpen(!isModalOpen);
    setRotate(!rotate);
  };
  return (
    <div className={styles.page_Wrapper}>
      <div className={styles.GuestContainer}>
        <div
          className={`${styles.writeContainer} ${
            isModalOpen ? styles.mobileWrite : ""
          }`}
        >
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
              title={"작성하기"}
              onClick={(e) => {
                done();
              }}
            ></Button>
          </div>
        </div>
        {isModalOpen ? null : (
          <>
            <div className={styles.CardCon}>
              {data.length > 0 ? (
                <GuestCardList data={data}></GuestCardList>
              ) : (
                <span
                  style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    color: "var(--G3)",
                    "font-size": "24px",
                    "font-weight": "700",
                  }}
                >
                  내용이 없습니다.
                </span>
              )}
            </div>
          </>
        )}
      </div>
      <FloatButton icon={rotate ? "close" : "add"} onClick={handleOpen} />
    </div>
  );
}
