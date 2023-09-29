import axios from "axios";

export const getUsers = (currentPage: number, pageSize: number) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {withCredentials: true}).then(res => res.data)
}

export const unfollow = (user: any) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
        withCredentials: true, headers: {
            "API-KEY": "706d8068-13d3-44f9-aada-12ec1dbdb516"
        }
    })
}


export const follow = (user: any) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
        withCredentials: true, headers: {
            "API-KEY": "706d8068-13d3-44f9-aada-12ec1dbdb516"
        }
    })
}

