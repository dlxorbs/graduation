import React, { useState, useEffect } from "react";
import styles from "./Page.module.css";
import { db } from "../firebase.js";
import CardList from "../component/Card/CardList";
import Search from "../component/Ui/Search";

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
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);
  const [realdata, setRealdata] = useState("");

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
        setRealdata(Datas);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    // 데이터가 변경될 때마다 랜덤하게 섞은 데이터를 업데이트
    setRandomData(shuffleArray(filtered));
  }, [filtered, checked]);

  return (
    <div className={`${styles.page_Wrapper} ${styles.overflow}`}>
      <div className={styles.InnerContainer}>
        {/* <Search
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></Search> */}
        <div className={styles.CardCon}>
          <div className={styles.randomBtn}>
            <input
              type="checkbox"
              id="toggle"
              hidden
              checked={checked}
              onClick={(e) => {
                setChecked(!checked);
                setRealdata(checked ? data : randomData);
              }}
            />
            <div className={styles.ran}> View Random</div>
            <label for="toggle" class="toggleSwitch sm">
              <span class="toggleButton"></span>
            </label>
          </div>
          {isLoading ? (
            <div className={styles.loading}>작품을 불러오는 중...</div>
          ) : realdata.length > 0 ? ( // realdata를 사용하여 화면에 표시
            <CardList data={realdata} type={"Archive"} />
          ) : (
            <div className={styles.nothing}>내용이 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
}
