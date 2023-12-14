import axios from "axios";

export const baseApi = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": 'f31ffa20-0ff3-4086-b0e8-28ca7dcbaac2'
    }
})

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


// enum
export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
