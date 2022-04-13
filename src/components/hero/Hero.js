import React from "react";
import s from "./Hero.module.scss";
import turdGif from "../../assets/mtgif.gif";

export default function Hero() {
  return (
    <div className={s.container}>
      <h1 className={s.header}>Moonturds</h1>
      <p className={s.leadText}>10,000 moonturds swirling soon</p>
      <button className={s.openSeaButton}>View Collection on OpenSea</button>
      <img className={s.gif} src={turdGif} alt="" />
    </div>
  );
}
