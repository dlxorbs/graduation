import React from "react";
import styles from "./section.module.css";
import Section from "./Title";

function Credit(props) {
  return (
    <div className={`${styles.Section} ${styles.cre}`}>
      <Section text={"CREDIT"}></Section>
      <div className={styles.credit_area}>
        <div className={styles.credit_area_section}>
          <h4>지도교수</h4>
          <div className={styles.professor}>
            <span>장영주</span>
            <span>홍성수</span>
            <span className={styles.textSpace}>김&nbsp;&nbsp;&nbsp;억</span>
            <span>조남주</span>
          </div>
          <div className={styles.professor}>
            <span>권오재</span>
            <span>한민섭</span>
            <span>이문환</span>
            <span>김한종</span>
          </div>
        </div>
        <div className={styles.credit_area_section}>
          <h4>제18대 졸업준비위원회</h4>
          <div className={styles.Graduation}>
            <span className={styles.Flex}>
              <span>위</span>
              <span>원</span>
              <span>장</span>
            </span>
            <span>오홍석</span>
          </div>
          <div className={styles.Graduation}>
            <span className={styles.Flex}>
              <span>부</span>
              <span>위</span>
              <span>원</span>
              <span>장</span>
            </span>
            <span>이태균</span>
          </div>
          <div className={styles.Graduation}>
            <span className={styles.Flex}>
              <span>총</span>
              <span>무</span>
            </span>
            <span>신지연</span>
          </div>
          <div className={styles.Graduation}>
            <span className={styles.Flex}>
              <span>기</span>
              <span>획</span>
              <span>팀</span>
            </span>
            <span>박건도</span>
            <span>김현지</span>
            <span>변재윤</span>
            <span>이규빈</span>
            <span>이문경</span>
            <span>전다희</span>
          </div>
          <div className={styles.Graduation}>
            <span className={styles.Flex}>
              <span>홍</span>
              <span>보</span>
              <span>팀</span>
            </span>
            <span>오재원</span>
            <span>윤가희</span>
            <span>장서윤</span>
            <span>최현정</span>
          </div>
          <div className={styles.Graduation}>
            <span className={styles.Flex}>
              <span>디</span>
              <span>자</span>
              <span>인</span>
              <span>팀</span>
            </span>
            <span>서예진</span>
            <span>이수진</span>
            <span>정은지</span>
            <span>조희수</span>
            <span>최경주</span>
            <span>최여원</span>
          </div>
        </div>
        <div className={styles.credit_area_section}>
          <h4>THANKS TO</h4>
          <div className={styles.Thanks}>
            <span className={styles.Flex}>
              <span>웹</span>
              <span>개</span>
              <span>발</span>
            </span>
            <span>박건도</span>
            <span>송해성</span>
            <span>이태균</span>
            <span>조희수</span>
            <span>정은지</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credit;

//https://fontawesome.com/icons/bars?f=classic&s=solid
