import { useModalStore } from './useModalStore';

export const useModal = () => {
  const { openModal } = useModalStore((state) => state);

  return { openModal };
};
