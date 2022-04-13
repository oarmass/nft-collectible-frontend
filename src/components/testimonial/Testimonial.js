import React from "react";
import s from "./Testimonial.module.scss";

export default function Testimonial({ image, quote, author }) {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <img src={image} alt="" className={s.image} />
      </div>
      <div className={s.content}>
        <h5 className={s.quote}>"{quote}"</h5>
        <p className={s.author}>{author}</p>
      </div>
    </div>
  );
}
