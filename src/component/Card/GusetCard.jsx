import React from "react";
import "./Guestcard.css";
import CardimgBlue from "../Img/CardBlue.svg";
import CardimgWhite from "../Img/CardWhite.svg";
export default function GuestCard(props) {
  return (
    <div className={`CardContainer ${props.type}`}>
      <div className="card">
        <div className={`to ${props.type === "write" ? "bigfont" : "smfont"}`}>
          <span
            style={{
              "--color": props.color || "#ffffff",
              // border: "1px solid #66666640",
            }}
          >
            TO.
          </span>
          <textarea
            style={{
              "--color": props.color || "#ffffff",
              // border: "1px solid #66666640",
            }}
            placeholder={"받을 사람을 입력해주세요."}
            value={props.Tovalue}
            onChange={props.onTochange}
          ></textarea>
        </div>

        <textarea
          className={`TextInput ${
            props.type === "write" ? "bigfont" : "smfont"
          }`}
          style={{
            "--color": props.color || "#ffffff",
            // border: "1px solid #66666640",
          }}
          placeholder={"편지를 입력해 주세요."}
          maxlength={160}
          height={props.height}
          value={props.value}
          onChange={props.onChange}
        ></textarea>

        <div
          className={`from ${props.type === "write" ? "bigfont" : "smfont"}`}
        >
          <span
            style={{
              "--color": props.color || "#ffffff",
              // border: "1px solid #66666640",
            }}
          >
            FROM.
          </span>
          <textarea
            style={{
              "--color": props.color || "#ffffff",
              // border: "1px solid #66666640",
            }}
            placeholder={"보낼 사람을 입력해주세요."}
            value={props.Fromvalue}
            onChange={props.onFromchange}
          ></textarea>
        </div>
      </div>
      <img src={CardimgBlue} alt="" />
    </div>
  );
}
