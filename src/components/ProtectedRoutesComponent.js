import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import UserChatComponents from './user/UserChatComponents';

const ProtectedRoutesComponent = ({ admin }) => {
    const navigate = useNavigate()

    /*   if (admin) {
          let adminAuth = true
          return adminAuth ? <Outlet /> : <Navigate to={"/login"} />
      } else {
          let userAuth = true;
          return userAuth ? <><UserChatComponents /> <Outlet /></> : <Navigate to={"/login"} />
      } */
    const [isAuth, setIsAuth] = useState();
    useEffect(() => {
        axios.get("http://localhost:4000/api/v1/get-token", { withCredentials: true, headers: { crossDomain: true, 'Content-Type': 'application/json' } }).then(function (data) {
            if (data?.data?.token) {
                setIsAuth(data.data.token)
            }
            return isAuth
        })
    }, [isAuth])

    if (isAuth === undefined) return <LoginPage />
    return isAuth && admin && !isAuth !== "admin" ? (<Navigate to="/login" />) : isAuth && admin ? (<Outlet />) : isAuth && !admin ? (<><UserChatComponents /><Outlet /></>) : (<Navigate to="/login" />)





};

export default ProtectedRoutesComponent;