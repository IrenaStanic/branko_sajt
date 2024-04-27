import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCartOpen: false,
    cartItems:[]
}

const openSlice = createSlice({
    name: "open",
    initialState,
    reducers:{
        toggleCart(state,action){  
            
            state.isCartOpen = action.payload;
             
            console.log(action.payload);
        } 
    }
});

export const {toggleCart} = openSlice.actions;
export default openSlice.reducer;