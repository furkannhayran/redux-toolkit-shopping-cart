import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/Status";
import axios from "axios";
const initialState = {
    product: [],
    productStatus: STATUS.IDLE,
    productDetail:[],
    productDetailStatus:STATUS.IDLE
}
export const getProduct = createAsyncThunk("getProduct", async () => {
    const data = await axios('https://fakestoreapi.com/products')
    return data.data
})
export const getCategoryProducts = createAsyncThunk("getCategory", async (category) => {
    const data = await axios(`https://fakestoreapi.com/products/category/${category}`)
    return data.data
})
export const getDetailProducts = createAsyncThunk("getDetail", async (id) => {
    const data = await axios(`https://fakestoreapi.com/products/${id}`)
    return data.data
})
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state, action) => {
                state.productStatus = STATUS.LOADING;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.productStatus = STATUS.SUCCESS;
                state.product = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.productStatus = STATUS.FAIL;
            })
            
            .addCase(getCategoryProducts.pending, (state, action) => {
                state.productStatus = STATUS.LOADING;
            })
            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.productStatus = STATUS.SUCCESS;
                state.product = action.payload;
            })
            .addCase(getCategoryProducts.rejected, (state, action) => {
                state.productStatus = STATUS.FAIL;
            })

            .addCase(getDetailProducts.pending, (state, action) => {
                state.productDetailStatus = STATUS.LOADING;
            })
            .addCase(getDetailProducts.fulfilled, (state, action) => {
                state.productDetailStatus = STATUS.SUCCESS;
                state.productDetail = action.payload;
            })
            .addCase(getDetailProducts.rejected, (state, action) => {
                state.productDetailStatus = STATUS.FAIL;
            })
    }
})

export default productSlice.reducer