import { useModalStore } from './modalStore';

export const useModal = () => {
  const { isOpen, title, content, openModal, closeModal } = useModalStore(
    (state) => state
  );

  return { isOpen, title, content, openModal, closeModal };
};
