// Import redux
import { configureStore } from '@reduxjs/toolkit';
import  authReducer  from './auth';
import  counterReducer  from './counter'



// create store
const store = configureStore({
    reducer: { auth: authReducer, counter: counterReducer }
});





// Create Store with redux toolkit

// create reducer function
// function counterReducer(state = { counter : 0, showCounter: true }, action){
//     if (action.type === 'INCREASE'){
//         return { ...state, counter: state.counter + 1};
//     }

//     if (action.type === 'DECREASE'){
//         return { ...state, counter: state.counter - 1};
//     }

//     if (action.type === 'DOUBLE'){
//         return { ...state, counter: state.counter + action.payload.value}
//     }

//     if (action.type === 'TOGGLE'){
//         return { ...state, showCounter: !state.showCounter}
//     }

//     return state;
// }

// create Store
// const store = createStore(counterReducer);

// connect app to redux store
export default store;