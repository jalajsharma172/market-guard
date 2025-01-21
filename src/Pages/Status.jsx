import React, { useContext } from 'react';
import Web3Context from '../context/Web3Context';
import './Dashboard.css';
const Status = () => {
        const name = "Supply Guard";
        const {handleWallet , web3State} = useContext(Web3Context);
        const {contractInstance,selectedAccount,chainId,ensName} = web3State;
    return(
        <>
        <div className='box'>
            <h1>Welcome {ensName} </h1>
            <h2>{selectedAccount}</h2>
            <h2>{chainId}</h2>
        </div>
        <div className="history-box">
            
        </div>
        </>
    )
}
export default Status;
