import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import MainPage from "./Page/MainPage";
import ArchivePage from "./Page/ArchivePage";
import DetailPage from "./Page/DetailPage";
import AboutPage from "./Page/AboutPage";
import GusetBookPage from "./Page/GuestBook";
import DesignerPage from "./Page/DesignerPage";
import ProfileDetailPage from "./Page/ProfileDetailPage";
import MainLayout from "./layout/MainLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route index element={<MainPage />}></Route>
        <Route path="/project" element={<ArchivePage />}></Route>
        <Route path="project/:id" element={<DetailPage />}></Route>
        <Route path="/guestbook" element={<GusetBookPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/designer" element={<DesignerPage />}></Route>
        <Route path="designer/:id" element={<ProfileDetailPage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
