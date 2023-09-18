import styles from "./Ui.module.css";
import React, { useState, useEffect } from "react";

function Video(props) {
  const [totalFrames, setTotalFrame] = useState(240);
  const [loadedFrames, setLoadedFrames] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `/Video/Adobe After Effects 20220${String(i).padStart(
        3,
        "0"
      )}.png`;
      img.onload = () => {
        setLoadedFrames(loadedFrames++);
      };
    }
  }, []);

  useEffect(() => {
    if (loadedFrames === totalFrames) {
      const interval = setInterval(() => {
        setCurrentFrame((prevFrame) => {
          if (prevFrame < totalFrames) {
            return prevFrame + 1;
          } else {
            return 1;
          }
        });
      }, 42);

      return () => clearInterval(interval);
    }
  }, [loadedFrames]);

  return loadedFrames === totalFrames ? (
    <div className={`${styles.imageCut} ${props.className}`}>
      <img
        className={styles.moveImage}
        src={`/Video/Adobe After Effects 20220${String(currentFrame).padStart(
          3,
          "0"
        )}.png`}
        alt="PNG Sequence Frame"
      />
    </div>
  ) : (
    <div>
      Loading... {loadedFrames}/{totalFrames}
    </div>
  );
}

export default Video;
