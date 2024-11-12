import { useModal } from '@/components/modal/useModal';
import UserList from '@/modules/users/components/UserList';

function UserPage() {
  const { openModal } = useModal();

  return (
    <div className="block justify-center w-full p-10">
      <button
        className="button"
        onClick={() =>
          openModal(
            'My New Title',
            <div>
              Hello <p>paragraophe</p>
            </div>,
            () => console.log('modal closed')
          )
        }
      >
        Open modal
      </button>
      <UserList />
    </div>
  );
}

export default UserPage;
