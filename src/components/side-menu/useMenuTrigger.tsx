import { create } from 'zustand';

type State = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const useMenuTrigger = create<State>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));
