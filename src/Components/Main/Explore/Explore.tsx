import React from 'react';
import '../Explore/Explore.scss'
import exImg from   "../../../Imgs/Rectangle 9.svg"
import {NavLink} from "react-router-dom";

const Explore = () => {

    return (
        <section id="ex">
            <div className="container">
                <div className="ex">
                    <h1>Explore the New Properties</h1>
                    <div className="ex--box">
                        <select>
                            <option value="">Recently added</option>
                            <option value="">Most Popular</option>
                            <option value="">Cheapest</option>
                            <option value="">The most expensive</option>
                        </select>
                        <button className="ex--btn1">See more</button>
                    </div>
                </div>

                <div className="ex--card1">
                    <div className="ex--cards">
                        <div className="ex--cards__card">
                          <NavLink to={'/apartment'}><img src={exImg} alt=""/></NavLink>
                            <h2>The Grand Estate</h2>
                            <div className="ex--cards__card--titles">
                                <p>Bishkek</p>
                                <h4>$ 100 000</h4>
                            </div>
                        </div>
                    </div>
                    <div className="ex--cards">
                        <div className="ex--cards__card">
                            <img src={exImg} alt=""/>
                            <h2>The Grand Estate</h2>
                            <div className="ex--cards__card--titles">
                                <p>Bishkek</p>
                                <h4>$ 100 000</h4>
                            </div>
                        </div>
                    </div>
                    <div className="ex--cards">
                        <div className="ex--cards__card">
                            <img src={exImg} alt=""/>
                            <h2>The Grand Estate</h2>
                            <div className="ex--cards__card--titles">
                                <p>Bishkek</p>
                                <h4>$ 100 000</h4>
                            </div>
                        </div>
                    </div>
                    <div className="ex--cards">
                        <div className="ex--cards__card">
                            <img src={exImg} alt=""/>
                            <h2>The Grand Estate</h2>
                            <div className="ex--cards__card--titles">
                                <p>Bishkek</p>
                                <h4>$ 100 000</h4>
                            </div>
                        </div>
                    </div>
                    <div className="ex--cards">
                        <div className="ex--cards__card">
                            <img src={exImg} alt=""/>
                            <h2>The Grand Estate</h2>
                            <div className="ex--cards__card--titles">
                                <p>Bishkek</p>
                                <h4>$ 100 000</h4>
                            </div>
                        </div>
                    </div>
                    <div className="ex--cards">
                        <div className="ex--cards__card">
                            <img src={exImg} alt=""/>
                            <h2>The Grand Estate</h2>
                            <div className="ex--cards__card--titles">
                                <p>Bishkek</p>
                                <h4>$ 100 000</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Explore;