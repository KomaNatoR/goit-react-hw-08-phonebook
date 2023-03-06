import { createSlice } from "@reduxjs/toolkit";

import { signUp } from "./auth-operation";

const initialState = {
    user: {},
    isLogin: false,
    token: "",
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signUp.pending]: (store) => { store.loading = true; store.error = null; },
        [signUp.pending]: (store, { payload }) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [signUp.pending]: (store, { payload }) => { store.loading = false; store.error = payload; },
    }
});
export default authSlice.reducer;