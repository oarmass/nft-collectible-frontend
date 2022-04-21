import React from "react";
import s from "./Header.module.scss";
import TurdLogo from "../../assets/9.png";
import OS from "../../assets/opensea.png";
import RARIBLE from "../../assets/rarible.png";
import { FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
    <div className={s.container}>
      <div className={s.blank} />
      <img src={TurdLogo} alt="Moonturd Logo" className={s.logo} />
      <div className={s.links}>
        <a
          target="_blank"
          rel="noreferrer"
          className={s.link}
          href="https://twitter.com/moonturds_xyz"
        >
          <FaTwitter className={s.twitter} />
        </a>
        <a className={s.link} href="https://rarible.com/moonturds/items">
          <img className={s.linkImage} src={RARIBLE} alt="opensea icon" />
        </a>
        <a className={s.link} href="https://opensea.io/collection/moonturdsxyz">
          <img className={s.linkImage} src={OS} alt="opensea icon" />
        </a>
      </div>
    </div>
  );
}
