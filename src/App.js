import { useEffect, useState } from "react";
import ConnectWalletButton from "./components/connectWalletButton/ConnectWalletButton";
import ContractDetails from "./components/contractDetails/ContractDetails";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Layout from "./components/layout/Layout";
import MintButton from "./components/mintButton/MintButton";
import Team from "./components/team/Team";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  const [networkError, setNetworkError] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Must install Metamask!");
      return;
    }
    let chainId = await ethereum.request({ method: "eth_chainId" });
    const rinkebyChainId = "0x4";
    if (chainId !== rinkebyChainId) {
      setNetworkError(true);
    }
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Metamask connected: ", account);
      setCurrentAccount(account);
      setWalletConnected(true);
    } else {
      console.log("Metamask not connected.");
    }
  };

  useEffect(() => {
    checkWalletIsConnected();
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
      {!networkError && currentAccount && (
        <MintButton walletAddress={currentAccount} />
      )}
      {!currentAccount && (
        <ConnectWalletButton setCurrentAccount={setCurrentAccount} />
      )}
      <Info />
      <ContractDetails />
      <Team />
      <Testimonials />
    </Layout>
  );
}
export default App;
