// src/context/ModalContext.tsx
import { createContext, useContext, ReactNode } from 'react';
import useModal, { UseModalType } from './useModal';

interface ModalContextType extends UseModalType {}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const modal = useModal();
  return (
    <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};
