import { createSlice } from "@reduxjs/toolkit";

const initialState = {value : 0}
export const counterSlice = createSlice({
    name: "counter",
    initialState, // it could be this initialState: {value: 0}
    reducers:{
        increment: (state)=>{
            state.value +=1;  //immer helps us work on this because we are not suppose to mainpulate our state directly
        },
        decrement: (state)=>{
            state.value -= 1;
        },
        reset: (state)=>{
            state.value = 0;
        }
    }
    
})
export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;