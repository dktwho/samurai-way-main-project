import {ResponseProfileType} from "../components/Profile/ProfileContainer";
import {baseApi} from "./api";

export const profileAPI = {
    getProfile(userId: number) {
        return baseApi.get<ResponseProfileType>(`profile/${userId}`)
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
    saveProfile(profile: ResponseProfileType) {
        return baseApi.put(`profile`, profile)
    }
}