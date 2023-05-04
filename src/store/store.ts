import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slice/cart-slice";
import { uiReducer } from "./slice/ui-slice";

const store = configureStore({
    reducer: {ui: uiReducer, cart: cartReducer}
});

export type RootState = ReturnType<typeof store.getState>

export default store;