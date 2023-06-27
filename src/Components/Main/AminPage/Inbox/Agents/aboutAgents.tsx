import React from 'react';
import {HiOutlineArrowLeft} from "react-icons/hi";
import user from "./../../../../../Imgs/adminPageUser.svg"
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../../../../Hooks/UseAppSelector";

const AboutAgents = () => {

    const {acceptAgents} = useAppSelector(s => s.AdminSlice)


    console.log(acceptAgents)

    return (
        <div>
            <HiOutlineArrowLeft className="text-xl mb-4"/>
            <NavLink to={"/home-admin/agents/resume"}>
                <div className="cursor-pointer">
                    <div className="flex items-center justify-between px-4 py-2 border-b-2 border-gray-300">
                        <img src={user} alt=""/>
                        <h3 className="text-xl">Eleanor Pane</h3>
                        <h4 className="text-lg">Senior Property Advisor</h4>
                        <div></div>
                        <div>
                            <h4 className="text-sm">Sat 17 June </h4>
                            <h5 className='text-sm text-gray-300'>12:00 PM</h5>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default AboutAgents;