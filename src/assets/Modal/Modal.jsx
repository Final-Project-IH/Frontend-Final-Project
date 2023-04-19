import ReactModal from 'react-modal';
import React from 'react';

const Modal = ({ isOpen, handleClose }) => {
    return (
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleClose}
        contentLabel="Modal"
      >
        <h2>Mi Modal</h2>
        <p>Este es el contenido de mi modal.</p>
        <button onClick={handleClose}>Cerrar</button>
      </ReactModal>
    );
  };

export default Modal;