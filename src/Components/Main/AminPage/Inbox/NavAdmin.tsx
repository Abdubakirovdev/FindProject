import React from 'react';
import {Outlet} from "react-router-dom";
import AboutUser from "./AboutUser/AboutUser";
import {FiMoreHorizontal} from "react-icons/fi";
import {BiSearch} from "react-icons/bi";
import {IoIosMore} from "react-icons/io";

const NavAdmin = () => {
    return (
        <div className="relative">
            <div className="w-[24%] h-full rounded-br-xl bg-blue-100 -z-10 rounded-tr-xl absolute"/>
            <div className="container flex items-start justify-between">
                <AboutUser/>
                <div>
                    <div className="flex items-center justify-between w-[115vh] my-10">
                        <div className="h-[40px]  w-[300px] rounded relative">
                            <BiSearch className="absolute top-3 left-2 text-grey-400"/>
                            <input placeholder="Search" type="text"
                                   className="rounded bg-blue-100 px-4 w-full h-full"/>
                        </div>
                        <div className="flex items-center">
                            <select className="mr-4">
                                <option value="en-US">English</option>
                                <option value="ru-RU">Russia</option>
                                <option value="kg-KG">Kyrgyz</option>
                            </select>
                            <IoIosMore className="pl-2 text-4xl fond-bold"/>
                        </div>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default NavAdmin;