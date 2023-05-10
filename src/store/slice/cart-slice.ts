import { AnyAction, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Item } from "../../model/item.model";
import { Product } from "../../model/product.model";
import { NotificationStatusEnum } from "../model/notification-status-enum.model";
import { CartState } from "../state/cart-state.model";
import { uiActions } from "./ui-slice";

const initialCartState = new CartState([], 0);

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addItemToCart(state, action: PayloadAction<Product>): CartState {

            const payloadProduct = action.payload;


            let existingItemIndex = state.items.findIndex(item => item.id === payloadProduct.id);
            let existingItem = state.items[existingItemIndex];

            let updatedItems: Item[] = [];

            if (existingItem) {
                let updatedItem = { ...existingItem, quantity: existingItem.quantity + 1, totalPrice: existingItem.totalPrice + payloadProduct.price };
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            }
            else {
                updatedItems = state.items.concat({
                    id: payloadProduct.id,
                    title: payloadProduct.title,
                    price: payloadProduct.price,
                    quantity: 1,
                    totalPrice: payloadProduct.price
                })
            }

            return {
                ...state,
                items: updatedItems,
                totalQuantity: state.totalQuantity + 1
            }
        },
        removeItemFromCart(state, action: PayloadAction<number>): CartState {

            const itemId = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === itemId);

            if (existingItemIndex === undefined)
                return state;

            let existingItem = state.items[existingItemIndex];

            let updatedItems: Item[] = [];

            if (existingItem.quantity === 1) {
                updatedItems = state.items.filter(item => item.id !== itemId);
            }
            else {
                let updatedItem: Item = { ...existingItem, quantity: existingItem.quantity - 1 };
                updatedItems = [...state.items];
                updatedItems[existingItemIndex] = updatedItem;
            }


            return {
                ...state,
                items: updatedItems,
                totalQuantity: state.totalQuantity - 1,
            }
        }
    }
});

export const sendCartState = (cart: CartState) => {
    return async (dispatch: Dispatch<AnyAction>) => {


        dispatch(uiActions.showNotification({ title: "Sending...", status: NotificationStatusEnum.PENDING, message: "Sending cart data!" }))

        try {

            const response = await axios.put("http://localhost:8081/carts", cart);
            dispatch(uiActions.showNotification({ title: "Success!", status: NotificationStatusEnum.SUCCESS, message: "Sent cart data successfully!" }));

        } catch (err) {
            let errorMessage = "";
            if (axios.isAxiosError(err)) {
                errorMessage =err.message;
            }
            else {
                const error = err as Error;
                errorMessage = error.message || 'Something went wrong!';
            }

            dispatch(uiActions.showNotification({ title: "Error", status: NotificationStatusEnum.ERROR, message: "Sending cart data failed with error: " + errorMessage }));
        }
    }
}

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;