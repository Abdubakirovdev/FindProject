import {combineReducers, configureStore} from "@reduxjs/toolkit";
import LoginSlice from "./Reducer/Login"
import AdminSlice from "./Reducer/AdminSlice";


const rootReducer = combineReducers({
    LoginSlice,
    AdminSlice
})

export const setUpStore =() =>{
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type  AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']