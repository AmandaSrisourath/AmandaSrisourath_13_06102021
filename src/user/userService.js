import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:3001/api/v1"
})

function login (email, password) {
    return client.post(`/user/login`, {
        email,
        password
    }).then(response => {
        console.log(response);
        return response?.data?.body?.token;
    }).catch(error => {
        console.log(error);
        return error;
        })
}

function getInfos (token) {
    return client.post(`/user/profile`, {
        header: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export default { login, getInfos };