import { createSlice } from "@reduxjs/toolkit";

const challengeSlice = createSlice({
    name: 'challenge',
    initialState: {cartVisable: false},


    reducers:{
        toggle(state){
            state.cartVisable = !state.cartVisable;
        }
    }


    
})

export const challengeActions = challengeSlice.actions;

export default challengeSlice;