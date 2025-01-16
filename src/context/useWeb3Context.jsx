import { useContext } from "react";
import Web3Context from "./Web3Context";

 const useWeb3Context =()=>{
    //useContext can return Web3Context from it self
    return useContext(Web3Context)
}
export default useWeb3Context;