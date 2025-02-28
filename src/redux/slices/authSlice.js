import { createSlice } from "@reduxjs/toolkit";

const storedAuth = localStorage.getItem("auth");

const authSlice = createSlice({
    name: "auth",
    initialState : storedAuth ? JSON.parse(storedAuth) : { isLoggedIn: false, user: null },
    reducers:{
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
            localStorage.setItem("auth", JSON.stringify({ isLoggedIn: true, user: action.payload }));
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            localStorage.removeItem("auth");
        },
    }
})

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;