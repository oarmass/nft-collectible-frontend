import React from "react";
import s from "./Header.module.scss";
import TurdLogo from "../../assets/9.png";
import OS from "../../assets/opensea.png";
import { FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <div className={s.container}>
      <div className={s.blank} />
      <img src={TurdLogo} alt="" className={s.logo} />
      <div className={s.links}>
        <a className={s.link} href="https://twitter.com/moonturds_xyz">
          <FaTwitter className={s.twitter} />
        </a>
        <a className={s.link} href="https://testnets.opensea.io/collection/moonturds-v3">
          <img className={s.linkImage} src={OS} alt="" />
        </a>
      </div>
    </div>
  );
}
