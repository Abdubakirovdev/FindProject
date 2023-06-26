import React from 'react';
import './AgentsDetail.scss'
import Alex from '../../../../../../Imgs/Alecandr.svg'
import Paragon from '../../../../../../Imgs/Paragon.svg'
import {RiMedalLine} from "react-icons/ri";
import {BsTelephone} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";

const AgentsDetail = () => {
    return (
        <div id="AgentsDetail">
            <div className="container">
                <div className="AgentsDetail">
                    <div className="AgentsDetail__about">
                        <img className="AgentsDetail__Alex" src={Alex} alt=""/>
                        <div className="AgentsDetail__about--title">
                            <h1>Leslie Alexander</h1>
                            <p>SENIOR PROPERTY ADVISOR</p>
                            <button><i><RiMedalLine/></i>SUPERAGENT</button>
                        </div>

                    </div>
                    <p className="AgentsDetail__lang">Languages:<strong> English, Russian</strong></p>

                    <div className="AgentsDetail__line"></div>
                    <div className="AgentsDetail__info">
                        <h1>Personal information</h1>
                        <p>Areas: <strong>Bishkek</strong></p>
                        <p className="AgentsDetail__info--p">Active listings: <a href="">15 Properties</a></p>
                        <p>Experience since: <strong>2020</strong></p>
                    </div>


                    <div className="other">
                        <div className="AgentsDetail__contact">
                            <h1>Contact this agent</h1>
                            <div className="AgentsDetail__contact--call">
                                <a href=""><i><BsTelephone/></i>Call agent</a>
                            </div>
                            <div className="AgentsDetail__contact--email">
                                <a href=""><i><AiOutlineMail/></i> Email agent</a>
                            </div>
                        </div>
                        <div className="AgentsDetail__company">
                            <h1>Company</h1>
                            <img src={Paragon} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AgentsDetail;