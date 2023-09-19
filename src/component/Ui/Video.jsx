import styles from "./Ui.module.css";
import React, { useState, useEffect } from "react";

const imageContext = require.context(
  "../../Video",
  false,
  /video00000\d{3}\.png$/
);
const imageSequence = imageContext.keys().map(imageContext);

const NUM_IMAGES = 240;

function Video(props) {
  const FRAME_RATE = 42;

  const [currentFrame, setCurrentFrame] = useState(1);
  const [forwardPlay, setForwardPlay] = useState(true); // 역재생 여부 상태 추가

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        if (forwardPlay) {
          // 현재가 역재생 중이 아니면 순방향으로
          if (prevFrame < NUM_IMAGES) {
            return prevFrame + 1;
          } else {
            setForwardPlay(false); // 순방향이 끝나면 역재생으로 전환
            return prevFrame - 1;
          }
        } else {
          // 역재생 중이면 역방향으로
          if (prevFrame > 1) {
            return prevFrame - 1;
          } else {
            setForwardPlay(true); // 역방향이 끝나면 순방향으로 전환
            return prevFrame + 1;
          }
        }
      });
    }, FRAME_RATE);

    return () => {
      clearInterval(interval);
    };
  }, [forwardPlay]); // forwardPlay 상태 변경 시 재생 방향 업데이트

  const imageUrl = imageSequence[currentFrame - 1];

  return (
    <div className={`${styles.imageCut} ${props.className}`}>
      <img
        className={styles.moveImage}
        src={imageUrl}
        alt={`frame${currentFrame}`}
      />
    </div>
  );
}

export default Video;
