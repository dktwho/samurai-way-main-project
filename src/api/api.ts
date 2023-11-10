import axios from "axios";
//
// const settings = {
//     withCredentials: true,
//     "API-KEY": "f31ffa20-0ff3-4086-b0e8-28ca7dcbaac2"
// };



const baseApi = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": 'f31ffa20-0ff3-4086-b0e8-28ca7dcbaac2'
    }
})

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

export const profileAPI = {
    getProfile(userId: number) {
        return baseApi.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return baseApi.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return baseApi.put(`profile/status`, {status})
    },
    savePhoto(file: any) {
        let formData = new FormData()
        formData.append('image', file)
        return baseApi.put(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data',
            }
        })
    },
    saveProfile(profile: any) {
        return baseApi.put(`profile`, profile)
    }
}

export const authAPI = {
    authMe() {
        return baseApi.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return baseApi.post(`auth/login`, {email, password, rememberMe})
    },
    logOut() {
        return baseApi.delete(`auth/login`)
    }
}



