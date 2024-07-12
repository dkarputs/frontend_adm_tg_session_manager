// src/components/ProtectedRoute.tsx

import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/auth';

interface ProtectedRouteProps {
    element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
    return getToken() ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
