import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "components/shared/API/auth";

export const signUp = createAsyncThunk(
    "auth/signup",
    async (data, thunkAPI) => {
        try {
            // console.log(data);
            const result = await api.signUp(data);
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        } 
    }
);