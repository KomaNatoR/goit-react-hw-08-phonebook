import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "components/shared/API/auth";

export const signUp = createAsyncThunk(
    "auth/signup",
    async (data, thunkAPI) => {
        try {
            // console.log(data);
            const result = await api.signUp(data);
            return result;
        } catch ({response}) {
            const { status, statusText } = response;
            const error = {
                status,
                statusText,
            }
            return thunkAPI.rejectWithValue(error);
        } 
    }
);

export const logIn = createAsyncThunk(
    "auth/login",
    async (data, thunkAPI) => {
        try {
            // console.log(data);
            const result = await api.logIn(data);
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        } 
    }
);

export const currentUser = createAsyncThunk(
    "auth/current",
    async (_, {rejectWithValue, getState}) => {
        try {
            const { auth } = getState();
            const data = await api.getCurrentUser(auth.token);
            console.log("token-",auth.token);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        } 
    },
    {
        condition: (_, { getState }) => {
            const { auth } = getState();
            if (!auth.token) {
                return false;
            }
        }
    }
);