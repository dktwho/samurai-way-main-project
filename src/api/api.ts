import axios from "axios";

export const baseApi = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": 'f31ffa20-0ff3-4086-b0e8-28ca7dcbaac2'
    }
})

// enum
export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

