import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        add(state, action){
            //now here state is not required to be changed
            //in an immutable manner(using spread operator
            //or creating copies).
            // As in redux-toolkit Immer.js library is used
            //that makes sure state changes immutably behind the scene.
            // if(state.includes(action.payload) === false){
            //     state.push(action.payload)
            // }else return state
            const newItem = action.payload;
            const isItemExists = state.some(item => item.id === newItem.id);
            if (!isItemExists) {
            state.push(newItem);
            }
        },
        
        remove(state, action){
            return state.filter(item => item.id !== action.payload)
        }
    }
});


// to dispatch actions from ui we have to export them also
//to make them act like action creator
export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;//reducer is a property.
// We have made reducers reducer above
// Ab state action reducer sb bn gyi h ab store bnayenge to hold the application state

