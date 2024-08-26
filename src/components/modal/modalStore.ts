import { create } from 'zustand';

type State = {
  title: string;
  isOpen: boolean;
  content: string;
}

type Actios = {
  openModal: (title: string, content: string, onClose?: () => void) => void;
  closeModal: () => void;
  onCloseCallback?: () => void;
}

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


// code for create slice and use it in global store
// export const createModalSlice: StateCreator<ModalStore> = (set) => ({
//   title: '',
//   isOpen: false,
//   content: '',
//   onCloseCallback: undefined,
//   openModal: (title, content, onCloseCallback?: () => void) =>
//     set({ isOpen: true, title, content, onCloseCallback }),
//   closeModal: () =>
//     set((state) => {
//       if (state.onCloseCallback) {
//         state.onCloseCallback();
//       }
//       return { isOpen: false, onCloseCallback: undefined };
//     }),
// });
