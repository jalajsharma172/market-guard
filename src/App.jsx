import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import ManuAccount from './Pages/ManuAccount';
import UserAccount from './Pages/UserAccount';
import Status from './Pages/Status';
import Wallet from './components/Wallet';
import Web3Provider from './context/Web3Provider';
import Navbar from './components/navbar';
function App() {
    // Web3Provider({Wallet});

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/create/Manu_account", element: [<Navbar/>,<ManuAccount />] },
    { path: "/create/User_account", element: [<Navbar/>,<UserAccount />] },
    {path:"/status",element:[<Navbar/>,<Status/>]}
    ]
);

  return (
    <div>
      <Web3Provider>
         {/* <Wallet/> */}
      <RouterProvider router={router} />
    </Web3Provider>
  
    </div>
  );
}

export default App;
