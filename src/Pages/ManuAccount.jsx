import { useRef ,useState,useContext } from "react";
import Web3Context from "../context/Web3Context";
import './style/account.css'
import { useNavigate } from "react-router-dom";
const ManuAccount = ()=>{

    const {web3State}=useContext(Web3Context)
    const {contractInstance,selectedAccount}=web3State;
    const navigateTo = useNavigate();

    const nameRef=useRef(null);
    const locationRef=useRef(null);
    const genderRef=useRef(null);
    const phoneRef=useRef(null);
    const [message, setMessage] = useState(null);
  // Handle navigation when selectedAccount changes
    const inputReader = async(e)=>{
        try {
                e.preventDefault();  //Will Prevent Refereace.
                const name=nameRef.current.value;
                const location=locationRef.current.value;
                const phone = phoneRef.current.value;
                const gender=genderRef.current.value;3
                if(!name || !phone){
                    alert("Please fill in all the fields");
                    return;
                }
               if(!contractInstance){
                    alert("Connect Wallet!");
                    return;
                }
                console.log("Manufacturer Address: ", selectedAccount);
                console.log("Form Data: ", name,phone,location);
                console.log(contractInstance);
                await contractInstance.register_for_Manu(name);
                    setMessage(`Account created successfully for Manufacturer: ${name}.`);

            console.log("Registeration is Successfull");
            navigateTo("/manu/AddProducts");
                
            } catch (error) {
                console.error("Registeration NOT Successfull");
                console.error(error.message );
            }
        }

    
    return(
        <>
       
        <div className="form">
        <h1>Create Manufactuere Account</h1>
        <form onSubmit={inputReader}>
            <label>Full Name :
                <input type="text" ref={nameRef} />
            </label>
            <label>Gender :
                <input type="text" ref={genderRef} />
            </label>
            <label>Phone Number :
                <input type="number" ref={phoneRef} />
            </label>
            <label>Location :
                <input type="text" ref={locationRef} />
            </label>
            <button type="submit">Submit it </button>
        </form>
        </div>
        
        {message && <p style={{ marginTop: '20px', color: '#28a745' }}>{message}</p>}
        </>
    )
}
export default ManuAccount;