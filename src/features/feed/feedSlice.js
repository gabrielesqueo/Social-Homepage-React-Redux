import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    feedPosts: []
};

const feedSlice = createSlice ({
    name: 'feed',
    initialState,
    reducers: {

    }
});

export default feedSlice.reducer