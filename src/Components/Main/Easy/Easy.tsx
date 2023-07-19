import React from 'react';
import '../Easy/Easy.scss'
import imgEasy from "../../../Imgs/Rectangle 3.svg"
import imgEasy2 from "../../../Imgs/Frame 14.png"
import imgEasy4 from "../../../Imgs/Rectangle 3.png"
import imgEasy5 from "../../../Imgs/Frame 14 (1).png"
import {useNavigate} from "react-router-dom";

const Easy = () => {
    const nav = useNavigate()

    const navAgents = () => {
        window.scroll(0, 0)
        nav('/agents')
    }

    const navBuy = () => {
        window.scroll(0, 0)
        nav('/buy')
    }


    return (
        <section id="easy">
            <div className="container">
                <div className="easy">
                    <h1>Easy Home Search</h1>
                    <p>We can help you to find your dream home</p>

                    <div className="easy--block">

                        <div className="easy--block__agents">
                            <img onClick={navAgents} className="easy--image1" src={imgEasy} alt=""/>
                            <div className="easy--box">
                                <h2>Find your SuperAgent</h2>
                                <h4 className="easy--desc">The most responsive agents with up-to-date
                                    and improved accuracy on the properties you are searching for.</h4>
                            </div>
                            <img className="easy--image" src={imgEasy2} alt=""/>
                        </div>

                        <div className="easy--block__listings">
                            <img onClick={navBuy} className="easy--image1" src={imgEasy4} alt=""/>
                            <div className="easy--box">
                                <h2>Verified listings</h2>
                                <h4 className="easy--desc">The most responsive agents with up-to-date
                                    and improved accuracy on the properties you are searching for.</h4>
                            </div>
                            <img className="easy--image" src={imgEasy5} alt=""/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Easy;