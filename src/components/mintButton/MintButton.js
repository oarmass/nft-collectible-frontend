import React, { useState } from "react";
import { ethers } from "ethers";
import contract from "../../contracts/moonturds.json";
import { AiFillQuestionCircle } from "react-icons/ai";
// Components
import Loader from "../loader/Loader";
import TransactionSuccess from "../transactionSuccess/TransactionSuccess";
import HelpModal from "../helpModal/HelpModal";
// Styles
import s from "./MintButton.module.scss";

export default function MintButton({ walletAddress }) {
  const [totalToMint, setTotalToMint] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mintingSuccess, setMintingSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [helpModalVisible, setHelpModalVisible] = useState(false);
  const [hash, setHash] = useState(null);
  // Price Helpers
  const price = totalToMint / 100;
  const priceToString = price.toString();
  // Contract References
  const contractAddress = "0x92FAa85bCbB7B6eC32dBc0fA262b002E73B7A11C";
  const abi = contract.abi;

  const toggleHelpModal = () => setHelpModalVisible(!helpModalVisible);

  const mintNFT = async (numberToMint, amount) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        setLoading(true);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(contractAddress, abi, signer);
        let mintingTransaction = await nftContract.mintNFTs(numberToMint, {
          value: ethers.utils.parseEther(amount),
        });
        await mintingTransaction.wait();
        setHash(mintingTransaction.hash);
        setMintingSuccess(true);
        setLoading(false);
        // Reset total to remove conditional logic in UI
        setTotalToMint(null);
      }
    } catch (err) {
      console.log(err.code);
      if (err.code === "INSUFFICIENT_FUNDS") {
        setErrorMessage("You need more ether!");
      } else {
        setErrorMessage("Oops... something went wrong.");
      }
      // Reset total to remove conditional logic in UI
      setTotalToMint(null);
      setLoading(false);
    }
  };

  const handleInputChange = (amount) => {
    setErrorMessage(null);
    setTotalToMint(amount);
  };

  const mintAgain = () => {
    setMintingSuccess(false);
  };

  if (loading) return <Loader />;
  if (mintingSuccess)
    return (
      <TransactionSuccess
        mintAgain={mintAgain}
        walletAddress={walletAddress}
        hash={hash}
      />
    );
  return (
    <>
      <div className={s.container}>
        <p className={s.instructions}>How many would you like to mint?</p>
        <input
          type="number"
          min={1}
          max={10}
          placeholder="Max 10 mints per transaction."
          className={s.input}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        {totalToMint !== null && <p className={s.price}>PRICE: {price} eth</p>}

        <div className={s.buttonContainer}>
          <button
            onClick={() => mintNFT(totalToMint, priceToString)}
            className={s.button}
            disabled={totalToMint === null}
          >
            {totalToMint > 1 ? "MINT MOONTURDS!" : "MINT MOONTURD!"}
          </button>
          <AiFillQuestionCircle
            onClick={toggleHelpModal}
            className={s.helpButton}
          />
        </div>

        {errorMessage && <p>{errorMessage}</p>}
      </div>
      {helpModalVisible && (
        <HelpModal show={helpModalVisible} toggle={toggleHelpModal} />
      )}
    </>
  );
}
