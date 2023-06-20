import React, {useState} from 'react';
import '../Header/Header.scss'
import logo from '../../../Imgs/Logo.svg'
import {NavLink, useNavigate} from "react-router-dom";
import {RiMenu3Line} from "react-icons/ri";
import {IoCloseSharp} from "react-icons/io5";
import {CgProfile} from "react-icons/cg";
import {useAppSelector} from "../../../Hooks/UseAppSelector";


const Header = () => {

    const navigate = useNavigate()
    const [burger, setBurger] = useState(false)
    const [header, setHeader] = useState(false)

    const {log} = useAppSelector(s => s.LoginSlice)

    const showLog = log.slice(0,1).map(el => el.email)
    const getHead = () =>{
        let loc = localStorage.getItem('value')
        console.log(loc)
    }

    return (
        <header id='header'>
            <div className='container'>
                <div className='header'>
                    <div className="header--logo">
                        <NavLink to={'/'}>
                            {
                                header ? <CgProfile/> : <img src={logo} alt="img"/>
                            }
                        </NavLink>
                    </div>
                    <div className="header--logo2">
                        <button onClick={() => setBurger(!burger)}>{burger ? <IoCloseSharp/> : <RiMenu3Line/>}</button>
                    </div>
                    <div className='header--burger' style={{
                        display: burger ? 'block' : 'none'
                    }}>
                        <div className='header--burger__nav'>
                            <div className='header--burger__nav--link'>
                                <NavLink to={'/buy'}>Buy</NavLink>
                                <NavLink to={'/rent'}>Rent</NavLink>
                                <NavLink to={'/agents'}>Agents</NavLink>
                                <NavLink to={'/review'}>Reviews</NavLink>
                            </div>
                            <div className='header--burger__nav--button'>
                                <button onClick={() => navigate('register')}>Log in</button>
                            </div>
                            <div className='header--burger__nav--select'>
                                <select name="" id="">
                                    <option value="">English</option>
                                    <option value="">Russian</option>
                                    <option value="">Kyrgyz</option>
                                </select>
                            </div>
                        </div>
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
                            <button onClick={() => navigate('register')}>{showLog.length > 0 ? "Syrgabek" : "login"}</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </header>
    );
};

export default Header;