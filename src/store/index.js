import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home-slice";
// import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {
        home: homeSlice.reducer,
    }
})

export default store;
