import React, { useState } from "react";
import AddNewTicket from "./AddNewTicket";
import ModalUI from "./ModalUI";

function Navbar({ setCardsData }) {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  return (
    <div className="navbar_container">
      <ModalUI open={openModal} close={toggleModal}>
        <AddNewTicket setCardsData={setCardsData} close={toggleModal} />
      </ModalUI>

      <h1>Platform Lunch</h1>
      <div className="nav_button">
        <button onClick={toggleModal}>
          <span style={{ fontSize: "18pt" }}>+</span> Add New Task
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-more-vertical"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
