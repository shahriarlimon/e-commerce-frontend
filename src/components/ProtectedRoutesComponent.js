import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import UserChatComponents from './user/UserChatComponents';

const ProtectedRoutesComponent = ({ admin }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/get-token", {
        withCredentials: true,
        headers: {
          crossDomain: true,
          'Content-Type': 'application/json',
          credentials: 'include',
        },
      })
      .then((data) => {
        if (data?.data?.token) {
          setIsAuth(true);
          setIsAdmin(data.data.isAdmin);
        } else {
          setIsAuth(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (isAuth === null) return <LoginPage />;
  if (isAuth && !isAdmin) {
    return (
      <>
        <UserChatComponents />
        <Outlet />
      </>
    );
  }
  if (isAuth && isAdmin) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoutesComponent;









/* import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import UserChatComponents from './user/UserChatComponents';

const ProtectedRoutesComponent = ({ admin }) => {
    const navigate = useNavigate()
    const [isAuth, setIsAuth] = useState();
    const [isAdmin, setIsAdmin] = useState()

    useEffect(() => {
        axios
            .get(
                "http://localhost:4000/api/v1/get-token",
                {
                    withCredentials: true,
                    headers: { crossDomain: true, 'Content-Type': 'application/json', credentials: 'include' },
                },
            ).then(function (data) {
                if (data?.data?.token) {
                    setIsAuth(data.data.token)
                    setIsAdmin(data.data.isAdmin)
                }
                return isAuth
            })
    }, [isAuth])

    if (isAuth === undefined) return <LoginPage />
    if (isAuth && !isAdmin) {
        return <><><UserChatComponents /><Outlet /></></>
    } else if (isAuth && isAdmin) {
        return <Outlet />
    }


    return isAuth && admin && !isAuth !== "admin" ? (<Navigate to="/login" />) : isAuth && admin ? (<Outlet />) : isAuth && !admin ? (<><UserChatComponents /><Outlet /></>) : (<Navigate to="/login" />)



};

export default ProtectedRoutesComponent;



 /* if (admin) {
        let adminAuth = true
        return adminAuth ? <Outlet /> : <Navigate to={"/login"} />
    } else {
        let userAuth = true;
        return userAuth ? <><UserChatComponents /> <Outlet /></> : <Navigate to={"/login"} />
    } */ 