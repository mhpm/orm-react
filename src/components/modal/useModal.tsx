import { useModalStore } from './modalStore';

export const useModal = () => {
  const openModal = useModalStore((state) => state.openModal);
  const closeModal = useModalStore((state) => state.closeModal);
  return { openModal, closeModal };
};