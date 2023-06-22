import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const localLog: any = localStorage.getItem("loginL")
interface  ILoginSlice {
    log: any[]
    findUser: boolean
}


const initialState: ILoginSlice = {
    log: JSON.parse(localLog) || [],
    findUser: false
}


export const loginSlice = createSlice({
    name: "LOGIN",
    initialState,
    reducers: {
        addLogin(state, {payload}: PayloadAction<any>){
            localStorage.setItem("loginL", JSON.stringify(state.log = [{...payload},...state.log]))
        },
        addUser(state, {payload}){
           const res = state.log.find(el => el.email === payload.email && el.password === payload.password )
            if (res){
                state.findUser = true
            }else {
                state.findUser = false
            }
        }
    }
})



export const {addLogin,addUser} = loginSlice.actions
export default loginSlice.reducer