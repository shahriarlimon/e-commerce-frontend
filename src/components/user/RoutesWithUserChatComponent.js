import React from 'react';
import { Outlet } from 'react-router-dom';
import UserChatComponents from './UserChatComponents';

const RoutesWithUserChatComponent = () => {
    return (<>
        <UserChatComponents />
        <Outlet />
    </>)
};

export default RoutesWithUserChatComponent;