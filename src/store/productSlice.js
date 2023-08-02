import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

//kyuki api calls doesn't always returns data it also returns errors 
// different status etc so we'll create an object
// and hold the result in data
const initialState = {
    data: [],
    status: StatusCode.IDLE
};

// ab isme hm action nhi bna skte bcoz slice doesn't know hoe to handle the 
// asyncronous operations so we have to create a think action creator

const productSlice = createSlice({
    name : 'products',
    initialState,
    // for syncronous tasks in rtk
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload
        // }
    },
    // for asyncronous task in rtk
    extraReducers: (builder) => {
        // now we can write the cases
        // like promises have 3 states 
        // we can handle it here
        builder
        .addCase(getProducts.pending, (state, action) => {
            state.status = StatusCode.LOADING;
        })
        .addCase(getProducts.fulfilled,  (state, action) => {
            state.data = action.payload;
            state.status = StatusCode.IDLE;
        })
        .addCase(getProducts.rejected,  (state, action) => {
            state.status = StatusCode.ERROR;
        })
    }
});

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    return result;
})

// THIS IS THE GENERIC THUNK WE USE IN REDUX ALSO
// SO HERE WE WILL USE createAsyncThunk() method

// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
// const data = await fetch('https://fakestoreapi.com/products')
// const result = await data.json();
// dispatch(fetchProducts(result))
//     }
// }

