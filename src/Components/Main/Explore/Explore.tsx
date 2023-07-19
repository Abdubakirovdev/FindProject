import React from 'react';
import '../Explore/Explore.scss'
import exImg from   "../../../Imgs/Rectangle 9.svg"
import {NavLink} from "react-router-dom";
import ExCard from "./ExCard/ExCard";

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
                        <NavLink onClick={() => window.scroll(0,0)} to={'/buy'}>
                            <button className="ex--btn1">See more</button>
                        </NavLink>

                    </div>
                </div>
                <ExCard/>
            </div>
        </section>
    );
};

export default Explore;