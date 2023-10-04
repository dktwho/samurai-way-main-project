import axios from "axios";

const BASE_URL = `https://social-network.samuraijs.com/api/1.0/`
const settings = {
    withCredentials: true
}
const headers = {
    "API-KEY": "f31ffa20-0ff3-4086-b0e8-28ca7dcbaac2"
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return axios.get(`${BASE_URL}users?page=${currentPage}&count=${pageSize}`, settings).then(res => res.data)
    },
    unfollow(userId: number) {
        return axios.delete(`${BASE_URL}follow/${userId}`, {
            ...settings, headers
        })
    },
    follow(userId: number) {
        return axios.post(`${BASE_URL}follow/${userId}`, {}, {
            ...settings, headers
        })
    },
    authMe() {
        return axios.get(`${BASE_URL}auth/me`, settings)
    },
    getProfile(userId: number) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    }
}




