import React from 'react';
import { useState ,useCallback} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Optional: For styling
const Navbar = () => {
  const checkMetaMask = () => {
    if (typeof window.ethereum === 'undefined') {
      alert('MetaMask is not installed. Please install it from: https://metamask.io/download.html');
    }
    else {
     console.log('MetaMask is installed!');
    
    } 
  };
  const [IsmodalOpen,setIsModalOpen] = useState(false);
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <nav className="navbar">
      {/* Left Side: Icon with Page Link */}
      <div className="navbar-left">
        <Link to="/" className="home">
          <img src="https://cdn-icons-png.flaticon.com/512/6899/6899938.png" alt="Logo" className="navbar-icon" />
          <span className="navbar-title">Supply Guard</span>
        </Link>
      </div>

      {/* Right Side: Dashboard, Status, Connect Wallet Buttons */}
      <div className="navbar-right">
        <Link to="/dashboard" className="navbar-link">
          Dashboard
        </Link>
        <Link to="/status" className="navbar-link">
          Status
        </Link>
        <button className="navbar-button" onClick={openModal} >
        Connect Wallet
        </button>
        
      {/* Portal */}
              {IsmodalOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <button className="close-button" onClick={closeModal}>X</button>
                    <input type="email" placeholder="Enter your email" style={{  margin: '0px',  width: '88%' ,height: ' 25px' ,borderRadius: '5px' } }  />
                  <div className='modal-options'>
                    <div className="modal-option">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/polygon-matic-icon.png " alt="metamask-icon"  className='modal-icon'/>
                    Polygon Mainnet</div>
                    <div className="modal-option">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png" alt="metamask-icon"  className='modal-icon'/>
                    Connect Metamask Wallet</div>
                    <div className="modal-option"> 
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/cashless-qr-code-payment-icon.png" alt="metamask-icon"  className='modal-icon'/>
                    Connect thorugh QR Code </div>
                    {/* <div className="modal-option">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png" alt="metamask-icon"  className='modal-icon'/>
                    Metamask Moblile QR Code</div> */}
                  </div>
                  </div>
                </div>
              )}
      </div>
    </nav>
  );
};

export default Navbar;