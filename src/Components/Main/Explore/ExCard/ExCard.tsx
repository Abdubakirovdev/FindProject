import React from 'react';
import {NavLink} from "react-router-dom";
import exImg from "../../../../Imgs/Rectangle 9.svg";
import "./ExCard.scss"


const ExCard = () => {
    return (
        <div className="ex--card1">
            <div className="ex--cards">
                <div className="ex--cards__card">
                    <NavLink to={'/apartment'}>
                        <img className="ex--cards__card--image" src={exImg} alt=""/></NavLink>
                    <h2>The Grand Estate</h2>
                    <div className="ex--cards__card--titles">
                        <p>Bishkek</p>
                        <h4>$ 100 000</h4>
                    </div>
                </div>
            </div>
            <div className="ex--cards">
                <div className="ex--cards__card">
                    <img className="ex--cards__card--image" src={exImg} alt=""/>
                    <h2>The Grand Estate</h2>
                    <div className="ex--cards__card--titles">
                        <p>Bishkek</p>
                        <h4>$ 100 000</h4>
                    </div>
                </div>
            </div>
            <div className="ex--cards">
                <div className="ex--cards__card">
                    <img className="ex--cards__card--image" src={exImg} alt=""/>
                    <h2>The Grand Estate</h2>
                    <div className="ex--cards__card--titles">
                        <p>Bishkek</p>
                        <h4>$ 100 000</h4>
                    </div>
                </div>
            </div>
            <div className="ex--cards">
                <div className="ex--cards__card">
                    <img className="ex--cards__card--image" src={exImg} alt=""/>
                    <h2>The Grand Estate</h2>
                    <div className="ex--cards__card--titles">
                        <p>Bishkek</p>
                        <h4>$ 100 000</h4>
                    </div>
                </div>
            </div>
            <div className="ex--cards">
                <div className="ex--cards__card">
                    <img className="ex--cards__card--image" src={exImg} alt=""/>
                    <h2>The Grand Estate</h2>
                    <div className="ex--cards__card--titles">
                        <p>Bishkek</p>
                        <h4>$ 100 000</h4>
                    </div>
                </div>
            </div>
            <div className="ex--cards">
                <div className="ex--cards__card">
                    <img className="ex--cards__card--image" src={exImg} alt=""/>
                    <h2>The Grand Estate</h2>
                    <div className="ex--cards__card--titles">
                        <p>Bishkek</p>
                        <h4>$ 100 000</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExCard;