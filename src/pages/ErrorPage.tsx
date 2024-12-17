import { Button } from '@/components/ui/button';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
  const error = useRouteError();
  console.error('Route Error:', error);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4em"
          height="4em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#ffffff"
            d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="text-lg mt-4">
        An unexpected error occurred.
        <br /> Please try refreshing the page or come back later.
      </p>
      <details className="text-gray-500 mt-2">
        {error instanceof Error ? error.message : 'Unknown error occurred.'}
      </details>
      <Button
        onClick={() => window.location.reload()}
        className="mt-6 rounded-lg"
      >
        Reload
      </Button>
    </div>
  );
};

export default ErrorPage;
