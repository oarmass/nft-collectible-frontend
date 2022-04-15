import React from "react";
import s from "./TeamMember.module.scss";
import { FaTwitter } from "react-icons/fa";

export default function TeamMember({ person }) {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <img className={s.image} src={person.image} alt="headshot" />
        <h5 className={s.name}>{person.name}</h5>
        <p className={s.title1}>{person.title1}</p>
        <p className={s.title2}>{person.title2}</p>
      </div>
      <div className={s.link}>
        {person.link && (
          <a
            target="_blank"
            rel="noreferrer"
            className={s.link}
            href={person.link}
          >
            <FaTwitter />
          </a>
        )}
      </div>
    </div>
  );
}
