import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Header from "./component/Header/Header";
import ArchivePage from "./Page/ArchivePage";
import DetailPage from "./Page/DetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header></Header>

    <Routes>
      <Route path="/" element={<ArchivePage />}></Route>
      <Route path="post/:id" element={<DetailPage />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
