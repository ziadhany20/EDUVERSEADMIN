// src/Components/LoginSkeleton.tsx
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoginSkeleton: React.FC = () => {
  return (
    <div className="container">
      <div className="photo-section">
        <Skeleton height={200} width={200} />
      </div>
      <div className="form-section">
        <Skeleton height={40} width={150} />
        <Skeleton height={20} count={2} style={{ marginBottom: 10 }} />
        <Skeleton height={40} />
        <Skeleton height={40} />
        <div className="form-actions">
          <Skeleton width={120} height={30} />
          <Skeleton width={160} height={20} />
        </div>
        <Skeleton width={100} height={30} />
      </div>
    </div>
  );
};

export default LoginSkeleton;
