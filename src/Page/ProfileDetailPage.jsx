import React, { useEffect, useState } from "react";
import styles from "./Page.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase.js";
import CardList from "../component/Card/CardList";

export default function ProfileDetailPage() {
  const nav = useNavigate();
  const postId = useParams().id;
  const [teamdata, setTeamData] = useState({});
  const [data, setData] = useState([]);
  const [imagedata, setImageData] = useState({});
  const [image, setImage] = useState("");
  const [studentname, setStudentname] = useState("");
  const [major, setMajor] = useState("");
  const [email, setEmail] = useState("");
  const [prof, setProf] = useState("");
  const [comment, setComment] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [teamthumbnail, setteamThumbnail] = useState([]);

  useEffect(() => {
    let imageDatas = {};
    let postDatas = {};

    // 이미지 데이터 가져오기
    db.collection("Image")
      .doc(postId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          imageDatas = { id: doc.id, ...doc.data() };
          setImageData(imageDatas); // 이미지 데이터를 설정합니다.
          setImage(imageDatas.img);

          // 이미지 데이터를 가져온 후에 post 데이터 가져오기
          db.collection("post")
            .doc(imageDatas.id + "_s")
            .get()
            .then((doc) => {
              if (doc.exists) {
                const postData = {
                  id: doc.id,
                  ...doc.data(),
                };

                setStudentname(postData.data.studentinfo[0]);
                setMajor(postData.data?.major);
                setEmail(postData.profile?.email);
                setProf(postData.profile?.prof);
                setComment(postData.profile?.comment);
              }
            })
            .catch((error) => {});
        }
      });

    // 개인작의 데이터를 가져오는 함수
    db.collection("post")
      .doc(postId + "_s")
      .get()
      .then((doc) => {
        if (doc.exists) {
          postDatas = { id: doc.id, ...doc.data().main, ...doc.data().data };

          // 개인작 세팅 후에 팀작 검색 시작
          Datas.push(postDatas); // Datas 배열에 개인작 데이터를 추가합니다.
        }
      });

    const Datas = []; // Datas 배열을 초기화합니다.

    db.collection("post")
      // .where('')
      // .where("data.teamMembers.studentId", "array-contains", postId)
      // .where("studentId", "==", postId)
      .where("data.type", "==", "t")
      // .where("data.teamMembers", "array-contains", postId)
      .get()
      .then((qs) => {
        qs.forEach((doc) => {
          const teamDatas = {
            id: doc.id,
            ...doc.data().main,
            ...doc.data().data,
          };
          let stdid = [];
          let team = [];
          teamDatas.teamMembers.map((item) => {
            stdid.push(item.studentId);
          });
          if (stdid.includes(postId)) {
            console.log("true:", teamDatas);

            Datas.push(teamDatas);
          }

          // 필요한 작업 수행
        });
        // 모든 팀작 데이터가 추가된 Datas 배열을 상태로 설정합니다.
        setData(Datas);
      });

    // setThumbnail(Datas); // 이 부분은 필요 없는 것 같으므로 주석 처리했습니다.
  }, []);

  return (
    <div className={styles.page_Wrapper}>
      <div className={styles.InnerContainer}>
        <div className={styles.imageContainer}>
          <div
            className={styles.img}
            style={{ "--src": "url(" + image + ")" }}
          ></div>

          <div className={styles.profileContainer}>
            <div className={styles.name}>
              <div className={styles.pfst}>
                <h5>{studentname}</h5>
                <span> 지도교수 {prof}</span>
              </div>

              <div className={styles.profile}>
                <p>
                  {major == "2" ? "미디어디자인공학전공" : "산업디자인공학전공"}
                </p>
                <p>{email}</p>
              </div>

              <span className={styles.comment}> " {comment} "</span>
            </div>

            <div className={styles.project}>
              <h6>Projects</h6>
              <CardList data={data}></CardList>{" "}
              {/* CardList 컴포넌트에 수정된 데이터를 전달합니다. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
