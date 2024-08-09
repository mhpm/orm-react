import { UserList } from '@/components';
import { useModalContext } from '@/components/modal/ModalContext';

function UserPage() {
  const { openModal } = useModalContext();

  const handleClick = () => {
    openModal(
      'Title',
      <div className='text-center'>
        <p>This is dynamic content for the modal.</p>
      </div>
    );
  };

  return (
    <div className="block justify-center w-full p-10">
      <button className="button w-full" onClick={handleClick}>
        Open Modal
      </button>
      <UserList />
    </div>
  );
}

export default UserPage;
