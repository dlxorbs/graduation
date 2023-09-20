import React, { useState, useEffect } from "react";
import styles from "./Ui.module.css";
import Search2 from "../Img/Search.svg";

function Search(props) {
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchBar}
        type="text"
        value={search}
        placeholder="2010123456"
        onChange={onChange}
      />
      <button className={styles.searchIcon} type="button">
        <img src={Search2} alt="logo image" />
      </button>
    </div>
  );
}

export default Search;
