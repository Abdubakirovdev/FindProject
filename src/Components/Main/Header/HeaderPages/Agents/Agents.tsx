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
import {Link} from "react-router-dom";

const Agents = () => {
    return (
        <div id="agents">
            {/*<div className="container">*/}
            <div className="agents">
                <img className="agents__svg" src={main} alt=""/>
                <h1 className="agents__find">Find your agent to find your home</h1>
                <div className="agents__search">
                    <div className="agents__search--cont">
                        <input className="agents__search--inp" type="text"
                               placeholder="Name or the location of the agent"/>
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
                        <Link to="/AgentsDetail">
                            <img src={Alexander} alt=""/>
                        </Link>
                        <h1>Leslie Alexander</h1>
                        <p>SENIOR PROPERTY ADVISOR</p>
                        <button><i><RiMedalLine/></i>SUPERAGENT</button>
                    </div>
                    <div className="agents__peoples--alex">
                        <Link to="/AgentsDetail">
                            <img src={pena} alt=""/>

                        </Link>
                        <h1>Eleanor Pena</h1>
                        <p>SENIOR PROPERTY ADVISOR</p>
                        <button><i><RiMedalLine/></i>SUPERAGENT</button>
                    </div>
                    <div className="agents__peoples--alex">
                        <Link to="/AgentsDetail">
                            <img src={marv} alt=""/>

                        </Link>
                        <h1>Marvin McKinney</h1>
                        <p>SENIOR PROPERTY ADVISOR</p>
                        <button><i><RiMedalLine/></i>SUPERAGENT</button>
                    </div>
                    <div className="agents__peoples--alex">
                        <Link to="/AgentsDetail">
                            <img src={fox} alt=""/>
                        </Link>

                        <h1>Robert Fox</h1>
                        <p>SENIOR PROPERTY ADVISOR</p>
                        <button><i><RiMedalLine/></i>SUPERAGENT</button>
                    </div>
                    <div className="agents__peoples--alex">
                        <Link to="/AgentsDetail">
                            <img src={cooper} alt=""/>
                        </Link>

                        <h1>Bessie Cooper</h1>
                        <p>SENIOR PROPERTY ADVISOR</p>
                        <button><i><RiMedalLine/></i>SUPERAGENT</button>
                    </div>
                    <div className="agents__peoples--alex">
                        <Link to="/AgentsDetail">
                            <img src={jenny} alt=""/>
                        </Link>

                        <h1>Jenny Wilson</h1>
                        <p>SENIOR PROPERTY ADVISOR</p>
                        <button><i><RiMedalLine/></i>SUPERAGENT</button>
                    </div>
                    <div className="agents__peoples--alex">
                        <Link to="/AgentsDetail">
                            <img src={jones} alt=""/>

                        </Link>
                        <h1>Jacob Jones</h1>
                        <p>SENIOR PROPERTY ADVISOR</p>
                        <button><i><RiMedalLine/></i>SUPERAGENT</button>
                    </div>
                    <div className="agents__peoples--alex">
                        <Link to="/AgentsDetail">
                            <img src={brook} alt=""/>
                        </Link>
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