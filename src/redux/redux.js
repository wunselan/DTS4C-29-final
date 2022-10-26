import { createStore } from '@reduxjs/toolkit';

// const initialState = {
//     regis: false
// }

function reducer(state = { }, action) {
    switch (action.type) {
        case 'regis':
            state = { regis: true }
            break;
        case 'login':
            state = { login: true }
            break;
        case 'regis-done':
            state = { regis: false }
            break;
        default:
            break;
    }
    return state;
}

let store = createStore(reducer);

export default store;