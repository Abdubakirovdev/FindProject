import React from 'react';
import '../SuperAgent/SuperAgent.scss'
import agentImg from "../../../Imgs/Agent.svg"
import agentImg1 from "../../../Imgs/Agent (5).svg"
import agentImg2 from "../../../Imgs/Agent (1).svg"
import agentImg3 from "../../../Imgs/Agent (2).svg"
import agentImg4 from "../../../Imgs/Agent (3).svg"
import agentImg5 from "../../../Imgs/Agent (4).svg"
import {NavLink, useNavigate} from "react-router-dom";

const SuperAgent = () => {
    const nav = useNavigate()

    const navigate = () => {
        nav('/regis')
        window.scroll(0, 0)
    }
    return (
        <section id="agent">
            <div className="container">
                <div className="agent">
                    <div className="agent--titles">
                        <h1>Meet our SuperAgents</h1>
                        <NavLink onClick={() => window.scroll(0, 0)} to={'/agents'}>
                            <button>See more</button>
                        </NavLink>
                    </div>
                    <div className="agent--box">
                        <img src={agentImg} alt=""/>
                        <img src={agentImg1} alt=""/>
                        <img src={agentImg2} alt=""/>
                        <img src={agentImg3} alt=""/>
                        <img src={agentImg4} alt=""/>
                        <img src={agentImg5} alt=""/>
                    </div>
                    <div className="agent--block">
                        <h1>List your property with us</h1>
                        <p>Grow your business with property finder</p>
                        <button onClick={navigate}>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuperAgent;