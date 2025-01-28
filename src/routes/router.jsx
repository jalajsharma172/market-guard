import React from 'react';
import {  RouterProvider } from 'react-router-dom';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';
import ManuAccount from '../Pages/ManuAccount';
import UserAccount from '../Pages/UserAccount';
import Status from '../Pages/Status';
import Navbar from '../components/navbar';
import { createBrowserRouter } from 'react-router-dom';
import AddProduct from '../Pages/AddProduct';
import ViewProducts from '../Pages/ViewProducts'
const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/create/Manu_account", element: [<Navbar/>,<ManuAccount />] },
    { path: "/create/User_account", element: [<Navbar/>,<UserAccount />] },
    {path:"/status",element:[<Navbar/>,<Status/>]},
    {path:"/manu/AddProducts",element:[<Navbar/>,<AddProduct/>]},
    {path:"/manu/ViewProducts",element:[<Navbar/>,<ViewProducts/>]}
    
]
);
export default router;