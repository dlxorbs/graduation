import React, { useState, useEffect } from "react";
import styles from "./Page.module.css";
import { useNavigate } from "react-router-dom";

import Video from "../component/Ui/Video";
import MainBottom from "../component/Ui/MainBottom";
import Concept from "../component/Section/Concept";
import Typography from "../component/Section/TYPOGRAPHY";
import Designsystem from "../component/Section/DESIGN_SYSTEM";
import Symbol from "../component/Section/SYMBOL";
import Variation from "../component/Section/VARIATION";
import Mockup from "../component/Section/MOCKUP";
import Credit from "../component/Section/CREDIT";
import Footer from "../component/Ui/footer";

export default function AboutPage() {
  return (
    <div className={`${styles.page_Wrapper} ${styles.overflow}`}>
      <Concept></Concept>
      <Typography></Typography>
      <Designsystem></Designsystem>
      <Symbol></Symbol>
      <Variation></Variation>
      <Mockup></Mockup>
      <Credit></Credit>
    </div>
  );
}
