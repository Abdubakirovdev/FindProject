import React from 'react';
import '../SuperAgent/SuperAgent.scss'
import agentImg from "../../../Imgs/Agent.svg"
import agentImg1 from "../../../Imgs/Agent (5).svg"
import agentImg2 from "../../../Imgs/Agent (1).svg"
import agentImg3 from "../../../Imgs/Agent (2).svg"
import agentImg4 from "../../../Imgs/Agent (3).svg"
import agentImg5 from "../../../Imgs/Agent (4).svg"

const SuperAgent = () => {
    return (
        <section id="agent">
            <div className="container">
                <div className="agent">
                    <div className="agent--titles">
                        <h1>Meet our SuperAgents</h1>
                        <button>See more</button>
                    </div>
                    <div className="agent--box">
                        <div>
                            <img src={agentImg} alt=""/>
                        </div>
                        <div>
                            <img src={agentImg1} alt=""/>
                        </div>
                        <div>
                            <img src={agentImg2} alt=""/>
                        </div>
                        <div>
                            <img src={agentImg3} alt=""/>
                        </div>
                        <div>
                            <img src={agentImg4} alt=""/>
                        </div>
                        <div>
                            <img src={agentImg5} alt=""/>
                        </div>
                    </div>
                    <div className="agent--block">
                        <h1>List your property with us</h1>
                        <p>Grow your business with property finder</p>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuperAgent;