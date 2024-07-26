import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authentication',
    initialState: { isAuthenticated: false },
    reducers: {
        logIn(state){
            return { ...state, isAuthenticated: true }
        },
        logOut(state){
            return { ...state, isAuthenticated: false }
        },
    }
})

// make reducer available for dispatching actions
export default authSlice.reducer;
export const authActions = authSlice.actions;