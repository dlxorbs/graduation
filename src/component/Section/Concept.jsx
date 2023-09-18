import React from "react";
import styles from "./section.module.css";
import ConceptBack from "../Img/ConceptBack.png";
import Video from "../Ui/Video";

function Concept(props) {
  return (
    <div>
      <div
        className={styles.Concept}
        style={{ backgroundImage: `url(${ConceptBack})` }}
      >
        <Video className={styles.leftVideo}></Video>
        <div className={styles.rightConcept}>
          <div className={styles.textBox}>
            <h4>
              2023 Tech University of Korea
              <br />
              Department of Design Engineering
              <br />
              18th Graduation Exhibition
            </h4>
            <h3>유연 : 다채로운 흐름으로 물결치다</h3>
            <p>
              유연 : 다채로운 흐름으로 물결치다
              <br />
              물방울들이 모여서 우리만의 흐름을 만들어내는 동시에 무엇이든
              형상화 할 수 있는 'OO'을 표현합니다.
              <br />
              <br />
              한국공학대학교 디자인공학부 제18회 졸업전시회 테마는 '유연:
              다채로운 흐름으로 물결치다' 입니다. <br />
              한 명의 졸업생은 작고 맑은 물방울에 비유됩니다. 이 작은 물방울들은
              아름다운 형태를 유지하며 하나로 모여들어 조화롭게 어우러집니다.
              저마다의 개성이 모여 새로운 형태의 가능성을 가지게 되고, 하나의
              흐름을 유연하게 표현합니다. <br />
              <br />
              이제 우리는 새로운 시작을 앞에 두고 있습니다. 이번 전시를 통해
              이전의 지식과 경험을 바탕으로 더욱 다채로운 물결을 일으켜 나가는
              모습을 보여주고자 합니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Concept;

//https://fontawesome.com/icons/bars?f=classic&s=solid
