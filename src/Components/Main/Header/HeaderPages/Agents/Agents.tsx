import React from 'react';
import "./style.scss"
import main from '../../../../../Imgs/image Agents.svg'
import {CiSearch} from "react-icons/ci";
import Alexander from '../../../../../Imgs/Alecandr.svg'
import {RiMedalLine} from "react-icons/ri";
import pena from '../../../../../Imgs/pena.svg'
import marv from '../../../../../Imgs/marv.svg'
import fox from '../../../../../Imgs/fox.svg'
import cooper from '../../../../../Imgs/cooper.svg'
import jenny from '../../../../../Imgs/jenny.svg'
import jones from '../../../../../Imgs/jones.svg'
import brook from '../../../../../Imgs/brook.svg'

const Agents = () => {
    return (
        <div id="agents">
            {/*<div className="container">*/}
                <div className="agents">
                    <img className="agents__svg" src={main} alt=""/>
                    <h1 className="agents__find">Find your agent to find your home</h1>
                    <div className="agents__search">
                        <div className="agents__search--cont">
                            <input className="agents__search--inp" type="text" placeholder="Name or the location of the agent" />
                            <button className="agents__search--btn"><i><CiSearch/></i>Search</button>
                        </div>

                        <div className="">
                            <select name="" id="">
                                <option value="">English</option>
                                <option value="">Russian</option>
                                <option value="">Kyrgyz</option>
                            </select>
                        </div>
                    </div>
                    <div className="agents__peoples">
                        <div className="agents__peoples--alex">
                            <img src={Alexander} alt=""/>
                            <h1>Leslie Alexander</h1>
                            <p>SENIOR PROPERTY ADVISOR</p>
                            <button><i><RiMedalLine/></i>SUPERAGENT</button>
                        </div>
                        <div className="agents__peoples--alex">
                            <img src={pena} alt=""/>
                            <h1>Eleanor Pena</h1>
                            <p>SENIOR PROPERTY ADVISOR</p>
                            <button><i><RiMedalLine/></i>SUPERAGENT</button>
                        </div>
                        <div className="agents__peoples--alex">
                            <img src={marv} alt=""/>
                            <h1>Marvin McKinney</h1>
                            <p>SENIOR PROPERTY ADVISOR</p>
                            <button><i><RiMedalLine/></i>SUPERAGENT</button>
                        </div>
                        <div className="agents__peoples--alex">
                            <img src={fox} alt=""/>
                            <h1>Robert Fox</h1>
                            <p>SENIOR PROPERTY ADVISOR</p>
                            <button><i><RiMedalLine/></i>SUPERAGENT</button>
                        </div>
                        <div className="agents__peoples--alex">
                            <img src={cooper} alt=""/>
                            <h1>Bessie Cooper</h1>
                            <p>SENIOR PROPERTY ADVISOR</p>
                            <button><i><RiMedalLine/></i>SUPERAGENT</button>
                        </div>
                        <div className="agents__peoples--alex">
                            <img src={jenny} alt=""/>
                            <h1>Jenny Wilson</h1>
                            <p>SENIOR PROPERTY ADVISOR</p>
                            <button><i><RiMedalLine/></i>SUPERAGENT</button>
                        </div>
                        <div className="agents__peoples--alex">
                            <img src={jones} alt=""/>
                            <h1>Jacob Jones</h1>
                            <p>SENIOR PROPERTY ADVISOR</p>
                            <button><i><RiMedalLine/></i>SUPERAGENT</button>
                        </div>
                        <div className="agents__peoples--alex">
                            <img src={brook} alt=""/>
                            <h1>Brooklyn Simmons</h1>
                            <p>SENIOR PROPERTY ADVISOR</p>
                            <button><i><RiMedalLine/></i>SUPERAGENT</button>
                        </div>
                    </div>
                    <center>
                        <button className="agents__see">See more</button>
                    </center>
                </div>
            {/*</div>*/}
        </div>
    );
};

export default Agents;