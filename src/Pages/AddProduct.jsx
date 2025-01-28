// Price | Name  | Expiry Date | Manufacturing Date | Location
import { useRef ,useState,useContext } from "react";
import Web3Context from "../context/Web3Context";
import './style/account.css'

const AddProduct = () => {
  const { web3State } = useContext(Web3Context);
  const { contractInstance, selectedAccount } = web3State;

  const ProductRef = useRef(null);
  const PriceRef = useRef(null);
  const LocationRef = useRef(null);
  const [message, setMessage] = useState(null);

  const inputReader = async (e) => {
    e.preventDefault();

    const productName = ProductRef.current.value;
    const productPrice = PriceRef.current.value;
    const productLocation = LocationRef.current.value;

    // if (!productName || !productPrice || !productLocation) {
    //   alert("Please fill in all the fields");
    //   return;
    // }

    if (!contractInstance) {
      alert("Connect Wallet!");
      return;
    }

    try {
      // 1. Add the product to MongoDB via the backend API
      const dbResponse = await axios.post("http://localhost:5000/addProduct", {
        name: productName,
        price: productPrice,
        location: productLocation,
      });
      console.log("Product added to DB:", dbResponse.data);

      // 2. Add the product to the blockchain
      await contractInstance.methods.Add_Products(productName).send({ from: selectedAccount });
      setMessage(`Product created successfully: ${productName}`);
      console.log("Product added to blockchain");

    } catch (error) {
      console.error("Error adding product:", error.message);
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
