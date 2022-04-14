import React from "react";
import s from "./Info.module.scss";

export default function Info() {
  return (
    <div className={s.container}>
      <h3 className={s.heading}>Moonturds are for everyone!</h3>
      <p className={s.text}>
        Tired of venture capitalists pricing you out of the next best PFP
        project? You're not alone. Moonturds is for commonfolk. No centralized
        allowlist. No grind. No botting. No roadmap promises. Simply affordable,
        fair, and fantastic art for everyone.
      </p>
    </div>
  );
}
