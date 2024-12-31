import { useCurrentUser } from '@/hooks/useCurrentUser';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useCurrentUser();
  if (!isAuthenticated && !loading) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
