import { useModalStore } from './useModalStore';

const Modal = () => {
  const { isOpen, title, content, closeModal } = useModalStore(
    (state) => state
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800/50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        className="rounded-lg shadow-lg p-6 w-full max-w-lg bg-white text-gray-900 dark:bg-woodsmoke-950 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center mb-10">{title}</h2>
        {content}
        <div className="modal-footer w-full flex justify-center items-center mt-10">
          <button className="button text-red-400" onClick={closeModal}>
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
