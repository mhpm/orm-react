import { Outlet } from 'react-router';

const ChallengePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-10 w-full">
      <Outlet />
    </div>
  );
};

export default ChallengePage;
