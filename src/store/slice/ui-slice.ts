import { createSlice } from "@reduxjs/toolkit";
import { UserInterfaceState } from "../state/user-interface-state.model";

const initialUiState = new UserInterfaceState(false);

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUiState,
    reducers: {
        toggle(state): UserInterfaceState {
            return {
                ...state,
                cartIsVisible: !state.cartIsVisible
            }
        }
    }
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

