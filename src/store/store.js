import { createStore } from 'redux'
import AppReducer from "../reducers/AppReducer"
import {loadState} from "../utils/LocalStorage"

/*//Creating the store
let store = createStore(AppReducer);
//chacking initial value
console.log('Initial state: ', store.getState());*/



//Getting the persisted state from LocalStorage (Loadstate is declared in LocalStorage.js)
const persistedState = loadState()

//Create the store. It will have the default values from the reducer, unless a persisted state exists.
let store = createStore(AppReducer, persistedState)

/*export default store*/
export default store