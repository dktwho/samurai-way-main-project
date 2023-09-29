import axios from "axios";

const BASE_URL = `https://social-network.samuraijs.com/api/1.0/`
const settings = {
    withCredentials: true
}
const headers = {
    "API-KEY": "706d8068-13d3-44f9-aada-12ec1dbdb516"
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return axios.get(`${BASE_URL}users?page=${currentPage}&count=${pageSize}`, settings).then(res => res.data)
    },
    unfollow(user: any) {
        return axios.delete(`${BASE_URL}follow/${user.id}`, {
            ...settings, headers
        })
    },
    follow(user: any) {
        return axios.post(`${BASE_URL}follow/${user.id}`, {}, {
            ...settings, headers
        })
    },
    authMe() {
        return axios.get(`${BASE_URL}auth/me`, settings)
    }

}




