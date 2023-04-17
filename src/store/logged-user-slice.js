import { createSlice } from "@reduxjs/toolkit";

const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState: {
      currentUser: undefined,
    },
    reducers:{
        loggedIn(state, action){
            state.currentUser = action.payload;
            console.log("loggedIn", state.currentUser);
        },
        loggedOut(state){
            state.currentUser = undefined;
        },
    }
})

export const {loggedIn, loggedOut } = loggedUserSlice.actions;

export default loggedUserSlice;
