import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import s from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={s.container}>
      <Header />
      <div className={s.content}>{children}</div>
      <Footer />
    </div>
  );
}
