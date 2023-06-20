import {combineReducers, configureStore} from "@reduxjs/toolkit";
import LoginSlice from "./Reducer/Login"


const rootReducer = combineReducers({
    LoginSlice
})

export const setUpStore =() =>{
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type  AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']