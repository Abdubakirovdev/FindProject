import React from 'react';
import '../Footer/Footer.scss'
import logo from '../../../Imgs/Logo.svg'
import {NavLink} from "react-router-dom";
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin} from "react-icons/ai";


const Footer = () => {
    return (
        <footer id='footer'>
            <div className='container'>
                <div className='footer'>
                    <div className='footer__title'>
                        <div className='footer__title--left'>
                            <NavLink to={'/'}><img src={logo} alt="img"/></NavLink>
                            <p>The shortest distance between <br/>
                                paradise and the place you call <br/>
                                home.</p>
                        </div>
                        <div className='footer__title--right'>
                            <div className='footer__title--right__block'>
                                <NavLink className='footer__title--right__block--gl' to={'about'}>About</NavLink>
                                <div className='footer__title--right__block--blocks'>
                                    <NavLink to={'aboutUs'}>About us</NavLink>
                                    <NavLink to={'features'}>Features</NavLink>
                                    <NavLink to={'newsBlogs'}>News & Blogs</NavLink>
                                </div>
                            </div>
                            <div className='footer__title--right__block' >
                                <NavLink className='footer__title--right__block--gl' to={'about'}>Company</NavLink>
                                <div className='footer__title--right__block--blocks'>
                                    <NavLink to={'aboutUs'}>How we work</NavLink>
                                    <NavLink to={'features'}>Capital</NavLink>
                                    <NavLink to={'newsBlogs'}>Security</NavLink>
                                </div>
                            </div>
                            <div className='footer__title--right__block'>
                                <NavLink className='footer__title--right__block--gl' to={'about'}>Support</NavLink>
                                <div className='footer__title--right__block--blocks' >
                                    <NavLink to={'aboutUs'}>FAQ</NavLink>
                                    <NavLink to={'features'}>Support Center</NavLink>
                                    <NavLink to={'newsBlogs'}>Contact Us</NavLink>
                                </div>
                            </div>
                            <div className='footer__title--right__block'>
                                <NavLink className='footer__title--right__block--gl' to={'about'}>Follow us</NavLink>
                                <div className='footer__title--right__block--blockss'>
                                    <NavLink to={'/'}><AiFillFacebook/></NavLink>
                                    <NavLink to={'/'}><AiFillLinkedin/></NavLink>
                                    <NavLink to={'/'}><AiFillInstagram/></NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="footer__center">
                            <h4>Terms & Agreements</h4>
                            <h4>Privacy Policy</h4>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;