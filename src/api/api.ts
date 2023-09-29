import axios from "axios";
import {InitialStateType} from "../redux/usersReducer";

export const settings = {
    withCredentials: true
}
export const getUsers = (currentPage: number, pageSize: number) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, settings)
}