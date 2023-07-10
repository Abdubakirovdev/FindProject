import React from 'react';
import {BsDoorClosed, BsThermometerHigh, BsVolumeUp, BsWifi} from "react-icons/bs";
import {LuMicrowave, LuParkingSquare} from "react-icons/lu";
import {GiWashingMachine} from "react-icons/gi";
import {TbAirConditioning} from "react-icons/tb";
import {MdComputer, MdSmokeFree} from "react-icons/md";
import Agent from "../../../../../../Imgs/grant-agent.svg"

const GrandAmenities = () => {
    return (
        <div className="container">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 mt-8">Amenities</h2>
                    <div className="text-xl w-[70%] 1200:w-[90%] flex items-center flex-wrap ">
                        <div className="flex items-center mr-16 my-3"><BsDoorClosed className="mr-[10px]"/><span>Balkony</span></div>
                        <div className="flex items-center mr-16 my-3"><LuParkingSquare className="mr-[10px]"/><span>Covered parking </span></div>
                        <div className="flex items-center mr-16 my-3"><GiWashingMachine className="mr-[10px]"/><span>Washing machine</span></div>
                        <div className="flex items-center mr-16 my-3"><LuMicrowave className="mr-[10px]"/><span>Microwave </span></div>
                        <div className="flex items-center mr-16 my-3"><BsThermometerHigh className="mr-[10px]"/><span>Central heating</span></div>
                        <div className="flex items-center mr-16 my-3"><TbAirConditioning className="mr-[10px]"/><span>Air-conditioner</span></div>
                        <div className="flex items-center mr-16 my-3"><BsWifi className="mr-[10px]"/><span>WiFi</span></div>
                        <div className="flex items-center mr-16 my-3"><MdComputer className="mr-[10px]"/><span>TV</span></div>
                    </div>
                </div>
                <div className="w-[34%] flex flex-col items-center mt-10">
                    <h3 className="text-xl font-semibold mb-3">Owner</h3>
                    <img src={Agent} alt=""/>
                    <h4 className="border-b-2 text-blue-500 border-b-blue-500 text-xl my-3">Timur Timurov</h4>
                    <button className="border-2 rounded-xl  border-gray-200 py-2 px-16 my-2 text-xl 1200:text-lg 1200:px-4">Contact owner</button>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4 mt-8">House roules</h2>
                <div className="text-xl flex items-center flex-wrap ">
                    <div className="flex items-center mr-16 my-3"><MdSmokeFree className="mr-[10px]"/><span>Smoking in the  apartment</span></div>
                    <div className="flex items-center mr-16 my-3"><BsVolumeUp className="mr-[10px]"/><span>Listen to music loudly</span></div>
                </div>
            </div>
        </div>
    );
};

export default GrandAmenities;