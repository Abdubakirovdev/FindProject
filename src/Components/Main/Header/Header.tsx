import React, {useEffect, useState} from 'react';
import '../Header/Header.scss'
import logo from '../../../Imgs/Logo.svg'
import {NavLink, useNavigate} from "react-router-dom";
import {RiMenu3Line} from "react-icons/ri";
import {IoCloseSharp} from "react-icons/io5";
import {useAppSelector} from "../../../Hooks/UseAppSelector";
import kg from '../../../Imgs/Flag_of_Kyrgyzstan.svg.png'
import usa from '../../../Imgs/US_flag_51_stars.svg.png'
import ru from '../../../Imgs/Flag_of_Russia.svg'


const Header = () => {

    const navigate = useNavigate()
    const [burger, setBurger] = useState(false)

    const {log} = useAppSelector(s => s.LoginSlice)

    const showLog = log.slice(0,1).map(el => el.email)
    const showName = log.slice(0,1).map(el => el.name)

    const getName =()=>{
        let name = showLog.length > 0 ? showName : 'Log In'
        return name
    }

    useEffect(()=>{
        getName()
    },[])

    return (
        <header id='header'>
            <div className='container'>
                <div className='header'>
                    <div className="header--logo">
                        <NavLink to={'/'}>
                            <img src={logo} alt="img"/>
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
                                <button onClick={() => {showLog.length > 0 ? navigate('/profile'): navigate('/register') }}>{getName()}</button>
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
                                <option value=""><img src={usa} alt=""/>English</option>
                                <option value=""><img src={ru} alt=""/>Russian</option>
                                <option value=""><img src={kg} alt=""/>Kyrgyz</option>
                            </select>
                        </div>
                        <div className='header--search__button'>
                            <button onClick={() => {showLog.length > 0 ? navigate('/profile'): navigate('/register') }}>{getName()}</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='hrr'/>
        </header>
    );
};

export default Header;