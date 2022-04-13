import React from "react";
import s from "./FailedMint.module.scss";
export default function FailedMint({ errorMessage }) {
  return (
    <div className={s.container}>
      <p className={s.message}>NFT minting failed</p>
      <p className={s.error}>{errorMessage}</p>
    </div>
  );
}
