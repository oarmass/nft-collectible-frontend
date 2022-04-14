import React from "react";
import s from "./ConnectWalletButton.module.scss";
export default function ConnectWalletButton({ setAccount, connectWallet }) {
  // const connectWallet = async () => {
  //   const { ethereum } = window;
  //   if (!ethereum) {
  //     alert("Must install Metamask!");
  //   }
  //   try {
  //     const accounts = await ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     console.log("Eureka! Address: ", accounts[0]);
  //     setCurrentAccount(accounts[0]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className={s.container}>
      <button onClick={connectWallet} className={s.button}>
        Connect Wallet
      </button>
    </div>
  );
}
