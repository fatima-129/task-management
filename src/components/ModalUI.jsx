import React from "react";
import { default as Modal, default as ReactModal } from "react-modal";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    height: "max-content",
    width: "max-content",
    borderRadius: "8,spx",
    transform: "translate(-50%, -50%)",
    background: "transparent",
    padding: "0px",
  },
};

const ModalUI = ({ open, close, children }) => {
  return (
    <Modal isOpen={open} onRequestClose={close} style={customStyles}>
      {children}
    </Modal>
  );
};

export default ModalUI;
