import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import PrivateRoute from './PrivateRoute';

function IndexRoute(props) {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                
                <Route path="/profile" element={<PrivateRoute>
                        <ProfilePage />
                    </PrivateRoute>} />
                </Route>

            

            <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
    );
}

export default IndexRoute;