import React from "react";
import s from "./ContractDetails.module.scss";

export default function ContractDetails() {
  const BASE_URL = "https://rinkeby.etherscan.io/address";
  const CONTRACT_ADDRESS = "0x4cC0fd6e661857D0715B6C51A04310A9C651AD62";

  const CONTRACT_LINK = `${BASE_URL}/${CONTRACT_ADDRESS}`;
  return (
    <div className={s.container}>
      <h4 className={s.heading}>Smart Contract Address</h4>
      <a className={s.link} href={CONTRACT_LINK}>
        {CONTRACT_ADDRESS}
      </a>
    </div>
  );
}
