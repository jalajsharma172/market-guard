import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import useWeb3Context from "../context/useWeb3Context";
import { useContext } from "react";
import Web3Context from "../context/Web3Context";

import '../components/Navbar.css';

const Wallet = () => {
  console.log("Wallet Component");
  
  const { handleWallet, web3State } = useContext(Web3Context);
  const navigateTo = useNavigate();
  const { selectedAccount } = web3State;
  
  // Handle navigation when selectedAccount changes
  useEffect(() => {
    if (selectedAccount) {
      navigateTo("/status");
    }
  }, [selectedAccount, navigateTo]);

  
    return (
      <div className="modal-option" onClick={handleWallet} >
      {/* <div className="modal-option"  > */}
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png"
          alt="metamask-icon"
          className="modal-icon"
        />
        Connect Metamask Wallet
      </div>
    );
  };
  
  export default Wallet;