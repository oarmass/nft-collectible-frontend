import React from "react";
import s from "./TeamMember.module.scss";
export default function TeamMember({ person }) {
  return (
    <div className={s.container}>
      <img className={s.image} src={person.image} alt="headshot" />
      <div className={s.content}>
        <h5 className={s.name}>{person.name}</h5>
        <p className={s.title1}>{person.title1}</p>
        <p className={s.title2}>{person.title2}</p>
      </div>
      <a className={s.link} href={person.link}>
        See more
      </a>
    </div>
  );
}
