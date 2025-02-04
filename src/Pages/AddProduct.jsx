// Price | Name  | Expiry Date | Manufacturing Date | Location
import { useRef ,useState,useContext } from "react";
import Web3Context from "../context/Web3Context";
import './style/account.css'
import axios from "axios";
import useWeb3Context from '../context/useWeb3Context'
const AddProduct = () => {
  const { web3State } = useContext(Web3Context);
  const {contractInstance,selectedAccount,contract}=web3State;


  const ProductRef = useRef(null);
  const PriceRef = useRef(null);
  const LocationRef = useRef(null);
  const [message, setMessage] = useState(null);



  const inputReader = async (e) => {
    e.preventDefault();

    const productName = ProductRef.current.value;
    const productPrice = PriceRef.current.value;

   
    try {
      if (!contractInstance) {
        alert("Connect Wallet!");
        return;
      }  

      console.log("selectedAccount : "+selectedAccount);
      console.log(contractInstance);
      console.log("productName : "+productName);
        await contractInstance.Add_Products(productName);
        console.log("Blockchain me Added . ");
        const id =await contract.getID();
        // console.log(id);
        // console.log(Number(id));

          // console.log("Product ID:", id);

          console.log("Product added to blockchain");


      // 2. Add the product to MongoDB via the backend API
      // const dbResponse = await axios.post("http://localhost:5000/addProduct", {
      //   productID: 100,
      //   productName: productName,
      //   productPrice: productPrice,
      // });
      // console.log("Product added to DB:", dbResponse.data);

 

    } catch (error) {
      console.error("Product ID Generation issue:", error);
      console.error("Error adding product in Db: ", error.message);
      setMessage("Error adding product");
    }
  };

  return (
    <>
      <div className="form">
        <h1>Add Product</h1>
        <form onSubmit={inputReader}>
          <label>
            Product Name:
            <input type="text" ref={ProductRef} />
          </label>
          <label>
            Price:
            <input type="number" ref={PriceRef} />
          </label>
          <label>
            Location:
            <input type="text" ref={LocationRef} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      {message && <p style={{ marginTop: "20px", color: "#28a745" }}>{message}</p>}
    </>
  );
};

export default AddProduct;
