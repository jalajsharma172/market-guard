import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Optional: For styling

const Navbar = () => {
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
        <button className="navbar-button" onClick={() => alert('Connect Wallet Clicked!')}>
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;