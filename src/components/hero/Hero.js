import React from "react";
import s from "./Hero.module.scss";
import turdGif from "../../assets/mtgif.gif";

export default function Hero() {
  return (
    <div className={s.container}>
      <h1 className={s.header}>Moonturds</h1>
      <p className={s.leadText}>
        10,000 moonturds are floating and swirling across the galaxy! Mint to
        save one today.
      </p>
      <p>
        View collection on{" "}
        <a
          href="https://opensea.io/collection/moonturdsxyz"
          className={s.openSeaButton}
        >
          OpenSea
        </a>{" "}
        or{" "}
        <a
          href="https://rarible.com/moonturds/items"
          className={s.openSeaButton}
        >
          Rarible
        </a>
        .
      </p>

      <img className={s.gif} src={turdGif} alt="collection gif" />
    </div>
  );
}
