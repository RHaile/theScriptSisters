import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log('PrivateRoute user:', user);
    console.log('PrivateRoute loading:', loading);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        console.log('No user, redirecting to /login');
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;