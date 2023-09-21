import React from "react";
import styles from "./section.module.css";
import Section from "./Title";
import color from "../Img/color.svg";

function Designsystem(props) {
  return (
    <div className={`${styles.Section} ${styles.sys}`}>
      <Section text={"DESIGN SYSTEM"}></Section>
      <h5 className={styles.sectionTitle}>
      <span className={styles.wide_screen_text}>물방울을 형상화 하는 색상을 선정하여 유연한 흐름을 보여줍니다.</span>
      <span className={styles.narrow_screen_text}>물방울을 형상화 하는 색상을<br/>선정하여 유연한 흐름을 보여줍니다.</span>
        
      </h5>
      <div className={styles.images}>
        <p>BRAND COLOR</p>
        <img src={color} alt="" />
      </div>
      <h5 className={styles.sectionTitle}>
      <span className={styles.wide_screen_text}>포스터 전시 정보, 도록 본문 등 인쇄물 정보 전달에 사용합니다.</span>
      <span className={styles.narrow_screen_text}>포스터 전시 정보, 도록 본문 등<br/>인쇄물 정보 전달에 사용합니다.</span>
      </h5>
      <div className={styles.images}>
        <p>TEXT STYLE</p>
        <div className={styles.fontarea}>
          <div className={styles.KoPub}>
            <div className={styles.first}>
              <div>
                <span className={styles.smallTitle}>베이직 한글 폰트</span>
                <p className={styles.title}>KoPubWorldDotum_Pro</p>
              </div>
            </div>
            <div className={styles.second}>
              <div>
                <span className={styles.smallTitle}>Light</span>
                <p className={styles.title}>
                  유연 : 다채로운 흐름으로 물결치다
                </p>
              </div>
              <div>
                <span className={styles.smallTitle}>Medium</span>
                <p className={styles.title}>
                  유연 : 다채로운 흐름으로 물결치다
                </p>
              </div>
              <div>
                <span className={styles.smallTitle}>Bold</span>
                <p className={styles.title}>
                  유연 : 다채로운 흐름으로 물결치다
                </p>
              </div>
            </div>
          </div>
          <div className={styles.Preten}>
            <div className={styles.first}>
              <span className={styles.smallTitle}>베이직 한글 폰트</span>
              <p className={styles.title}>Pretendard</p>
            </div>
            <div className={styles.second}>
              <div>
                <span className={styles.smallTitle}>Light</span>
                <p className={styles.title}>
                  유연 : 다채로운 흐름으로 물결치다
                </p>
              </div>
              <div>
                <span className={styles.smallTitle}>Medium</span>
                <p className={styles.title}>
                  유연 : 다채로운 흐름으로 물결치다
                </p>
              </div>
              <div>
                <span className={styles.smallTitle}>Bold</span>
                <p className={styles.title}>
                  유연 : 다채로운 흐름으로 물결치다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designsystem;

//https://fontawesome.com/icons/bars?f=classic&s=solid
