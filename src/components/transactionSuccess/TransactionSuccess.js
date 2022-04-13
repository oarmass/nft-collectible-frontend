import React from "react";
import s from "./TransactionSuccess.module.scss";

export default function TransactionSuccess({ mintAgain, walletAddress }) {
  return (
    <div className={s.container}>
      <p className={s.message}>NFT minting successful, view on OpenSea</p>
      <a
        href={`https://testnets.opensea.io/${walletAddress}/`}
        className={s.link}
      >
        https://testnets.opensea.io/${walletAddress}/
      </a>
      <button onClick={mintAgain} className={s.mintAgain}>
        mint again
      </button>
    </div>
  );
}
