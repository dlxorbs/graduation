import React, { useEffect, useState } from "react";
import styles from "./Page.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase.js";
import $ from "jquery";
import Left from "../component/Section/Left";
import Right from "../component/Section/Right";
import Center from "../component/Section/Center";
import MainImg from "../component/Section/MainImage";

import symbol from "../component/Img/symbol.png";
import symbol700 from "../component/Img/700symbol.png";
import symbol1200 from "../component/Img/1200symbol.png";
import symbol1920 from "../component/Img/1920symbol.png";

export default function DetailPage() {
  const nav = useNavigate();
  const postId = useParams().id;

  const [dummy, setDummy] = useState({});

  const [data, setData] = useState("");
  // 이미지 적용시 파일들
  const [mainthumb, setMainthumb] = useState(symbol1920);

  const [backthumb, setbackthumb] = useState(symbol);
  const [researchthumb, setResearchthumb] = useState(symbol);
  const [goalthumb, setGoalthumb] = useState(symbol1200);
  const [function01thumb, setFunction01thumb] = useState(symbol700);
  const [function02thumb, setFunction02thumb] = useState(symbol700);
  const [function03thumb, setFunction03thumb] = useState(symbol700);

  const [maintext, setMaintext] = useState("");
  const [onelinetext, setOnelinetext] = useState("");
  const [backtext, setBacktext] = useState("");
  const [restext, setRestext] = useState("");
  const [goaltext, setGoaltext] = useState("");
  const [func01text, setFunc01text] = useState("");
  const [func02text, setFunc02text] = useState("");
  const [func03text, setFunc03text] = useState("");

  const [video, setVideo] = useState("");

  //포스트의 데이터를 생성될때 받아옴
  useEffect(() => {
    let Datas = {};
    db.collection("post")
      .doc(postId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          Datas = doc.data();
          console.log(Datas);
          // 썸네잉ㄹ
          setMainthumb(Datas.main?.img || symbol1920);
          setbackthumb(Datas.background?.img || symbol);
          setResearchthumb(Datas.research?.img || symbol);
          setGoalthumb(Datas.goals?.img || symbol1200);
          setFunction01thumb(
            Datas.func && Datas.func[0] && Datas.func[0].img
              ? Datas.func[0].img
              : symbol700
          );
          setFunction02thumb(
            Datas.func && Datas.func[1] && Datas.func[1].img
              ? Datas.func[1].img
              : symbol700
          );
          setFunction03thumb(
            Datas.func && Datas.func[2] && Datas.func[2].img
              ? Datas.func[2].img
              : symbol700
          );
          // 텍스트
          setMaintext(Datas.main?.works || "");
          setOnelinetext(Datas.main?.oneline || "");
          setBacktext(Datas.background?.content || "");
          setRestext(Datas.research?.content || "");
          setGoaltext(Datas.goals?.content || "");

          setFunc01text(
            Datas.func && Datas.func[0] && Datas.func[0].content
              ? Datas.func[0].content
              : ""
          );
          setFunc02text(
            Datas.func && Datas.func[1] && Datas.func[1].content
              ? Datas.func[1].content
              : ""
          );
          setFunc03text(
            Datas.func && Datas.func[2] && Datas.func[2].content
              ? Datas.func[2].content
              : ""
          );
          setData(Datas?.data);
          setVideo(Datas.video || "");
        }
        setDummy(Datas);
        console.log(data);
      });
  }, []);

  return (
    <div className={`${styles.page_Wrapper} ${styles.overflow}`}>
      <MainImg
        data={data}
        src={mainthumb}
        main={maintext}
        oneline={onelinetext}
      ></MainImg>
      <div className={styles.Page_SecondWrapper}>
        <Left width={550} head={"Background"} text={backtext} src={backthumb} />

        <Right
          width={550}
          head={"Research"}
          text={restext}
          src={researchthumb}
        />

        <Center
          width={550}
          head={"Project Goal"}
          text={goaltext}
          src={goalthumb}
        />

        <Left
          type={"function"}
          img={"functionImg"}
          head={"Function 01"}
          text={func01text}
          src={function01thumb}
        />
        <Right
          type={"function"}
          img={"functionImg"}
          head={"Function 02"}
          text={func02text}
          src={function02thumb}
        />
        <Left
          type={"function"}
          img={"functionImg"}
          head={"Function 03"}
          text={func03text}
          src={function03thumb}
        />

        <div className={styles.videoContainer}>
          <h4>Video</h4>
          <iframe
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
