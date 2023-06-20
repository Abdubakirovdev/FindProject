import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const localLog: any = localStorage.getItem("loginL")
interface  ILoginSlice {
    log: any[]
}


const initialState: ILoginSlice = {
    log: JSON.parse(localLog) || []
}


export const loginSlice = createSlice({
    name: "LOGIN",
    initialState,
    reducers: {
        addLogin(state, {payload}: PayloadAction<any>){
            localStorage.setItem("loginL", JSON.stringify(state.log = [{...payload},...state.log]))
        }
    }
})

export const {addLogin} = loginSlice.actions
export default loginSlice.reducer