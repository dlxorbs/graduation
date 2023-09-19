import React from "react";
import styles from "./Header.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../Img/logo.svg";

function Nav(props) {
  const location = useLocation(); // 현재 위치 확인
  const isActive = location.pathname === props.to; // 현재 위치와 Nav의 경로가 일치하는지 확인

  // title을 배열로 분할하여 각 글자를 span으로 렌더링
  const titleSpans = props.title
    .split("")
    .map((letter, index) => <span className={styles.navspan}key={index}>{letter}</span>);

  return (
    <div
      className={`${styles.nav} ${isActive ? styles.activeNav : ""}`}
      onClick={props.onClick}
    >
      {titleSpans}
    </div>
  );
}

function Header(props) {
  const nav = useNavigate();
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.navWrapper}>
          <img
            className={styles.logo}
            src={logo}
            onClick={() => {
              nav("/");
            }}
          ></img>
          <div className={styles.navigation}>
            <Nav
              title="ABOUT"
              to="/About" // Nav에 경로(to) 추가
              onClick={() => {
                nav("/About");
              }}
            />
            <Nav
              title="PROJECT"
              to="/project" // Nav에 경로(to) 추가
              onClick={() => {
                nav("/project");
              }}
            />
            <Nav
              title="DESIGNERS"
              to="/designer" // Nav에 경로(to) 추가
              onClick={() => {
                nav("/designer");
              }}
            />
            <Nav
              title="GUEST BOOK"
              to="/guestbook" // Nav에 경로(to) 추가
              onClick={() => {
                nav("/guestbook");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
