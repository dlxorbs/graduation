import React, { useState, useEffect } from "react";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import CardList from "../component/Card/CardList";

// Fisher-Yates 셔플 함수
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function ArchivePage() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [randomData, setRandomData] = useState([]); // 랜덤한 데이터를 저장하는 상태 추가

  useEffect(() => {
    let Datas = [];
    db.collection("post")
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          const postData = {
            id: doc.id,
            ...doc.data().main,
            ...doc.data().data,
          };
          Datas.push(postData);
        });
        setData(Datas);
        setFiltered(Datas);
        setIsLoading(false);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    // 데이터가 변경될 때마다 랜덤하게 섞은 데이터를 업데이트
    setRandomData(shuffleArray(filtered));
  }, [filtered]);

  return (
    <div className={`${styles.page_Wrapper} ${styles.overflow}`}>
      <div className={styles.InnerContainer}>
        <div className={styles.CardCon}>
          {isLoading ? (
            <div className={styles.loading}>데이터를 불러오는 중...</div>
          ) : randomData.length > 0 ? ( // randomData를 사용하여 화면에 표시
            <CardList data={randomData} type={"Archive"} />
          ) : (
            <div className={styles.nothing}>내용이 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
}
