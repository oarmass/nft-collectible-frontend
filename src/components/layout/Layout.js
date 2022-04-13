import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import NetworkError from "../networkError/NetworkError";
import s from "./Layout.module.scss";

export default function Layout({ children, networkError, walletConnected }) {
  return (
    <div className={s.container}>
      {walletConnected && networkError && <NetworkError />}
      <Header />
      <div className={s.content}>{children}</div>
      <Footer />
    </div>
  );
}
