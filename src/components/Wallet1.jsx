import React, { useState } from 'react';

function Wallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
        <button type="button" onClick={openModal()}> Connect Wallet</button>

        {/* {isModalOpen && (
          <div>
            <div>
              <button type="button" onClick={closeModal()}></button>
            </div>
            <div>
              <p>Connect your wallet</p>
            </div>
            <div>
              <button type="button">Connect</button>
            </div>
          </div>
        )
        } */}


    </>
  )
      };

export default Wallet;
