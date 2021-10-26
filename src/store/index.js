import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counterSlice';
import authSlice from './auth';


const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
// const reducer = (state = initialState, action) => {
//     if(action.type === 'incr'){
//         return{
//             counter: state.counter + 1, 
//             showCounter: state.showCounter
//         };
//     }
//     if (action.type === 'increase'){
//         return{
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type === 'decr'){
//         return{
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }
//     if(action.type === 'toggle'){
//         return{
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state;
// }