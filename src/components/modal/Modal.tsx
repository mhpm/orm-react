import { useModalStore } from './modalStore';

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Modal = ({ title = 'Modal', children, onClose } : ModalProps) => {
  const { isOpen, content, modalTitle, closeModal } = useModalStore();

  if (!isOpen) return null;

  const handleClose = () => {
    closeModal();
    
    if(typeof onClose === 'function'){
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-woodsmoke-950 rounded-lg shadow-lg p-6 w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-center mb-10">{title || modalTitle}</h2>
        {children || content}
        <div className="modal-footer w-full flex justify-center items-center mt-10">
          <button className="button text-red-400" onClick={handleClose}>
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
