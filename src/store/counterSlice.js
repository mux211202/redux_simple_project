import { createSlice, configureStore } from '@reduxjs/toolkit';
const initialCounterState = {counter: 0, showCounter: true};
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        incr(state){
            state.counter++;
        },
        decr(state){
            state.counter--;
        },
        increase(state, action){
            state.counter += action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        }
    }
});

export default counterSlice;