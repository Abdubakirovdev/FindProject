import React, {FormEvent, useState} from 'react';
import bgAdmin from "../../../../Imgs/adminLogin.png";
import logo from "../../../../Imgs/Logo.svg";
import {BsEyeFill, BsEyeSlashFill} from "react-icons/bs";
import {NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../Hooks/UseAppDispatch";
import {useAppSelector} from "../../../../Hooks/UseAppSelector";
import {findUser} from "../../../../store/Reducer/AdminSlice";

const ForgotPass = () => {


    const [eye, setEye] = useState(false)
    const [error, setError] = useState({})
    const [red, setRed] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {findName,adminData} = useAppSelector(s => s.AdminSlice)
    const nav = useNavigate()

    const [user, setUser] = useState({
        uname: "@gmail.com",
        pass: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
        setRed(false)
    }



    return (
        <div style={{background: `url(${bgAdmin})no-repeat center/cover`}}>
            <div className="container flex items-center justify-center py-[240px]">
                <div className="w-[640px] h-[358px] bg-white rounded-[32px] p-[32px]">
                    <img src={logo} alt=""/>
                    <form
                          className="flex mt-4 flex-col items-center h-[200px] justify-between">
                        <h2 className="text-[#004A60] text-4xl font-bold">Your email</h2>
                        <input  defaultValue={user.uname} style={{border: red ? "red solid 1px" : ""}} type="email"
                               className="border-2 rounded-[12px] text-xl w-[70%] px-4 h-[60px]"
                               placeholder="Email" name="uname"/>
                        <button
                                className="rounded-[12px] text-xl w-[70%] px-4 h-[60px] bg-blue-500 text-white">Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;