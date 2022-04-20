import React from "react";
import s from "./NetworkError.module.scss";

export default function NetworkError() {
  return (
    <div className={s.container}>
      <p className={s.text}>Please connect to the Mainnet network</p>
    </div>
  );
}
