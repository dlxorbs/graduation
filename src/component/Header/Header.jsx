import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import logo from "../Img/logo.svg";

function Nav(props) {
  return (
    <div className={styles.nav} onClick={props.onClick}>
      {props.title || "Navigation"}
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
              onClick={function () {
                console.log("진행중인 콘테스트로 이동");
                nav("/Now");
              }}
            />
            <Nav
              title="PROJECT"
              onClick={function () {
                console.log("콘테스트 아카이빙로 이동");
                nav("/Archive");
              }}
            />
            <Nav
              title="DESIGNERS"
              onClick={function () {
                console.log("콘테스트 공지사항로 이동");
                nav("/Notice");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
