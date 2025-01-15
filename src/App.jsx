import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import ManuAccount from './Pages/ManuAccount';
import UserAccount from './Pages/UserAccount';
// import Wallet from './components/Wallet';
import Wallet1 from './components/Wallet1';
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/create/Manu_account", element: <ManuAccount /> },
    { path: "/create/User_account", element: <UserAccount /> },
    { path: "/connect/wallet", element: <Wallet1 /> }
  ]);
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
