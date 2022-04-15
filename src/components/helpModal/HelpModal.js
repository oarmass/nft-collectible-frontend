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
        <h1 className={s.title}>Having trouble?</h1>
        <AiOutlineCloseCircle className={s.close} onClick={toggle} />
        <h3 className={s.heading}>Trouble minting?</h3>
        <p className={s.content}>
          Double check your wallet to ensure it is connected to Ethereum
          mainnet. Then ensure it is funded with enough ether to complete the
          transaction. It costs .01 ether to mint one moonturd, and you may mint
          10 at a time (which would total .1 ether). Minting also requires
          enough ether to cover gas involved in the transaction.
        </p>
        <h3 className={s.heading}>Need to disconnect your wallet?</h3>
        <p className={s.content}>
          You must manually disconnect your wallet. Wallet disconnection is
          disabled for privacy and security. To disconnect your wallet, open
          your wallet interface, navigate the menu and look for connected sites,
          then simply select disconnect.
        </p>
        <p className={s.content}>
          If you need more help, please reach out on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className={s.link}
            href="https://twitter.com/moonturds_xyz"
          >
            twitter
          </a>
        </p>
      </div>
    </>,
    document.getElementById("portal")
  );
}
