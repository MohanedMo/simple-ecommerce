import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosProducts = createAsyncThunk("getProductSlice/axiosProducts", async () => {
    const  {data} = await  axios.get("https://ecom-fake-api.onrender.com/products")
    return Object.values(data)
})


const getProductSlice = createSlice({
    initialState: [],
    name: "getProductSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(axiosProducts.fulfilled, (state, action) => {
            return action.payload
        })
    }
})
export default getProductSlice.reducer