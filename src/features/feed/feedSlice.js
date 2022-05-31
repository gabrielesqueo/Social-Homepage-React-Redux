import { createSlice } from "@reduxjs/toolkit";
import postItems from "../../postItems";
const initialState = {
    feedPosts: postItems
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
        }
    }
});

export const {newPost, setLike, setNotLiked} = feedSlice.actions
export default feedSlice.reducer