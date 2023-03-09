import { createSlice } from "@reduxjs/toolkit";

import { signUp, logIn, currentUser } from "./auth-operation";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(signUp.pending, (store) => { store.loading = true; store.error = null; })
            .addCase(signUp.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.user = payload.user;
                store.token = payload.token;
                store.isLogin = true;
            })
            .addCase(signUp.rejected, (store, { payload }) => { store.loading = false; store.error = payload; })
            .addCase(logIn.pending, (store) => { store.loading = true; store.error = null; })
            .addCase(logIn.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.user = payload.user;
                store.token = payload.token;
                store.isLogin = true;
            })
            .addCase(logIn.rejected, (store, { payload }) => { store.loading = false; store.error = payload; })
            .addCase(currentUser.pending, (store) => { store.loading = true; store.error = null; })
            .addCase(currentUser.fulfilled, (store, { payload }) => {
                console.log("slice-",payload.user);
                store.loading = false;
                store.user = payload.user;
                store.token = payload.token;
                store.isLogin = true;
            })
            .addCase(currentUser.rejected, (store, { payload }) => { store.loading = false; store.error = payload; })
    }
    // {
    //     [signUp.pending]: (store) => { store.loading = true; store.error = null; },
    //     [signUp.fulfilled]: (store, { payload }) => {
    //         store.loading = false;
    //         store.user = payload.user;
    //         store.token = payload.token;
    //         store.isLogin = true;
    //     },
    //     [signUp.rejected]: (store, { payload }) => { store.loading = false; store.error = payload; },
    // }
});
export default authSlice.reducer;