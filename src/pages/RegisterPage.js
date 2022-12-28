import axios from "axios";
import { useDispatch } from 'react-redux'
import RegisterPageComponent from "./components/RegisterPageComponent";
import { setReduxUserState } from '../redux/actions/UserActions';
const registerUserApiRequest = async (firstName, lastName, email, password) => {
    const { data } = await axios.post("http://localhost:4000/api/v1/users/register", { firstName, lastName, email, password }, { withCredentials: true })
    if (data.user) {
        sessionStorage.setItem("userInfo", JSON.stringify(data.user))
    }
    if (data.success === 'user created' && !data.user.isAdmin) {
        window.location.href = "/user"
    }
    return data;
}

const RegisterPage = () => {
    const dispatch = useDispatch()

    return (
        <RegisterPageComponent setReduxUserState={setReduxUserState} dispatch={dispatch} registerUserApiRequest={registerUserApiRequest} />
    );
};

export default RegisterPage;