import { useParams } from 'react-router-dom';

function EditUserPage() {
  const { id } = useParams();

  return (
    <div className="main h-[100vh] w-[100vw]">
      <div className="flex justify-center w-full p-[20px]">
        <div>
          EditUserPage: {id}
        </div>
      </div>
    </div>
  );
}

export default EditUserPage;
