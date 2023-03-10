import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "components/shared/API/auth";

export const signUp = createAsyncThunk(
    "auth/signup",
    async (data, thunkAPI) => {
        try {
            const result = await api.signUp(data);
            return result;
        } catch ({response}) {
            const { status, statusText } = response;
            const error = {
                status,
                statusText,
            }
            return thunkAPI.rejectWithValue(error.response);
        } 
    }
);

export const logIn = createAsyncThunk(
    "auth/login",
    async (data, thunkAPI) => {
        try {
            // console.log("thunkAPI",thunkAPI);
            const result = await api.logIn(data);
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response);
        } 
    }
);

export const currentUser = createAsyncThunk(
    "auth/current",
    async (_, {rejectWithValue, getState}) => {
        try {
            const { auth } = getState();
            // console.log("token-", auth.token);
            if(auth.token==="") return rejectWithValue("Sorry no token!");
            const data = await api.getCurrentUser(auth.token);
            return data;
        } catch (error) {
            return rejectWithValue(error.response);
        } 
    },
);

export const logOutUser = createAsyncThunk(
    "auth/logout",
    async (_, {rejectWithValue}) => {
        try {
            const data = await api.logOut();
            return data;
        } catch (error) {
            return rejectWithValue(error.response);
        } 
    },
);