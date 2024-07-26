import { createSlice } from "@reduxjs/toolkit";

// Create a new slice working with redux toolkit
const counterSlice = createSlice({
    name: 'counter',
    initialState: { counter: 0, showCounter: true},
    reducers: {
        increment(state){
            // could be => state.couter++
            return {...state, counter: state.counter + 1};
        },
        decrement(state){
            // could be => state.couter--
            return {...state, counter: state.counter - 1};
        },
        double(state, action){
            // could be => state.couter += action.payload.value
            return {...state, counter: state.counter * action.payload.value};
        },
        toggle(state){
            // could be => state.showCounter = !state.showCounter
            return {...state, showCounter: !state.showCounter};
        },
    }
});

// make action available. 
export const counterActions = counterSlice.actions;

// export the reducer
export default counterSlice.reducer;