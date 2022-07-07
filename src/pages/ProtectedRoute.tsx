import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useUserAuth();

  console.log('Check user in Private: ', user);
  if (!user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;