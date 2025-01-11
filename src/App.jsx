import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import ManuAccount from './Pages/ManuAccount';
import UserAccount from './Pages/UserAccount';
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/create/Manu_account", element: <ManuAccount /> },
    { path: "/create/User_account", element: <UserAccount /> }
  ]);
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
