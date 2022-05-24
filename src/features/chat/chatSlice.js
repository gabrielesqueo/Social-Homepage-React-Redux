import { createSlice } from "@reduxjs/toolkit";
import chatItems from "../../chatItems";
const initialState = {
    chatItems: chatItems,
    amount: 0
};


const chatSlice = createSlice ({
    name: 'chat',
    initialState,
    reducers: {
        calculateAmount: (state) => {
            let amount = 0;
            console.log(state.chatItems)
            state.chatItems.forEach(element => {
                amount += 1;
                console.log(element);
                console.log(amount);
            });
            state.amount = amount
        }
    }
});

export const {calculateAmount} = chatSlice.actions

export default chatSlice.reducer