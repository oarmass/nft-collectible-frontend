import React from "react";
import s from "./ContractDetails.module.scss";

export default function ContractDetails() {
  const BASE_URL = "https://etherscan.io/address";
  const CONTRACT_ADDRESS = "0x92FAa85bCbB7B6eC32dBc0fA262b002E73B7A11C";

  const CONTRACT_LINK = `${BASE_URL}/${CONTRACT_ADDRESS}`;
  return (
    <div className={s.container}>
      <h4 className={s.heading}>Verified Contract Address</h4>
      <a
        rel="noreferrer"
        target="_blank"
        className={s.link}
        href={CONTRACT_LINK}
      >
        {CONTRACT_ADDRESS}
      </a>
    </div>
  );
}
