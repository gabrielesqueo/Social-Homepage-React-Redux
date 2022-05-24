import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './features/chat/chatSlice';
import feedReducer from './features/feed/feedSlice'
export const store = configureStore({
	reducer: {
        chat: chatReducer,
        feed: feedReducer
    },
});