import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAdminLogin, IAdminShow} from "../../Types/IUser";


const localUser: any = localStorage.getItem("showUserL")
const localAcceptAgents: any = localStorage.getItem("acceptL")

interface IAdminSlice {
    adminData: IAdminLogin[]
    findName: boolean,
    showAdmin: IAdminShow[] | {} | any
    acceptAgents: any[]
}

const initialState: IAdminSlice = {
    adminData: [{
        id: 1,
        userName: "Syrgabek",
        password: "1234"
    }, {
        id: 2,
        userName: "Admin",
        password: "1234"
    }],
    findName: false,
    showAdmin: JSON.parse(localUser) || {},
    acceptAgents: JSON.parse(localAcceptAgents) || [],
}

export const adminSlice = createSlice({
    name: "ADMIN",
    initialState,
    reducers: {
        findUser(state, {payload}) {
            state.findName = payload
        },
        showUser(state, {payload}) {
            localStorage.setItem("showUserL", JSON.stringify(state.showAdmin = {...payload}))
        },
        acceptAgent(state, {payload}: PayloadAction<any>){
            localStorage.setItem("acceptL", JSON.stringify(state.acceptAgents = [{...payload}, ...state.acceptAgents]))
            state.acceptAgents = [{...payload}, ...state.acceptAgents]
        },
    }
})

export const {findUser, showUser, acceptAgent} = adminSlice.actions
export default adminSlice.reducer