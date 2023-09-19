import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import styles from "./Page.module.css";
import Video from "../component/Ui/Video";
import MainBottom from "../component/Ui/MainBottom";
import Concept from "../component/Section/Concept";

function MainPage() {
  const [showMainBottom, setShowMainBottom] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 현재 스크롤 위치가 0보다 크면 MainBottom을 숨기고, 0이면 다시 표시
      if (window.scrollY > 10) {
        setShowMainBottom(100);

        // 스크롤 한번에 바닥으로 가게 해주는
        console.log(window.scrollY);
      } else {
        setShowMainBottom(0);
        console.log("올라옴");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.page_Wrapper}>
      <Video></Video>
      <MainBottom move={showMainBottom}></MainBottom>
      <Concept></Concept>
    </div>
  );
}

export default MainPage;
