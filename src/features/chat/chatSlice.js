import { createSlice } from "@reduxjs/toolkit";
import chatItems from "../../chatItems";
const initialState = {
    chatItems: chatItems,
    amount: 0,
    amountTotal: 0,
    isVisible: true
};


const chatSlice = createSlice ({
    name: 'chat',
    initialState,
    reducers: {
        calculateAmount: (state) => {
            let amount = 0;
            let amountTotal = 0; 
            state.chatItems.forEach(element => {
                // eslint-disable-next-line no-self-assign
                !element.isRead ? amount += 1 :  amount = amount ;
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
        },
        newChat: (state, {payload}) => {
            let newid =  state.chatItems.length + 1;
            state.chatItems.push ({
                id: newid,
                name: payload.name,
                isRead: true,
                lastmsg: payload.msg
                
            })
        },
        setVisibilityChat: (state) => {
            state.isVisible ? state.isVisible = false : state.isVisible = true
        }
    }
});

export const {calculateAmount, setSeen, setToSee, newChat, setVisibilityChat} = chatSlice.actions

export default chatSlice.reducer