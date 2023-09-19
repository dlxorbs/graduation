import React, { useState, useEffect } from "react";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import DesignerList from "../component/Card/DesignerList";

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function DesignerPage() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [randomData, setRandomData] = useState([]); // 랜덤한 데이터를 저장하는 상태 추가

  useEffect(() => {
    let Datas = [];
    db.collection("Image")
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          const postImgData = {
            id: doc.id,
            ...doc.data(),
          };
          Datas.push(postImgData);
        });
        setData(Datas);
        setFiltered(Datas);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    // 데이터가 변경될 때마다 랜덤하게 섞은 데이터를 업데이트
    setRandomData(shuffleArray(filtered));
  }, [filtered]);

  return (
    <div className={styles.page_Wrapper}>
      <div className={styles.InnerContainer}>
        <div className={styles.CardCon}>
          {isLoading ? (
            <div className={styles.loading}>데이터를 불러오는 중...</div>
          ) : randomData.length > 0 ? ( // randomData를 사용하여 화면에 표시
            <DesignerList data={randomData} type={"Archive"} />
          ) : (
            <div className={styles.nothing}>내용이 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
}
