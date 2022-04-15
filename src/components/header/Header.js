import React from "react";
import s from "./Header.module.scss";
import TurdLogo from "../../assets/9.png";
// import OS from "../../assets/opensea.png";
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
        {/* Uncomment this block once opensea link is live
        <a
          className={s.link}
          href="https://testnets.opensea.io/collection/moonturds-v3"
        >
          <img className={s.linkImage} src={OS} alt="opensea icon" />
        </a> */}
      </div>
    </div>
  );
}
