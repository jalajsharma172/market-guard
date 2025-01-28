import React from 'react';
import {  RouterProvider } from 'react-router-dom';
import router from './routes/router';
import Web3Provider from './context/Web3Provider';
function App() {
  return (
    <div>
      <Web3Provider>
      <RouterProvider router={router} />
    </Web3Provider>
  
    </div>
  );
}

export default App;
