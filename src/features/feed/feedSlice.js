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
            let newid =  state.postItems.length + 1;
            state.postItems.push ({
                id: newid,
                name: payload.name,
                text: payload.text,
                isLiked: false
            })
        }
    }
});

export default feedSlice.reducer