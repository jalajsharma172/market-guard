export const handleAccoutnChange=async(setWeb3State)=>{
    const accounts=await window.ethereum.request({
        method:"eth_requestAccounts"
    })
    
    const selectedAccount =accounts[0];
    console.log("Account changed to "+selectedAccount+" .");
    setWeb3State((prevState)=>({...prevState,selectedAccount}))
}