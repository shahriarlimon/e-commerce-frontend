
import LoginPageComponent from './components/LoginPageComponent';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setReduxUserState } from '../redux/actions/UserActions';
const loginUserApiRequest = async (email, password, doNotLogout) => {
    const { data } = await axios.post("http://localhost:4000/api/v1/users/login", { email, password, doNotLogout }, { withCredentials: true })
    if (data.userLoggedIn.doNotLogout) {
        localStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn))
    } else {
        sessionStorage.setItem("userInfo", JSON.stringify(data.userLoggedIn))
    }
    return data;
}

const LoginPage = () => {

    const dispatch = useDispatch()
    return <LoginPageComponent setReduxUserState={setReduxUserState} dispatch={dispatch} loginUserApiRequest={loginUserApiRequest} />
};

export default LoginPage;