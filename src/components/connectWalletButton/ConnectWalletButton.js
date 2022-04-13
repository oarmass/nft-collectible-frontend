import React from "react";
import s from "./ConnectWalletButton.module.scss";
export default function ConnectWalletButton({ handler }) {
  return (
    <div className={s.container}>
      <button onClick={handler} className={s.button}>
        Connect Wallet
      </button>
    </div>
  );
}
