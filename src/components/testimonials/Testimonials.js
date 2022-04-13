import React from "react";
import s from "./Testimonials.module.scss";
import { data } from "../../data/testimonials";
import Testimonial from "../testimonial/Testimonial";

export default function Testimonials() {
  return (
    <div className={s.container}>
      {data.map((i) => (
        <Testimonial
          key={i.id}
          quote={i.quote}
          author={i.author}
          image={i.image}
        />
      ))}
    </div>
  );
}
