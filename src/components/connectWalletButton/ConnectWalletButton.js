import React from "react";
import s from "./ConnectWalletButton.module.scss";
export default function ConnectWalletButton({ connectWallet }) {
  return (
    <div className={s.container}>
      <button onClick={connectWallet} className={s.button}>
        Connect Wallet
      </button>
    </div>
  );
}
