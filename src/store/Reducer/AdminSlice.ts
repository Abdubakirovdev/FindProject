import {createSlice} from "@reduxjs/toolkit";
import {IAdminLogin, IAdminShow} from "../../Types/IUser";


const localUser: any = localStorage.getItem("showUserL")

interface IAdminSlice {
    adminData: IAdminLogin[]
    findName: boolean,
    showAdmin: IAdminShow[] | {} | any
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
    showAdmin: JSON.parse(localUser) || {}
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
        }
    }
})

export const {findUser, showUser} = adminSlice.actions
export default adminSlice.reducer