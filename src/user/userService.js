import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:3001/api/v1"
})

function login (email, password) {
    return client.post(`/user/login`, {
        email,
        password
    }).then(response => {
        // console.log(response);
        return response?.data?.body?.token;
    }).catch(error => {
        // console.log(error);
        return error;
        })
}

function getInfos (token) {
    return client.post(`/user/profile`, {
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        // console.log(response.data.body);
        return response?.data?.body;
    }).catch(error => {
        // console.log(error);
        return error;
    })
}

export default { login, getInfos };