import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NotificationStatus } from "../model/notification-status.model";
import { UserInterfaceState } from "../state/user-interface-state.model";

const initialUiState = new UserInterfaceState(false, undefined);

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUiState,
    reducers: {
        toggle(state): UserInterfaceState {
            return {
                ...state,
                cartIsVisible: !state.cartIsVisible
            }
        },
        showNotification(state, action: PayloadAction<NotificationStatus>): UserInterfaceState {
            return {
                ...state,
                notification: new NotificationStatus(action.payload.title, action.payload.status, action.payload.message)
            }
        }
    }
});

export const uiActions = uiSlice.actions;
export const uiReducer = uiSlice.reducer;

