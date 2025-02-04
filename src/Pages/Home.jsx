import React from 'react';
import { Link } from 'react-router-dom';
import './style/Home.css'
const Home = () => {
    return (
        
        <div id="main">
            <p id="Head">Supply Guard</p>
            <p id="subhead">Empowering communities through on-chain transactions safety. </p>
            <div className="container">
                <div className="box">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check w-12 h-12 text-teal-500"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    <h3>Distribute Funding Securely</h3>
                    <p>- Use blockchain.</p>
                    <p>- Provide encrypted s.</p>
                </div>
                <div className="box">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="pink" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users w-12 h-12 text-rose-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <h3>Grow your Community</h3>
                    <p>- Build trust through .</p>
                    <p>- Encourage user 
                    </p>
                </div>
                <div className="box">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="yellow" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb w-12 h-12 text-yellow-500"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                    <h3>Foster Innovation</h3>
                    <p>- Enable manufacturers </p>
                    <p>- Provide da</p>
                </div>
            </div>
                   

            <div id= "End">
                <div id="dash">
                    <Link to="/dashboard" className='custom-link'>Get Started -&gt;</Link>
                 </div>
        
    

            </div>
            <div className='more-info'>
                 <a href="https://jespublication.com/uploads/2024-V15I40104.pdf"> More Info</a>
                </div> 
        </div>
    );
};

export default Home;



