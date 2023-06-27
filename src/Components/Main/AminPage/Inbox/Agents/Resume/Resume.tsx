import React, {FormEvent, useState} from 'react';
import {HiOutlineArrowLeft} from "react-icons/hi";
import userPhoto from "../../../../../../Imgs/resumeUser.svg"
import {BsBehance} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import selectedWork from "./../../../../../../Imgs/selectedWork.png"
import {NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../../../Hooks/UseAppDispatch";
import {acceptAgent} from "../../../../../../store/Reducer/AdminSlice";


const Resume = () => {

    const nav = useNavigate()

    const data = {
        id: 0,
        name: "Leslie Alexander",
        rang: "SENIOR PROPERTY ADVISOR",
        resume: ""
    }

    const dispatch = useAppDispatch()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const newAcceptUser = {
            id: Math.round(Math.random() * 1000),
            name: data.name,
            rang: data.rang,
            resume: "Accepted"
        }
        dispatch(acceptAgent(newAcceptUser))

    }
    const handleDeclined = (e: FormEvent) => {
        e.preventDefault()
        const newDeclineUser = {
            id: data.id,
            resume: "Declined"
        }
        dispatch(acceptAgent(newDeclineUser))
        nav("/home-admin/agents")
    }

    return (
        <div className="flex items-start ">
            <HiOutlineArrowLeft className="text-xl mr-8 mt-2"/>
            <div className="flex flex-col items-center mb-8">
                <div className="flex bg-gray-100 py-[37px] px-[27px] ml-6 flex-col w-[880px] text-[#004A60]">
                    <div className="flex items-start border-b-2 border-[#ABABAB] pb-[25px]">
                        <img src={userPhoto} alt="user" className="mr-6"/>
                        <div className="flex flex-col text-[#004A60]">
                            <div className="mb-6">
                                <h1 className="text-3xl fond-medium">{data.name}</h1>
                                <h4 className="uppercase text-sm">{data.rang}</h4>
                            </div>
                            <div className="flex w-[600px] justify-between">
                                <div>
                                    <h3 className="text-[#818181] text-sm font-semibold my-2">CONTACT</h3>
                                    <div
                                        className="flex border-1 border-[#AFC6CD] rounded p-[12px] h-[100px] items-start">
                                        <div className="flex flex-col justify-between h-full justify-around">
                                            <h4>Email</h4>
                                            <h4>Phone No.</h4>
                                            <h4>Areas:</h4>
                                        </div>
                                        <div
                                            className="ml-4 flex flex-col flex-wrap justify-between h-full justify-around">
                                            <h4>mail@yourwebsite.com</h4>
                                            <h4>996+7003599733</h4>
                                            <h4>Bishkek</h4>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-[#818181] text-sm font-semibold my-2">SOCIAL</h3>
                                    <div className="flex h-[100px]">
                                        <div className="flex flex-col  h-full justify-around">
                                            <BsBehance/>
                                            <BsBehance/>
                                            <AiFillLinkedin/>
                                        </div>
                                        <div className="ml-4 h-full flex flex-col  justify-around">
                                            <h4>behance.net/username</h4>
                                            <h4>behance.net/username</h4>
                                            <h4>linkedin.com/username</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-8">
                        <h2 className="text-[#818181] text-base mb-2 font-semibold">SELECTED WORK</h2>
                        <div className="flex items-start justify-around">
                            <div className="w-1/4">
                                <img src={selectedWork} alt=""/>
                                <h3 className="text-lg font-bold">Work name 1</h3>
                                <p className="text-xs">Here a short explanation about the project. Not more than 2 or 3
                                    lines. </p>
                                <NavLink to={"/find-work"} className="text-sm text-blue-700 border-b border-sky-700">URL
                                    to
                                    work</NavLink>
                            </div>
                            <div className="w-1/4">
                                <img src={selectedWork} alt=""/>
                                <h3 className="text-lg font-bold">Work name 1</h3>
                                <p className="text-xs">Here a short explanation about the project. Not more than 2 or 3
                                    lines. </p>
                                <NavLink to={"/find-work"} className="text-sm text-blue-700 border-b border-sky-700">URL
                                    to
                                    work</NavLink>
                            </div>
                            <div className="w-1/4">
                                <img src={selectedWork} alt=""/>
                                <h3 className="text-lg font-bold">Work name 1</h3>
                                <p className="text-xs">Here a short explanation about the project. Not more than 2 or 3
                                    lines. </p>
                                <NavLink to={"/find-work"} className="text-sm text-blue-700 border-b border-sky-700">URL
                                    to
                                    work</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="w-[90%]">
                            <div className="flex flex-wrap flex-col items-start">
                                <h2 className="text-[#818181] text-base mb-2 font-semibold">EXPERIENCE</h2>
                                <div className="flex flex-wrap items-start ">
                                    <div className="flex flex-col items-start w-[48%] mr-2 py-2">
                                        <h3 className="text-lg font-semibold">Job title</h3>
                                        <h4>Company name</h4>
                                        <h4 className="text-[#686868] italic text-sm">Jan 2020 - Jan 2022 | 1 Year</h4>
                                        <p className="text-sm">Here a short explanation about what you did at this
                                            company.
                                            Not more than 3 or 4 lines. </p>
                                    </div>
                                    <div className="flex flex-col items-start w-[48%] mr-2 py-2">
                                        <h3 className="text-lg font-semibold">Job title</h3>
                                        <h4>Company name</h4>
                                        <h4 className="text-[#686868] italic text-sm">Jan 2020 - Jan 2022 | 1 Year</h4>
                                        <p className="text-sm">Here a short explanation about what you did at this
                                            company.
                                            Not more than 3 or 4 lines. </p>
                                    </div>
                                    <div className="flex flex-col items-start w-[48%] mr-2 py-2">
                                        <h3 className="text-lg font-semibold">Job title</h3>
                                        <h4>Company name</h4>
                                        <h4 className="text-[#686868] italic text-sm">Jan 2020 - Jan 2022 | 1 Year</h4>
                                        <p className="text-sm">Here a short explanation about what you did at this
                                            company.
                                            Not more than 3 or 4 lines. </p>
                                    </div>
                                    <div className="flex flex-col items-start w-[48%] mr-2 py-2">
                                        <h3 className="text-lg font-semibold">Job title</h3>
                                        <h4>Company name</h4>
                                        <h4 className="text-[#686868] italic text-sm">Jan 2020 - Jan 2022 | 1 Year</h4>
                                        <p className="text-sm">Here a short explanation about what you did at this
                                            company.
                                            Not more than 3 or 4 lines. </p>
                                    </div>
                                </div>
                            </div>
                            <div className=" mt-10">
                                <h2 className="text-[#818181] text-base mb-2 font-semibold">EXPERIENCE</h2>
                                <div className="flex flex-wrap items-start">
                                    <div className="flex flex-col items-start w-[48%] mr-2 py-2">
                                        <h3 className="text-lg font-semibold">Degree & Name</h3>
                                        <h4>University/School name</h4>
                                        <h4 className="text-[#686868] italic text-sm">Jan 2020 - Jan 2022</h4>
                                    </div>
                                    <div className="flex flex-col items-start w-[48%] mr-2 py-2">
                                        <h3 className="text-lg font-semibold">Degree & Name</h3>
                                        <h4>University/School name</h4>
                                        <h4 className="text-[#686868] italic text-sm">Jan 2020 - Jan 2022</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[2px] h-[500px] bg-[#ABABAB]"/>
                        <div className="px-8">
                            <div>
                                <h3 className="text-[#818181] font-semibold mt-6 text-sm">SKILLS</h3>
                                <p className="text-sm">User Interface Design <br/>
                                    Typography <br/>
                                    Design System <br/>
                                    Usability Testing <br/>
                                    HTML/CSS</p>
                            </div>
                            <div>
                                <h3 className="text-[#818181] font-semibold mt-6 text-sm">LANGUAGES</h3>
                                <p className="text-sm">
                                    French (mother language) <br/>
                                    German (fluent level) <br/>
                                    English (advanced level) <br/>
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#818181] font-semibold mt-6 text-sm">HOBBIES</h3>
                                <p className="text-sm">Piano <br/>
                                    Lettering <br/>
                                    Screenprinting <br/>
                                    Swimming <br/>
                                    Photography</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[300px] flex items-center justify-between my-10">
                    <button onClick={handleDeclined} className="px-[30px] text-white py-[8px] rounded bg-blue-600">Decline</button>
                    <button onClick={handleSubmit}
                            className="px-[30px] text-white py-[8px] rounded bg-blue-600">Accept
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Resume;