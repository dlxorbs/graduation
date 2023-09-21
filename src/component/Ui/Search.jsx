import React, { useState, useEffect } from "react";
import styles from "./Ui.module.css";
import Search2 from "../Img/Search.svg";

function Search(props) {
  return (
    <div className={styles.search}>
      <input
        className={styles.searchBar}
        type="text"
        value={props.value}
        placeholder="2010123456"
        onChange={props.onChange}
      />
      <button
        className={styles.searchIcon}
        onClick={props.onClick}
        type="button"
      >
        <img src={Search2} alt="logo image" />
      </button>
    </div>
  );
}

export default Search;
