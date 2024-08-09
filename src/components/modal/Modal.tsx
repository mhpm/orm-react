// src/components/Modal.tsx
import React from 'react';
import { useModalContext } from './ModalContext';

const Modal: React.FC = () => {
  const { modalState, closeModal } = useModalContext();

  if (!modalState.isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-woodsmoke-950 rounded-lg shadow-lg p-6 w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center mb-10">{modalState.title}</h2>
        {modalState.content}
        <div className="modal-footer w-full flex justify-center items-center mt-10">
          <button className="button text-red-400" onClick={closeModal}>
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
