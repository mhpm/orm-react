import { create } from 'zustand';

type State = {
  title: string;
  isOpen: boolean;
  content: React.ReactNode;
};

type Actios = {
  openModal: (
    title: string,
    content: React.ReactNode,
    onClose?: () => void
  ) => void;
  closeModal: () => void;
  onCloseCallback?: () => void;
};

type ModalStore = State & Actios;

export const useModalStore = create<ModalStore>((set) => ({
  title: '',
  isOpen: false,
  content: '',
  onCloseCallback: undefined,
  openModal: (title, content, onCloseCallback?: () => void) =>
    set({ isOpen: true, title, content, onCloseCallback }),
  closeModal: () =>
    set((state) => {
      if (state.onCloseCallback) {
        state.onCloseCallback();
      }
      return { isOpen: false, onCloseCallback: undefined };
    }),
}));
