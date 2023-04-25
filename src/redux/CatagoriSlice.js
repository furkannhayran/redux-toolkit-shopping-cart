import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
    catagories: []
};
export const getCategories = createAsyncThunk("getCategories", async () => {
    const data = await axios('https://fakestoreapi.com/products/categories')
    return data.data
});
const catagoriSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, action) => {
                state.catagories = action.payload;
            });
    }
});

export default catagoriSlice.reducer;