import React from 'react';
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
import './dashboard.css'; // Optional: For styling
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
          {/* <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/metamask-icon.png" alt="meta" /> */}
      
        <p className='head'>Welcome to the SupplyGuard!</p>
        <p className='subhead'>Let's get you started with marketing</p>
        <div className="manu">
          <p className="manu-head ">Start your journey by exploring our community spaces.</p>
          <div className="account">
      
            <Link to="/create/Manu_account" className ='Manu-acc'>Create Manufacturer Account</Link>
            <Link to="/create/User_account" className ='User-acc'>Create User Account</Link>
            </div>
        </div>
   
    </div>

      
    </div>  
  );
};

export default Dashboard;