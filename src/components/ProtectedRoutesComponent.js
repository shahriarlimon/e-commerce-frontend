import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserChatComponents from './user/UserChatComponents';

const ProtectedRoutesComponent = ({ admin }) => {
    if (admin) {
        let adminAuth = true
        return adminAuth ? <Outlet /> : <Navigate to={"/login"} />
    } else {
        let userAuth = true;
        return userAuth ? <><UserChatComponents /> <Outlet /></> : <Navigate to={"/login"} />
    }

};

export default ProtectedRoutesComponent;