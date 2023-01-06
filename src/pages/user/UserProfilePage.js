
import UserProfilePageComponent from './components/UserProfilePageComponent';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setReduxUserState } from '../../redux/actions/UserActions';


const UserProfilePage = () => {
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.userRegisterLogin.userRegisterLogin);
    const fetchUser = async (id) => {
        const { data } = await axios.get(`http://localhost:4000/api/v1/users/profile/${id}`, {
            withCredentials: true,
            headers: {
              crossDomain: true,
              'Content-Type': 'application/json',
              credentials: 'include',
            },
          })
        return data;
    };
    const updateUserApiRequest = async (firstName, lastName, phoneNumber, address, country, zipCode, city, state, password) => {
        const { data } = await axios.put("http://localhost:4000/api/v1/users/update-profile", { firstName, lastName, phoneNumber, address, country, zipCode, city, state, password }, {
            withCredentials: true,
            headers: {
              crossDomain: true,
              'Content-Type': 'application/json',
              credentials: 'include',
            },
          })
        return data;
    };

    return (<UserProfilePageComponent
        dispatch={dispatch}
        setReduxUserState={setReduxUserState}
        userInfo={userInfo} 
        fetchUser={fetchUser}
        updateUserApiRequest={updateUserApiRequest}
        localStorage={window.localStorage}
        sessionStorage={window.sessionStorage}
    />)

};

export default UserProfilePage;