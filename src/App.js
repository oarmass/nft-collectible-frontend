import { useEffect, useState } from "react";
import ConnectWalletButton from "./components/connectWalletButton/ConnectWalletButton";
import ContractDetails from "./components/contractDetails/ContractDetails";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Layout from "./components/layout/Layout";
import MintButton from "./components/mintButton/MintButton";
import Team from "./components/team/Team";
import Testimonials from "./components/testimonials/Testimonials";
import { providerOptions } from "./providerOptions";
import Web3Modal from "web3modal";
import { ethers } from "ethers";

const web3Modal = new Web3Modal({
  network: "mainnet",
  providerOptions,
  cacheProvider: true,
});

function App() {
  const [account, setAccount] = useState();
  const [networkError, setNetworkError] = useState();
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();

      if (accounts) {
        setAccount(accounts[0]);

        setWalletConnected(true);
      }
      if (network.chainId !== 1) {
        setNetworkError(true);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
  });

  return (
    <Layout walletConnected={walletConnected} networkError={networkError}>
      <Hero />
      {!networkError && account && <MintButton walletAddress={account} />}
      {!walletConnected && (
        <ConnectWalletButton connectWallet={connectWallet} />
      )}
      <Info />
      <ContractDetails />
      <Testimonials />
      <Team />
    </Layout>
  );
}
export default App;
