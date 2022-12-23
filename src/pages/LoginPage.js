
import LoginPageComponent from './components/LoginPageComponent';
import axios from 'axios';
const loginUserApiRequest = async (email, password, doNotLogout) => {
    const { data } = await axios.post("http://localhost:4000/api/v1/users/login", { email, password, doNotLogout })
    console.log(data,"got res back")
    return data;
}

const LoginPage = () => {


    return <LoginPageComponent loginUserApiRequest={loginUserApiRequest} />
};

export default LoginPage;