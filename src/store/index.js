import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home-slice";
import loggedUserSlice from "./logged-user-slice";

const store = configureStore({
    reducer: {
        home: homeSlice.reducer,
        loggedUser: loggedUserSlice.reducer,
    }
})

export default store;
