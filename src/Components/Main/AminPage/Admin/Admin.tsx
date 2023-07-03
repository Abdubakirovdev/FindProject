import React, {FormEvent, useEffect, useState} from 'react';
import "./Admin.scss"
import bgAdmin from "../../../../Imgs/adminLogin.png"
import logo from "../../../../Imgs/Logo.svg"
import {Form, NavLink, useNavigate} from "react-router-dom";
import {BsEyeFill, BsEyeSlashFill} from "react-icons/bs";
import {useAppDispatch} from "../../../../Hooks/UseAppDispatch";
import {useAppSelector} from "../../../../Hooks/UseAppSelector";
import {findUser, showUser} from "../../../../store/Reducer/AdminSlice";

const Admin = () => {

    const [eye, setEye] = useState(false)
    const [red, setRed] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {findName,adminData, showAdmin} = useAppSelector(s => s.AdminSlice)
    const nav = useNavigate()


    const [user, setUser] = useState({
        uname: "",
        pass: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
        setRed(false)
    }


    const handleSubmit = (e: FormEvent | any) => {
        e.preventDefault();
        const newUser = {
            id: Math.round(Math.random() * 1000),
            name: user.uname,
            password: user.pass
        }

        const { uname, pass } = document.forms[0];
        const userData = adminData.find((el: any) => el.userName === uname.value.trim());
        if (userData) {
            if (userData.password !== pass.value.trim()) {
                setRed(true)
            } else {
                dispatch(findUser(true));
                dispatch(showUser(newUser))
                nav("/home-admin")
                user.uname = ""
                user.pass = ""
            }
        } else {
            setRed(true)
        }
    };


    return (
        <div style={{background: `url(${bgAdmin})no-repeat center/cover`}}>
            <div className="container flex items-center justify-center py-[140px]">
                <div className="w-[640px] h-[558px] bg-white rounded-[32px] p-[32px]">
                    <img src={logo} alt=""/>
                    <form onSubmit={handleSubmit}
                          className="flex mt-10 flex-col items-center h-[320px] justify-between">
                        <h2 className="text-[#004A60] text-4xl font-bold">Log in</h2>
                        <input onChange={handleChange} value={user.uname} style={{border: red ? "red solid 1px" : ""}} type="text"
                               className="border-2 rounded-[12px] text-xl w-[70%] px-4 h-[60px]"
                               placeholder="User Name" name="uname"/>
                        <div
                            className="border-2 rounded-[12px] w-[70%]  text-xl h-[60px] flex items-center justify-between text-gray-400 relative" style={{border: red ? "red solid 1px" : ""}}>
                            <input onChange={handleChange} value={user.pass} type={eye ? "text" : "password"}  className="object-fill w-full rounded-[12px] px-4 h-full"
                                   placeholder="Password" name="pass"/>
                            <div className="absolute right-4 cursor-pointer">
                                {eye ? <BsEyeFill onClick={() => setEye(false)}/> : <BsEyeSlashFill onClick={() => setEye(true)}/>}
                            </div>
                        </div>
                        <NavLink to={"/forgot-pass"} className="text-blue-500">Forgot your password?</NavLink>
                        <button onClick={handleSubmit}
                                className="rounded-[12px] text-xl w-[70%] px-4 h-[60px] bg-blue-500 text-white">Log in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admin;