import React from 'react';
import {RiBallPenLine} from "react-icons/ri";
import './Profile.scss'
import {NavLink, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../../../../Hooks/UseAppSelector";
import home from '../../../../../../Imgs/home.png'

const Profile = () => {

    const {log} = useAppSelector(state => state.loginSlice)
    const navi = useNavigate()

    return (
        <div id='profile'>
            <div className='container'>
                <div className='profile'>
                    <div className='profile--change'>
                        <div className='profile--change__left'>
                            <NavLink to={'/regis'}>Change profile <RiBallPenLine/></NavLink>
                            {
                                log.slice(0,1).map(el=>(
                                    <div>
                                        <h1>{el.name}</h1>
                                    </div>
                                ))
                            }
                            <div className='profile--change__left--city'>
                                <h5>City:</h5>
                                <h5>Bishkek</h5>
                            </div>
                            <hr/>
                        </div>
                        <div className='profile--change__right'>
                            <button onClick={() => navi('/property')}>Add property</button>
                            <button>Become agent</button>
                        </div>
                    </div>
                    <div className='profile--save'>
                        <h1>Saved properties:</h1>
                        <div className='profile--save__block'>
                            <img src={home} alt=""/>
                            <div className='profile--save__block--right'>
                                <div className='profile--save__block--right__top'>
                                    <h5>Apartment</h5>
                                    <h2>The Grand Estate</h2>
                                </div>
                                    <div className='profile--save__block--right__center'>
                                        <h6>1 Bathroom</h6>
                                        <h6>1 Bathroom</h6>
                                        <h6>1 Bathroom</h6>
                                    </div>
                                    <div className='profile--save__block--right__bottom'>
                                        <h5>Bishkek</h5>
                                        <h5>$ 10 000</h5>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;