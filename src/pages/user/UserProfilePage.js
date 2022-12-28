
import UserProfilePageComponent from './components/UserProfilePageComponent';
import axios from 'axios'

const UserProfilePage = () => {
    const updateUserApiRequest = async (firstName, lastName, phoneNumber, address, country, zipCode, city, state, password) => {
        const { data } = await axios.put("http://localhost:4000/api/v1/users/update-profile", { firstName, lastName, phoneNumber, address, country, zipCode, city, state, password }, { withCredentials: true })
        return data;
    }

    return (<UserProfilePageComponent updateUserApiRequest={updateUserApiRequest} />)
};

export default UserProfilePage;