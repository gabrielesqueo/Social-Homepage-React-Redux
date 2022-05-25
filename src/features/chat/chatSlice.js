import { createSlice } from "@reduxjs/toolkit";
import chatItems from "../../chatItems";
const initialState = {
    chatItems: chatItems,
    amount: 0,
    amountTotal: 0
};


const chatSlice = createSlice ({
    name: 'chat',
    initialState,
    reducers: {
        calculateAmount: (state) => {
            let amount = 0;
            let amountTotal = 0; 
            state.chatItems.forEach(element => {
                !element.isRead ? amount += 1 : amount=amount;
                amountTotal += 1;
            });
            state.amount = amount;
            state.amountTotal = amountTotal
        },
        setSeen: (state, {payload}) => {
            const chatItem = state.chatItems.find((item) => item.id 
            === payload.id);
            chatItem.isRead = true;
        },
        setToSee: (state, {payload}) => {
            const chatItem = state.chatItems.find((item) => item.id 
            === payload.id);
            chatItem.isRead = false;
        }
    }
});

export const {calculateAmount, setSeen, setToSee} = chatSlice.actions

export default chatSlice.reducer