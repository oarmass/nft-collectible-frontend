import React from "react";
import s from "./Team.module.scss";
import { data } from "../../data/team";
import TeamMember from "../teamMember/TeamMember";
export default function Team() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.header}>Core Team</h1>
      <div className={s.container}>
        {data.map((person) => (
          <TeamMember key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}
