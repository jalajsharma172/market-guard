import { useEffect, useState } from "react";
import Web3Context  from "./Web3Context";
import { getWeb3State } from "../utils/getWeb3State";
// import { handleAccoutnChange } from "../utils/handleAccountChange";
// import { handleChainChange } from "../utils/handleChainChange";

const Web3Provider = ({ children }) => {
  
  const [web3State, setWeb3State] = useState({
    contractInstance: null,
    selectedAccount: null,
    chainId: null
  });
  
  const handleWallet = async () => {
    console.log("Wroking File WEb3 Provider");
    try {
      console.log("you clicked");
      
      const {contractInstance,selectedAccount,chainId} = await getWeb3State();
              setWeb3State({contractInstance,selectedAccount,chainId})

    } catch (error) {
      console.error(error);
    }
  };
  // console.log("Web3Provider initialized with:", { handleWallet, web3State });

  //   useEffect(()=>{
  //   window.ethereum.on('accountsChanged',()=>handleAccoutnChange(setWeb3State))
  //   window.ethereum.on('chainChanged',()=>handleChainChange(setWeb3State))
  // },[])

  return (
    <Web3Context.Provider value={{ handleWallet, web3State }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;