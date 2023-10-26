import {RootReducerType} from "./reduxStore";

export const getUsersPageSelectors = (state: RootReducerType) => {
    return state.usersPage
}

export const getPageSizeSelectors = (state: RootReducerType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountSelector = (state: RootReducerType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageSelector = (state: RootReducerType) => {
    return state.usersPage.currentPage
}

export const isFetchingSelector = (state: RootReducerType) => {
    return state.usersPage.isFetching
}

export const followingInProgressSelector = (state: RootReducerType) => {
    return state.usersPage.followingInProgress
}

