import { ethers, Wallet } from "ethers";
import abi from "../contants/abi.json";
import { VITE_PRIVATE_KEY, VITE_CONTRACT_ADDRESS } from "../contants/env";

// Blockchain Code
export const getWeb3State = async () => {
  const PRIVATE_KEY = VITE_PRIVATE_KEY;
  try {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      console.error("MetaMask is not installed");
      alert("MetaMask is not installed");
      throw new Error("MetaMask is not installed");
    }

    // Request MetaMask account
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const selectedAccount = accounts[0];

    console.log("Account: " + selectedAccount);
    
    // Get the chain ID from MetaMask
    const chainIdHex = await window.ethereum.request({
      method: "eth_chainId",
    });
    const chainId = parseInt(chainIdHex, 16);
    console.log("ChainID: " + chainId);

    // Access the private key
    const privateKey = PRIVATE_KEY;
    if (!privateKey) {
      throw new Error("Private key is missing.");
    }

    // Set up the provider using MetaMask's provider
    const provider = new ethers.BrowserProvider(window.ethereum);

    // Create a wallet instance with the private key and provider
    const wallet = new Wallet(privateKey, provider);

    // Contract details
    const contractAddress = VITE_CONTRACT_ADDRESS;
    const contractInstance = new ethers.Contract(contractAddress, abi, wallet);

    console.log("Contract Instance: ", contractInstance);

    // Resolve ENS name associated with the selected account
    const ensName = await provider.lookupAddress(selectedAccount);
    const contract = new ethers.Contract(contractAddress, abi, provider);
    
    return { contractInstance, selectedAccount, contract, chainId, ensName };
  } catch (error) {
    console.error("Error in getWeb3State:", error.message || error);
    throw error;
  }
};

