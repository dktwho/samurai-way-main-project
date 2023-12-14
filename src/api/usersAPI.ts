import {baseApi} from "./api";
import {profileAPI} from "./profileAPI";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return baseApi.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return baseApi.delete(`follow/${userId}`)
    },
    follow(userId: number) {
        return baseApi.post(`follow/${userId}`, {})
    },
    getProfile(userId: number) {
        console.warn('Obselete method. Please use profileAPI object ')
        return profileAPI.getProfile(userId)
    }
}