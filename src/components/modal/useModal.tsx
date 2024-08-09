// src/hooks/useModal.ts
import { useState, useCallback } from 'react';

export interface ModalState {
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
}

const useModal = () => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    title: '',
    content: null,
  });

  const openModal = useCallback((title: string, content: React.ReactNode) => {
    setModalState({ isOpen: true, title, content });
  }, []);

  const closeModal = useCallback(() => {
    setModalState({ isOpen: false, title: '', content: null });
  }, []);

  return {
    modalState,
    openModal,
    closeModal,
  };
};

export type UseModalType = ReturnType<typeof useModal>;

export default useModal;
