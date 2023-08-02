import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

// yeh configureStore tumhre liye saari cofiguration krdega 
// jo tumhe redux m manually krni pdhti
// thunk middleware krke bhi kch hai woh bhi yhi krdega 
// createAsyncThunk jo th 
const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productSlice,
    }
});

export default store;

