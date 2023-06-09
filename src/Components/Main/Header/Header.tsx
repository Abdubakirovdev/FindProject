import React from 'react';
import '../Header/Header.scss'
import logo from '../../../Imgs/Logo.svg'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header id='header'>
            <div className='container'>
                <div className='header'>
                    <div className="header--logo">
                        <NavLink to={'/'}>
                            <img src={logo} alt="img"/>
                        </NavLink>
                    </div>
                    <div className='header--nav'>
                        <NavLink to={'/buy'}>Buy</NavLink>
                        <NavLink to={'/rent'}>Rent</NavLink>
                        <NavLink to={'/agents'}>Agents</NavLink>
                        <NavLink to={'/review'}>Reviews</NavLink>
                    </div>
                    <div className='header--search'>
                        <div className='header--search__select'>
                            <select name="" id="">
                                <option value="">English</option>
                                <option value="">Russian</option>
                                <option value="">Kyrgyz</option>
                            </select>
                        </div>
                        <div className='header--search__button'>
                            <button>Log in</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </header>
    );
};

export default Header;