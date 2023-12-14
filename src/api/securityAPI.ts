import {baseApi} from "./api";

export const securityAPI = {
    getCaptchaUrl() {
        return baseApi.get(`security/get-captcha-url`)
    },
}