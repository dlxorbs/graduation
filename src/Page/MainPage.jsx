import React, { useState, useEffect } from "react";
import styles from "./Page.module.css";
import { useNavigate } from "react-router-dom";

import Video from "../component/Ui/Video";
import MainBottom from "../component/Ui/MainBottom";
import Concept from "../component/Section/Concept";
import Typography from "../component/Section/TYPOGRAPHY";
import Designsystem from "../component/Section/DESIGN_SYSTEM";
import Symbol from "../component/Section/SYMBOL";
import Variation from "../component/Section/VARIATION";
import Mockup from "../component/Section/MOCKUP";
import Credit from "../component/Section/CREDIT";
import Footer from "../component/Ui/footer";

function MainPage() {
  const [showMainBottom, setShowMainBottom] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 현재 스크롤 위치가 0보다 크면 MainBottom을 숨기고, 0이면 다시 표시
      if (window.scrollY > 10) {
        setShowMainBottom(100);
        console.log(window.scrollY);
      } else {
        setShowMainBottom(0);
        console.log("올라옴");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.Page_Wrapper}>
      <Video></Video>
      <MainBottom move={showMainBottom}></MainBottom>
      <Concept></Concept>
      <Typography></Typography>
      <Designsystem></Designsystem>
      <Symbol></Symbol>
      <Variation></Variation>
      <Mockup></Mockup>
      <Credit></Credit>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
