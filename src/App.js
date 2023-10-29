import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Navbar from "./components/Navbar/Navbar";
import CreateNft from "./components/CreateNFT/CreateNft";
import Web3ModalProvider from "./contexts/Web3ModalProvider";
import { Web3ModalContext } from "./contexts/Web3ModalProvider";
import { useState, useEffect } from "react";

import { ethers } from "ethers";
import { contractAbi, contractAddress } from "./Constant/constant";

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  async function getNFTs() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    const voteStatus = await contractInstance.voters(await signer.getAddress());
    console.log(voteStatus);
  }
getNFTs()
  return (
    <>
      <div className="bg-gray-900">
        <Web3ModalProvider>
          <BrowserRouter>
            <Navbar Web3ModalContext={Web3ModalContext} />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/create" element={<CreateNft />} />
            </Routes>
          </BrowserRouter>
        </Web3ModalProvider>
      </div>
    </>
  );
}

export default App;
