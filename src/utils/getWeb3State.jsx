import { ethers, Wallet } from "ethers";
import abi from "../contants/abi.json";


// Blockchain Code
export const getWeb3State = async () => {
  // const PRIVATE_KEY='';
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

    // Get the selected account from the MetaMask wallet
    const selectedAccount = accounts[0];

    // Get the chain ID
    const chainIdHex = await window.ethereum.request({
      method: "eth_chainId",
    });
    const chainId = parseInt(chainIdHex, 16); // Convert chainId to decimal

    console.log("Account: " + selectedAccount);
    console.log("ChainID: " + chainId);

    // Access the private key from environment variables
    // const privateKey = process.env.PRIVATE_KEY;
    const privateKey = PRIVATE_KEY;
    if (!privateKey) {
      throw new Error("Environment variable REACT_APP_PRIVATE_KEY is missing.");
    }
    console.log("Private Key: " + privateKey);

    // Set up the provider using MetaMask's Ethereum provider
    const provider = new ethers.JsonRpcProvider(
      "https://ethereum-sepolia-rpc.publicnode.com"
    );

    // Create a wallet instance with the private key and provider
    const wallet = new Wallet(privateKey, provider);

    // Contract details
    const contractAddress = "0xb31BA5cDC07A2EaFAF77c95294fd4aE27D04E9CA";
    const contractInstance = new ethers.Contract(contractAddress, abi, wallet);

    console.log("Contract Instance: ", contractInstance);

    // Resolve ENS name associated with the selected account
    const ensName = await provider.lookupAddress(selectedAccount);

    return { contractInstance, selectedAccount, chainId, ensName };
  } catch (error) {
    console.error("Error in getWeb3State:", error.message || error);
    throw error;
  }
};
