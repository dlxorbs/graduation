import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import MainPage from "./Page/MainPage";
import Header from "./component/Header/Header";
import ArchivePage from "./Page/ArchivePage";
import DetailPage from "./Page/DetailPage";
import AboutPage from "./Page/AboutPage";
import GusetBookPage from "./Page/GuestBook";
import Footer from "./component/Ui/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header></Header>

    <Routes>
      <Route index element={<MainPage />}></Route>
      <Route path="/project" element={<ArchivePage />}></Route>
      <Route path="project/:id" element={<DetailPage />}></Route>
      <Route path="/guestbook" element={<GusetBookPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);

reportWebVitals();
