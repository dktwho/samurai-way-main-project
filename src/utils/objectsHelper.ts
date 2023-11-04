import {UserType} from "../redux/usersReducer";

export const updateObjectInArray = (items: UserType[], itemId: number, objPropName: string, newObjProps: {followed: boolean}) => {
    return items.map((user: any) => user[objPropName] === itemId ? {...user, ...newObjProps} : user)
}