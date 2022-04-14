import React from "react";
import ReactDom from "react-dom";
import s from "./HelpModal.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function HelpModal({ toggle, show }) {
  if (!show) return null;
  return ReactDom.createPortal(
    <>
      <div className={s.overlay} onClick={toggle} />
      <div className={s.modal}>
        <h1 className={s.title}>Need some help?</h1>
        <AiOutlineCloseCircle className={s.close} onClick={toggle} />
        <p className={s.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nemo
          rerum repellendus corrupti necessitatibus eius molestias itaque
          dolorem, odio aliquam. Ullam, libero voluptate sunt atque illo
          perferendis facere reiciendis autem?
        </p>
        <p className={s.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nemo
          rerum repellendus corrupti necessitatibus eius molestias itaque
          dolorem, odio aliquam. Ullam, libero voluptate sunt atque illo
          perferendis facere reiciendis autem?
        </p>
        <p className={s.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nemo
          rerum repellendus corrupti necessitatibus eius molestias itaque
          dolorem, odio aliquam. Ullam, libero voluptate sunt atque illo
          perferendis facere reiciendis autem?
        </p>
      </div>
    </>,
    document.getElementById("portal")
  );
}
