import React from 'react';
import Grand1 from "./../../../../../../Imgs/grand-hero-1 2.png"
import Grand2 from "./../../../../../../Imgs/grand-hero-2.png"
import Grand3 from "./../../../../../../Imgs/grand-hero-3.png"
import Grand4 from "./../../../../../../Imgs/grand-hero-4.png"
import Grand5 from "./../../../../../../Imgs/grand-hero-5.png"
import {BsBookmark} from "react-icons/bs";

const GrandHero = () => {
    return (
        <div className="flex flex-col container pt-[100px] text-[#004A60]">
            <h3 className="mb-4 text-xl 768:text-lg">Rent a dream apartment</h3>
            <div className="w-full rounded-[32px] flex items-center justify-between max-768:overflow-x-scroll max-768:h-[320px] max-768:rounded-[0] max-768:ml-[-13%] max-768:w-[126%] ">
                <img src={Grand1} alt="img" className="w-[48%] max-768:h-[100%] max-768:w-[80%]"/>
                <img src={Grand2} alt="img" className="hidden h-[100%] max-768:block"/>
                <img src={Grand3} alt="img" className="hidden h-[100%] max-768:block"/>
                <img src={Grand4} alt="img" className="hidden h-[100%] max-768:block"/>
                <img src={Grand5} alt="img" className="hidden h-[100%] max-768:block"/>
                <div className="flex flex-wrap justify-around ml-6 max-768:hidden">
                    <img src={Grand2} alt="img" className="mb-4 w-[46%] 1200:w-[45%] "/>
                    <img src={Grand3} alt="img" className="mb-4 w-[46%] 1200:w-[45%]"/>
                    <img src={Grand4} alt="img" className=" w-[46%] 1200:w-[45%]"/>
                    <img src={Grand5} alt="img" className=" w-[46%] 1200:w-[45%]"/>
                </div>
            </div>
            <div className="flex items-center my-8 992:my-4 text-3xl 1024:text-2xl 992:text-xl 768:text-2xl"><h2 className="mr-6 font-semibold">The Grand Estate</h2>
                <BsBookmark/></div>
        </div>
    );
};

export default GrandHero;