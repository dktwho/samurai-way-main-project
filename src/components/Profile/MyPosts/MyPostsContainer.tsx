import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootReducerType} from "../../../redux/reduxStore";
import {addPostAC} from "../../../redux/profileReducer";


let mapStateToProps = (state: RootReducerType) => {
    return {
        postsData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)