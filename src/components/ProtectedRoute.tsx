import { Navigate, useLocation } from 'react-router';
import { useAuth } from '@clerk/clerk-react'; // Adjust based on your auth library

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useAuth(); // Replace with your actual auth check
  const location = useLocation();

  if (!isSignedIn) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
