import { Modal, UserList } from '@/components';
import { useState } from 'react';

function UserPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="block justify-center w-full p-10">
      <button className="button w-full" onClick={openModal}>
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <p>This is a reusable modal using portal.</p>
        <button
          className="button text-red-400 mt-10"
          onClick={closeModal}
        >
          Close Modal
        </button>
      </Modal>
      <UserList />
    </div>
  );
}

export default UserPage;
