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
                nav("/Now");
              }}
            />
            <Nav
              title="PROJECT"
              onClick={function () {
                nav("/project");
              }}
            />
            <Nav
              title="DESIGNERS"
              onClick={function () {
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
