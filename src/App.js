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

function App() {
  const [account, setAccount] = useState();
  const [networkError, setNetworkError] = useState();
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    setAccount(address);
    setWalletConnected(true);
    const network = await web3Provider.getNetwork();
    if (network.chainId !== 1) {
      setNetworkError(true);
    }
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  let web3Modal;
  if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true,
      providerOptions, // required
    });
  }

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
