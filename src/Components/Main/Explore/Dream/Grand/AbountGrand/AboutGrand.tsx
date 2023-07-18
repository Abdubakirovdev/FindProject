import React from 'react';
import {BsHouse} from "react-icons/bs";
import {BiBed, BiCabinet, BiSelection} from "react-icons/bi";
import {AiOutlineUserAdd} from "react-icons/ai";
import {MdOutlineBathtub} from "react-icons/md";
import {LuBuilding} from "react-icons/lu";
import {HiOutlineBuildingOffice2} from "react-icons/hi2";

const AboutGrand = () => {
    return (
        <div className="container max-768:!container text-white rounded-2xl bg-blue-500 text-xl 1024:text-lg 992:text-lg  flex items-center justify-around flex-wrap py-3 max-768:rounded-[0] ">
            <div className="flex items-center 1440:mx-[6%] mb-4 1200:mx-[4%] 1024:mx-[3%] 992:mx-[9px] 768:mx-[66px]"><BsHouse className="mr-1"/><span>Apartment</span></div>
            <div className="flex items-center 1440:mx-[6%] mb-4 1200:mx-[4%] 1024:mx-[3%] 992:mx-[9px] 768:mx-[66px]"><BiBed className="mr-1"/><span>1 Bedroom</span></div>
            <div className="flex items-center 1440:mx-[6%] mb-4 1200:mx-[4%] 1024:mx-[3%] 992:mx-[9px] 768:mx-[66px]"><BiCabinet className="mr-1"/><span>Furnished</span></div>
            <div className="flex items-center 1440:mx-[6%] mb-4 1200:mx-[4%] 1024:mx-[3%] 992:mx-[9px] 768:mx-[66px]"><AiOutlineUserAdd className="mr-1"/><span>Without settlement</span></div>
            <div className="flex items-center 1440:mx-[6%] 1200:mx-[4%] 1024:mx-[3%] 992:mx-[9px] 768:mx-[66px] 768:mb-4"><BiSelection className="mr-1"/><span>Square: 120 m2</span></div>
            <div className="flex items-center 1440:mx-[6%] 1200:mx-[4%] 1024:mx-[3%] 992:mx-[9px] 768:mx-[66px] 768:mb-4"><MdOutlineBathtub className="mr-1"/><span>1 Bathroom</span></div>
            <div className="flex items-center 1440:mx-[6%] 1200:mx-[4%] 1024:mx-[3%] 992:mx-[9px] 768:mx-[66px] 768:mb-4"><LuBuilding className="mr-1"/><span>Floor:3 of 12</span></div>
            <div className="flex items-center 1440:mx-[6%] 1200:mx-[4%] 1024:mx-[3%] 992:mx-[9px] 768:mx-[66px] 768:mb-4"><HiOutlineBuildingOffice2 className="mr-1"/><span>Serie: Elite</span></div>
        </div>
    );
};

export default AboutGrand;