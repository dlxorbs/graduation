import React, { useState, useEffect, useReducer, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Page.module.css";
import Video from "../component/Ui/Video";
import MainBottom from "../component/Ui/MainBottom";
import Concept from "../component/Section/Concept";

import $ from "jquery";

function MainPage() {
  const nav = useNavigate();
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  const [showMainBottom, setMainBottom] = useState(0);
  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  useEffect(() => {
    // modal이 떠 있을 땐 스크롤 막음
    disableScroll();

    // modal 닫히면 다시 스크롤 가능하도록 함
    return () => enableScroll();
  }, []);

  return (
    <div
      onWheel={(e) => {
        const delta = e.deltaY;

        if (delta > 0) {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
          setMainBottom(100);
        } else {
          window.scrollTo({ top: -window.innerHeight, behavior: "smooth" });
          setMainBottom(0);
        }
        console.log(e.deltaY);
      }}
      className={`${styles.page_Wrapper} ${styles.overflow} ${styles.main}`}
    >
      <Video></Video>
      <MainBottom move={showMainBottom}></MainBottom>
      <Concept></Concept>
    </div>
  );
}

export default MainPage;
