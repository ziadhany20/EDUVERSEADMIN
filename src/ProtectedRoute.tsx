// src/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Sidebar from './Components/Sidebar';

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        {element}
      </div>
    </div>
  );
};

export default ProtectedRoute;
