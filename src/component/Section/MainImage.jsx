import React from "react";
import "./Section.css";

export default function MainImg(props) {
  let content;
  let major;

  if (props.data.type === "s") {
    content = <span>{props.data.studentinfo}</span>;
    major = (
      <span>
        {props.data.major === "2"
          ? "미디어디자인공학전공"
          : "산업디자인공학전공"}
      </span>
    );
  } else if (props.data.type === "t") {
    const data = props.data.teamMembers;
    console.log(props.data);
    // data.push(props.data.teamMembers);
    console.log(data);
    content = data.map((member) => (
      <span key={member.id}>{member.studentname}</span>
    ));
    major = data.map((member) => (
      <span key={member.id}>
        {member.major === "2" ? "미디어디자인공학전공" : "산업디자인공학전공"}
      </span>
    ));
  }

  return (
    <div className="mainImage">
      <div className="imagecon">
        <div className="black"></div>
        <img className="smimg" src={props.src} alt="" />
      </div>
      <div className="maintextcon">
        <div className="maintext">
          <h1>{props.main}</h1>
          <span>{props.oneline}</span>
        </div>
        <div className="studentcontainer">
          <div className="major">{major}</div>
          <div className="member">{content}</div>
        </div>
      </div>
    </div>
  );
}
