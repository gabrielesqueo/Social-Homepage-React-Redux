import { createSlice } from "@reduxjs/toolkit";
import { isVisible } from "@testing-library/user-event/dist/utils";
import postItems from "../../postItems";
const initialState = {
    feedPosts: postItems,
    isVisible: true
};

const feedSlice = createSlice ({
    name: 'feed',
    initialState,
    reducers: {
        newPost: (state, {payload}) => {
            let newid =  state.feedPosts.length + 1;
            state.feedPosts.unshift ({
                id: newid,
                name: payload.name,
                text: payload.text,
                isLiked: false
            })
        },
        setLike: (state, {payload}) => {
            const postItem = state.feedPosts.find((item) => 
            item.id === payload.id);
            postItem.isLiked = true;
        },
        setNotLiked:  (state, {payload}) => {
            const postItem = state.feedPosts.find((item) => 
            item.id === payload.id);
            console.log(postItem.isLiked)
            postItem.isLiked = false;
        },
        setVisibility: (state) => {
            state.isVisible ? state.isVisible = false : state.isVisible = true
        }
    }
});

export const {newPost, setLike, setNotLiked, setVisibility} = feedSlice.actions
export default feedSlice.reducer