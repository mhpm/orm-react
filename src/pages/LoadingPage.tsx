import { Spinner } from '@/components';
import { memo } from 'react';

const LoadingPage = memo(() => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center">
      <Spinner size="2.5em" />
    </div>
  );
});

export default LoadingPage;
