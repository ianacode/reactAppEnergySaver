import { configureStore } from "@reduxjs/toolkit";
import challengeSlice from "./challenge-slice";
// import cartSlice from "./cart-slice";

const store = configureStore({
    reducer: {
        challenge: challengeSlice.reducer,
        // cart: cartSlice.reducer,
    }

})

export default store;