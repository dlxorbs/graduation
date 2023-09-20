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
    let imageDatas = {};
    let postDatas = [];

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
                setThumbnail(postData.data?.thumbnail);

                // 그 외의 필요한 데이터를 설정합니다.

                setData(postData);

                console.log(data);
              }
            })
            .catch((error) => {
              console.error("Error getting post document:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error getting image document:", error);
      });

    // 이미지 데이터와 post 데이터를 배열로 사용하거나 다른 작업을 수행할 수 있습니다.
  }, []);

  useEffect(() => {
    let teamDatas = [];

    // 팀 데이터 가져오기
    db.collection("post")
      .where("data.type", "==", "t")
      .where("data.teamMembers", "array-contains", postId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const postData = {
            id: doc.id,
            ...doc.data(),
          };
          teamDatas.push(postData);
        });
        // 팀 데이터를 설정합니다.
        setTeamData(teamDatas);
        console.log(teamDatas);
      })
      .catch((error) => {
        console.error("Error getting team documents:", error);
      });
  }, [imagedata, postId]);

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

              <span className={styles.comment}> {comment}</span>
            </div>

            <div className="project">
              <h6>Projects</h6>
              {/* <CardList data={data}></CardList> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
