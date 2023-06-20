import {combineReducers, configureStore} from "@reduxjs/toolkit";
import loginSlice from "./Reducer/Login";

const rootReducer = combineReducers({
    loginSlice
})

export const setUpStore =() =>{
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type  AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']