
type UsersType = {
    id: number,
    fullName: string,
    status: string,
    followed: false,
    location: {city: 'Los-Angeles', state: 'California'}
}

let initialState = {
    users: [
        {id: 1, fullName: 'Bill B', status: 'hello ', followed: false, location: {city: 'Los-Angeles', state: 'California'}},
        {id: 2, fullName: 'Sam W', status: 'hmmm!', followed: true, location: {city: 'New York', state: 'New York'}},
        {id: 3, fullName: 'Tedd L.', status: 'show me...', followed: false, location: {city: 'New Orleans', state: 'Louisiana'}},
        {id: 4, fullName: 'Bob R.', status: 'U-S-A', followed: true, location: {city: 'Richmond', state: 'Virginia'}},
        {id: 5, fullName: 'Tucker K.', status: 'i love Democratic Party,', followed: true, location: {city: 'Houston', state: 'Texas'}},
    ],

}
export const usersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {

        default : {
            return state
        }
    }


}