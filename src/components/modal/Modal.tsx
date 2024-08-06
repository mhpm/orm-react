// src/components/Modal.tsx
import React from 'react';
import Portal from '../Portal';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 bg-woodsmoke-950 bg-opacity-75 flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div
          className="bg-woodsmoke-900 rounded-lg shadow-lg p-6 w-full max-w-lg text-center"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
