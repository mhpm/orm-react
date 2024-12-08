import Spinner from './Spinner';

interface LoadingWrapperProps {
  isLoading: boolean;
  size?: string;
  children: React.ReactNode;
  className?: string;
}

const LoadingWrapper = ({
  isLoading,
  size,
  children,
  className,
}: LoadingWrapperProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 z-20 flex justify-center items-center bg-black bg-opacity-50">
          <Spinner size={size} />
        </div>
      )}
    </div>
  );
};

export default LoadingWrapper;
