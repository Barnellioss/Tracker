import {applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from "redux-thunk";
import firebaseReducer from './firebaseReducer';


let reducers = combineReducers({
    fireBaseState: firebaseReducer, 
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store;

