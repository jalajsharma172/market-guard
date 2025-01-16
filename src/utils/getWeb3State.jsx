import { ethers } from "ethers";
import abi from "../contants/abi.json";

// Blockchain Code
export const getWeb3State = async () => {
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

    // Set up the provider using MetaMask's Ethereum provider
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    const provider = new ethers.JsonRpcProvider('https://ethereum-sepolia-rpc.publicnode.com');
    const signer = provider.getSigner();

    // Contract details
    const contractAddress = "0x5A86858aA3b595FD6663c2296741eF4cd8BC4d01";
    const contractInstance = new ethers.Contract(contractAddress, abi, signer);

    console.log("Contract Instance: ", contractInstance);

    // Return the contract instance, selected account, and chain ID
    return { contractInstance, selectedAccount, chainId };
  } catch (error) {
    console.error("Error in getWeb3State:", error.message || error);
    alert("An error occurred while fetching Web3 state. Check the console for details.");
    throw error; // Re-throw the error to handle it in calling code
  }
};
