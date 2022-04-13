import React, { useState } from "react";
import s from "./MintButton.module.scss";

export default function MintButton({ handler }) {
  const [total, setTotal] = useState(null);
  return (
    <div className={s.container}>
      <p className={s.instructions}>how many do you want to mint?</p>
      <input
        type="number"
        min={1}
        max={10}
        placeholder="You can mint up to 10"
        className={s.input}
        onChange={(e) => setTotal(e.target.value)}
      />
      {total !== null && <p className={s.price}>PRICE: {total / 10} eth</p>}

      <button onClick={handler} className={s.button}>
        {total > 1 ? "MINT MOONTURDS!" : "MINT MOONTURD!"}
      </button>
    </div>
  );
}
