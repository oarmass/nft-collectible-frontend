import { ethers } from 'ethers';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import contract from './contracts/moonturds.json';

const contractAddress = "0x4cC0fd6e661857D0715B6C51A04310A9C651AD62";
const abi = contract.abi;

function App() {

  const checkWalletIsConnected = async () => {
      const { ethereum } = window;
      
      if (!ethereum) {
          console.log("Must install Metamask!");
          return;
      }   else {
            console.log("Ready to connect wallet!")
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });

      if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Metamask connected: ", account);
          setCurrentAccount(account);
      }   else {
          console.log("Metamask not connected.");
      }
      }


  const [currentAccount, setCurrentAccount] = useState(null);

  const connectWalletHandler = async () => {
      const { ethereum } = window;

      if (!ethereum) {
          alert("Must install Metamask!");
      }

      try {
          const accounts = await ethereum.request ({ method: 'eth_requestAccounts' });
          console.log("Eureka! Address: ", accounts[0]);
          setCurrentAccount(accounts[0]);
       }  catch (err) {
          console.log(err)

          }
      }

  const mintNftHandler = async () => {
      try {
          const { ethereum } = window;
      
          if (ethereum) {
              const provider = new ethers.providers.Web3Provider(ethereum);
              const signer = provider.getSigner();
              const nftContract = new ethers.Contract(contractAddress, abi, signer);

              console.log("Send ether.");
              let nftTxn = await nftContract.mintNFTs(1, { value: ethers.utils.parseEther(".01") });

              console.log("Transacting... please wait.")
              await nftTxn.wait();
              
              console.log('Success!  See https://rinkeby.etherscan.io/tx/${nftTxn.hash}');

          }   else {
              console.log("Failed!");
          }

        } catch (err) {
            console.log(err);
        }
   }

  const connectWalletButton = () => {
    return (
      <button onClick={connectWalletHandler} className='cta-button connect-wallet-button'>
        Connect Wallet
      </button>
    )
  }

  const mintNftButton = () => {
    return (
      <button onClick={mintNftHandler} className='cta-button mint-nft-button'>
        Mint moonturd!
      </button>
    )
  }

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    <div className='main-app'>
      <h1>moonturds</h1>
      <div>
        {currentAccount ? mintNftButton() : connectWalletButton()}
      </div>
    </div>
  )
}export default App;
