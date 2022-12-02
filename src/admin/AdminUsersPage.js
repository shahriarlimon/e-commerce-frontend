import UserPageComponent from "./components/UsersPageComponent";
import axios from 'axios'


const fetchUsers = async (abctrl) => {
    const { data } = await axios.get("http://localhost:4000/api/v1/users/", {
        signal: abctrl.signal
    });
    return data;
}

const deleteUser = async (userId) => {
    const { data } = await axios.delete(`http://localhost:4000/api/v1/users/${userId}`);
    return data;
}

const AdminUsersPage = () => {

    return <UserPageComponent deleteUser={deleteUser} fetchUsers={fetchUsers} />
};

export default AdminUsersPage;