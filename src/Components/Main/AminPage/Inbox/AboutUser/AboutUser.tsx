import React from 'react';
import logo from "../../../../../Imgs/Logo.svg";
import userAva from "../../../../../Imgs/user.svg";
import {NavLink} from "react-router-dom";
import {FiDollarSign, FiMessageSquare, FiUser} from "react-icons/fi";
import {GiBank} from "react-icons/gi";
import {LuSettings} from "react-icons/lu";
import {BsArrowLeft} from "react-icons/bs";
import {useAppSelector} from "../../../../../Hooks/UseAppSelector";
import "./AboutUser.scss"

const AboutUser = () => {

    const {showAdmin} = useAppSelector(s => s.AdminSlice)

    return (
        <div className="flex flex-col items-start h-[800px] py-[20px] justify-between">
            <div>
                <img src={logo} alt="logo" className="py-4"/>
                <div className="flex flex-col items-start">
                    <div className="flex items-center pb-4">
                        <img src={userAva} alt="user" className="pr-2"/>
                        <div className="flex flex-col items-start">
                            <h3 className="text-[#004A60] text-xl">{showAdmin.name}</h3>
                            <h5>Admin</h5>
                        </div>
                    </div>
                    <NavLink to={"/home-admin"}
                             className="flex items-center text-[#004A60] text-xl my-2 py-1 px-2 rounded hover:bg-blue-700 transition-[0.4s] hover:text-white about--user "><FiMessageSquare
                        className="mr-2"/>Inbox</NavLink>
                    <NavLink to={"/home-admin/agents"}
                             className="flex items-center text-[#004A60] text-xl my-2 py-1 px-2 rounded hover:bg-blue-700 transition-[0.4s] hover:text-white "><FiUser
                        className="mr-2"/>Agents</NavLink>
                    <NavLink to={"/home-admin/realty"}
                             className="flex items-center text-[#004A60] text-xl my-2 py-1 px-2 rounded hover:bg-blue-700 transition-[0.4s] hover:text-white "><GiBank
                        className="mr-2"/>Realty</NavLink>
                    <NavLink to={"/home-admin/payment"}
                             className="flex items-center text-[#004A60] text-xl my-2 py-1 px-2 rounded hover:bg-blue-700 transition-[0.4s] hover:text-white "><FiDollarSign
                        className="mr-2"/>Payment</NavLink>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <NavLink to={"/home-admin/settings"}
                         className="flex items-center text-[#004A60] text-xl my-1 py-1 px-2 rounded hover:bg-blue-700 transition-[0.4s] hover:text-white"><LuSettings
                    className="mr-2"/>Settings</NavLink>
                <NavLink to={"/"}
                         className="flex items-center text-red-500 text-xl my-1 py-1 px-2 rounded hover:bg-blue-700 transition-[0.4s] hover:text-white"><BsArrowLeft
                    className="mr-2"/>Logout</NavLink>
            </div>
        </div>
    );
};

export default AboutUser;