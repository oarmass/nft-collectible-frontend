import React from "react";
import s from "./TransactionSuccess.module.scss";

export default function TransactionSuccess({ mintAgain, walletAddress, hash }) {
  const ETHERSCAN_BASE_URL = "https://etherscan.io/tx";
  return (
    <div className={s.container}>
      <p className={s.message}>Mint successful!</p>
      <p className={s.linkText}>
        View on{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href={`https://opensea.io/${walletAddress}/`}
          className={s.link}
        >
          OpenSea
        </a>
        .
      </p>
      <p className={s.linkText}>
        View{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className={s.link}
          href={`${ETHERSCAN_BASE_URL}/${hash}`}
        >
          Etherscan
        </a>{" "}
        transaction.
      </p>

      <button onClick={mintAgain} className={s.mintAgain}>
        Mint again to save more moonturds?
      </button>
    </div>
  );
}
