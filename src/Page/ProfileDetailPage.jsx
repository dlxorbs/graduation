import React, { useEffect, useState } from "react";
import styles from "./Page.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase.js";
import CardList from "../component/Card/CardList";

export default function ProfileDetailPage() {
  const nav = useNavigate();
  const postId = useParams().id;
  const [teamdata, setTeamData] = useState({});
  const [data, setData] = useState("");
  const [imagedata, setImageData] = useState({});
  const [image, setImage] = useState("");
  const [studentname, setStudentname] = useState("");
  const [major, setMajor] = useState("");
  const [email, setEmail] = useState("");
  const [prof, setProf] = useState("");
  const [comment, setComment] = useState("");
  const [thumbnail, setThumbnail] = useState([]);
  const [teamthumbnail, setteamThumbnail] = useState([]);

  useEffect(() => {
    // 이미지 데이터 가져오기
    db.collection("Image")
      .doc(postId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const imageDocData = { id: doc.id, ...doc.data() };
          setImageData(imageDocData); // 이미지 데이터를 설정합니다.
          setImage(imageDocData.img);
        }
      })
      .catch((error) => {
        console.error("Error getting image document:", error);
      });

    // 초기 데이터 가져오기 (teamdata)
    db.collection("post")
      .where("data.type", "==", "t")
      .where("data.teamMembers", "array-contains", postId)
      .get()
      .then((querySnapshot) => {
        let Datas = [];
        querySnapshot.forEach((doc) => {
          const postData = doc.data();
          Datas.push(postData);
        });
        setTeamData(Datas);
        setteamThumbnail(teamdata[0].data.img);

        setData([teamdata[0].data, teamdata[0].main]);
      })
      .catch((error) => {
        console.error("Error getting team documents:", error);
      });
  }, [postId]);

  useEffect(() => {
    // 이미지 데이터가 로드되면 해당 이미지 데이터를 사용하여 다른 데이터를 가져옵니다.
    if (imagedata.id) {
      db.collection("post")
        .doc(imagedata.id + "_s")
        .get()
        .then((postDoc) => {
          if (postDoc.exists) {
            const postData = postDoc.data();
            setStudentname(postData.studentname);
            setMajor(postData.data.major);
            setEmail(postData.profile.email);
            setProf(postData.profile.prof);
            setComment(postData.profile.comment);
            setThumbnail(postData.data.thumbnail);
          }
        })
        .catch((error) => {
          console.error("Error getting post document:", error);
        });
    }
  }, [imagedata]);

  return (
    <div className={styles.page_Wrapper}>
      <div className={styles.imageContainer}>
        <img src={image} alt="" />

        <div className="name">
          <div className={styles.university}>
            <h5>{studentname}</h5>
            <span> 지도교수 {prof}</span>
          </div>

          <div className={styles.profile}>
            <p>
              {major == "1" ? "미디어디자인공학전공" : "산업디자인공학전공"}
            </p>
            <p>{email}</p>
          </div>

          <span className={styles.comment}> {comment}</span>
        </div>

        <div className="project">
          <h6>Projects</h6>
          {/* <CardList></CardList> */}
        </div>
      </div>
    </div>
  );
}
