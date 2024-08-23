import { create } from 'zustand';

type ModalState = {
  modalTitle: string;
  isOpen: boolean;
  content: string;
  openModal: (title: string, content: string) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  modalTitle: '',
  isOpen: false,
  content: '',
  openModal: (title, content) =>
    set({ isOpen: true, modalTitle: title, content }),
  closeModal: () => set({ isOpen: false }),
}));
