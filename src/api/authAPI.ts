import {baseApi, ResultCodeEnum, ResultCodeForCaptcha} from "./api";

 type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    }
    resultCode: ResultCodeEnum
    messages: string[]
}
 type LoginResponseType = {
    data: {
        userId: number,
        email: string,
        login: string
    }
    resultCode: ResultCodeEnum | ResultCodeForCaptcha
    messages: string[]
}
export const authAPI = {
    authMe() {
        return baseApi.get<MeResponseType>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return baseApi.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha})
    },
    logOut() {
        return baseApi.delete(`auth/login`)
    }
}