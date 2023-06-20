import React from 'react';
import "./style.scss"
import {BsSearch} from "react-icons/bs";
import Kvartire from '../../../../../Imgs/KvartireRewiev.png'
const Reviews = () => {
    return (
        <div id="Reviews" style={{marginTop:"10%"}}>
            <div className="Reviews-hero">
                <h1>Building Reviewse</h1>
                <div className="Reviews-hero-input">
                    <div className="Reviews-hero-input-inputs">
                        <input type="text" placeholder="Enter building name or community"/>
                        <button><BsSearch className="Reviews-hero-input-Search"/>search</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="Reviews-top-reviews" style={{marginTop:"15%"}}>
                    <div className="Reviews-top-reviews-gr">
                        <div className="Reviews-top-reviews-left">
                            <h1>Top reviewed buildings in Bishkek</h1>
                            <div className="Reviews-top-reviews-left-one">
                                <div className="Reviews-top-reviews-left-one-left">
                                    <img src={Kvartire} alt=""/>
                                </div>
                                <div className="Reviews-top-reviews-left-one-right">
                                    <div>
                                        <p>Apartment</p>
                                        <h1 className="Reviews-top-reviews-left-one-right-h1">The Grand Estate</h1>
                                    </div>
                                    <div>
                                        <div className="Reviews-top-reviews-left-one-right-num">
                                            <div>
                                                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z" fill="#004A60"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4>5/5</h4>
                                            </div>
                                        </div>
                                        <div className="Reviews-top-reviews-left-one-right-btn">
                                            <div>
                                                <button className="btns"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="#004A60" fill-opacity="0.7"/>
                                                </svg>
                                                    Read reviews</button>
                                            </div>
                                            <div>
                                                <button type="button" className="btns2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.728 9.68599L14.314 8.27199L5 17.586V19H6.414L15.728 9.68599ZM17.142 8.27199L18.556 6.85799L17.142 5.44399L15.728 6.85799L17.142 8.27199ZM7.242 21H3V16.757L16.435 3.32199C16.6225 3.13452 16.8768 3.02921 17.142 3.02921C17.4072 3.02921 17.6615 3.13452 17.849 3.32199L20.678 6.15099C20.8655 6.33852 20.9708 6.59283 20.9708 6.85799C20.9708 7.12316 20.8655 7.37746 20.678 7.56499L7.242 21Z" fill="#004A60" fill-opacity="0.7"/>
                                                </svg>
                                                    Write review</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Reviews-top-reviews-right">
                            <h1 className="pb-5">Latest reviews</h1>
                            <div className="Reviews-top-reviews-right-one">
                                <p>Apartment</p>
                                <h1 className="Reviews-top-reviews-right-one-h1">The Grand Estate</h1>
                                <div className="Reviews-top-reviews-right-one-gl">
                                    <div>
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9999 15.968L16.2469 18.345L15.2979 13.572L18.8709 10.267L14.0379 9.694L11.9999 5.275V15.968ZM11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z" fill="#004A60"/>
                                        </svg>

                                    </div>
                                    <div>
                                        <p>4/5</p>
                                    </div>
                                </div>
                                <p className="Reviews-top-reviews-right-one-p">It’s an awesome home with a great view to a <br/>
                                    city. I would definitely recommend to rent this <br/>
                                    property</p>
                                <button type="button" className="btn btn-outline-dark"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="#004A60" fill-opacity="0.7"/>
                                </svg>
                                    More reviews</button>
                            </div>
                        </div>
                    </div>
                    <div className="Reviews-top-reviews-gr">
                        <div className="Reviews-top-reviews-left">
                            <div className="Reviews-top-reviews-left-one">
                                <div className="Reviews-top-reviews-left-one-left">
                                    <img src={Kvartire} alt=""/>
                                </div>
                                <div className="Reviews-top-reviews-left-one-right">
                                    <div>
                                        <p>Apartment</p>
                                        <h1 className="Reviews-top-reviews-left-one-right-h1">The Grand Estate</h1>
                                    </div>
                                    <div>
                                        <div className="Reviews-top-reviews-left-one-right-num">
                                            <div>
                                                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z" fill="#004A60"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4>5/5</h4>
                                            </div>
                                        </div>
                                        <div className="Reviews-top-reviews-left-one-right-btn">
                                            <div>
                                                <button className="btns"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="#004A60" fill-opacity="0.7"/>
                                                </svg>
                                                    Read reviews</button>                                            </div>
                                            <div>
                                                <button type="button" className="btns2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.728 9.68599L14.314 8.27199L5 17.586V19H6.414L15.728 9.68599ZM17.142 8.27199L18.556 6.85799L17.142 5.44399L15.728 6.85799L17.142 8.27199ZM7.242 21H3V16.757L16.435 3.32199C16.6225 3.13452 16.8768 3.02921 17.142 3.02921C17.4072 3.02921 17.6615 3.13452 17.849 3.32199L20.678 6.15099C20.8655 6.33852 20.9708 6.59283 20.9708 6.85799C20.9708 7.12316 20.8655 7.37746 20.678 7.56499L7.242 21Z" fill="#004A60" fill-opacity="0.7"/>
                                                </svg>
                                                    Write review</button>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Reviews-top-reviews-right">
                            <div className="Reviews-top-reviews-right-one">
                                <p>Apartment</p>
                                <h1 className="Reviews-top-reviews-right-one-h1">The Grand Estate</h1>
                                <div className="Reviews-top-reviews-right-one-gl">
                                    <div>
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9999 15.968L16.2469 18.345L15.2979 13.572L18.8709 10.267L14.0379 9.694L11.9999 5.275V15.968ZM11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z" fill="#004A60"/>
                                        </svg>

                                    </div>
                                    <div>
                                        <p>4/5</p>
                                    </div>
                                </div>
                                <p className="Reviews-top-reviews-right-one-p">It’s an awesome home with a great view to a <br/>
                                    city. I would definitely recommend to rent this <br/>
                                    property</p>
                                <button type="button" className="btn btn-outline-dark"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="#004A60" fill-opacity="0.7"/>
                                </svg>
                                    More reviews</button>
                            </div>
                        </div>
                    </div>
                    <div className="Reviews-top-reviews-gr">
                        <div className="Reviews-top-reviews-left">
                            <div className="Reviews-top-reviews-left-one">
                                <div className="Reviews-top-reviews-left-one-left">
                                    <img src={Kvartire} alt=""/>
                                </div>
                                <div className="Reviews-top-reviews-left-one-right">
                                    <div>
                                        <p>Apartment</p>
                                        <h1 className="Reviews-top-reviews-left-one-right-h1">The Grand Estate</h1>
                                    </div>
                                    <div>
                                        <div className="Reviews-top-reviews-left-one-right-num">
                                            <div>
                                                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z" fill="#004A60"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4>5/5</h4>
                                            </div>
                                        </div>
                                        <div className="Reviews-top-reviews-left-one-right-btn">
                                            <div>
                                                <button className="btns"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="#004A60" fill-opacity="0.7"/>
                                                </svg>
                                                    Read reviews</button>                                            </div>
                                            <div>
                                                <button type="button" className="btns2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.728 9.68599L14.314 8.27199L5 17.586V19H6.414L15.728 9.68599ZM17.142 8.27199L18.556 6.85799L17.142 5.44399L15.728 6.85799L17.142 8.27199ZM7.242 21H3V16.757L16.435 3.32199C16.6225 3.13452 16.8768 3.02921 17.142 3.02921C17.4072 3.02921 17.6615 3.13452 17.849 3.32199L20.678 6.15099C20.8655 6.33852 20.9708 6.59283 20.9708 6.85799C20.9708 7.12316 20.8655 7.37746 20.678 7.56499L7.242 21Z" fill="#004A60" fill-opacity="0.7"/>
                                                </svg>
                                                    Write review</button>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Reviews-top-reviews-right">
                            <div className="Reviews-top-reviews-right-one">
                                <p>Apartment</p>
                                <h1 className="Reviews-top-reviews-right-one-h1">The Grand Estate</h1>
                                <div className="Reviews-top-reviews-right-one-gl">
                                    <div>
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9999 15.968L16.2469 18.345L15.2979 13.572L18.8709 10.267L14.0379 9.694L11.9999 5.275V15.968ZM11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z" fill="#004A60"/>
                                        </svg>

                                    </div>
                                    <div>
                                        <p>4/5</p>
                                    </div>
                                </div>
                                <p className="Reviews-top-reviews-right-one-p">It’s an awesome home with a great view to a <br/>
                                    city. I would definitely recommend to rent this <br/>
                                    property</p>
                                <button type="button" className="btn btn-outline-dark"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="#004A60" fill-opacity="0.7"/>
                                </svg>
                                    More reviews</button>
                            </div>
                        </div>
                    </div>
                    <div className="Reviews-top-reviews-gr">
                        <div className="Reviews-top-reviews-left">
                            <div className="Reviews-top-reviews-left-one">
                                <div className="Reviews-top-reviews-left-one-left">
                                    <img src={Kvartire} alt=""/>
                                </div>
                                <div className="Reviews-top-reviews-left-one-right">
                                    <div>
                                        <p>Apartment</p>
                                        <h1 className="Reviews-top-reviews-left-one-right-h1">The Grand Estate</h1>
                                    </div>
                                    <div>
                                        <div className="Reviews-top-reviews-left-one-right-num">
                                            <div>
                                                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z" fill="#004A60"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4>5/5</h4>
                                            </div>
                                        </div>
                                        <div className="Reviews-top-reviews-left-one-right-btn">
                                            <div>
                                                <button className="btns"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="#004A60" fill-opacity="0.7"/>
                                                </svg>
                                                    Read reviews</button>                                            </div>
                                            <div>
                                                <button type="button" className="btns2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.728 9.68599L14.314 8.27199L5 17.586V19H6.414L15.728 9.68599ZM17.142 8.27199L18.556 6.85799L17.142 5.44399L15.728 6.85799L17.142 8.27199ZM7.242 21H3V16.757L16.435 3.32199C16.6225 3.13452 16.8768 3.02921 17.142 3.02921C17.4072 3.02921 17.6615 3.13452 17.849 3.32199L20.678 6.15099C20.8655 6.33852 20.9708 6.59283 20.9708 6.85799C20.9708 7.12316 20.8655 7.37746 20.678 7.56499L7.242 21Z" fill="#004A60" fill-opacity="0.7"/>
                                                </svg>
                                                    Write review</button>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Reviews-top-reviews-right">
                            <div className="Reviews-top-reviews-right-one">
                                <p>Apartment</p>
                                <h1 className="Reviews-top-reviews-right-one-h1">The Grand Estate</h1>
                                <div className="Reviews-top-reviews-right-one-gl">
                                    <div>
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9999 15.968L16.2469 18.345L15.2979 13.572L18.8709 10.267L14.0379 9.694L11.9999 5.275V15.968ZM11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z" fill="#004A60"/>
                                        </svg>

                                    </div>
                                    <div>
                                        <p>4/5</p>
                                    </div>
                                </div>
                                <p className="Reviews-top-reviews-right-one-p">It’s an awesome home with a great view to a <br/>
                                    city. I would definitely recommend to rent this <br/>
                                    property</p>
                                <button type="button" className="btn btn-outline-dark"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="#004A60" fill-opacity="0.7"/>
                                </svg>
                                    More reviews</button>
                            </div>
                        </div>
                    </div>
                    <div className="Reviews-top-reviews-gr">
                        <div className="Reviews-top-reviews-left">
                            <div className="Reviews-top-reviews-left-one">
                                <div className="Reviews-top-reviews-left-one-left">
                                    <img src={Kvartire} alt=""/>
                                </div>
                                <div className="Reviews-top-reviews-left-one-right">
                                    <div>
                                        <p>Apartment</p>
                                        <h1 className="Reviews-top-reviews-left-one-right-h1">The Grand Estate</h1>
                                    </div>
                                    <div>
                                        <div className="Reviews-top-reviews-left-one-right-num">
                                            <div>
                                                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z" fill="#004A60"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4>5/5</h4>
                                            </div>
                                        </div>
                                        <div className="Reviews-top-reviews-left-one-right-btn">
                                            <div>
                                                <button className="btns"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="#004A60" fill-opacity="0.7"/>
                                                </svg>
                                                    Read reviews</button>                                            </div>
                                            <div>
                                                <button type="button" className="btns2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.728 9.68599L14.314 8.27199L5 17.586V19H6.414L15.728 9.68599ZM17.142 8.27199L18.556 6.85799L17.142 5.44399L15.728 6.85799L17.142 8.27199ZM7.242 21H3V16.757L16.435 3.32199C16.6225 3.13452 16.8768 3.02921 17.142 3.02921C17.4072 3.02921 17.6615 3.13452 17.849 3.32199L20.678 6.15099C20.8655 6.33852 20.9708 6.59283 20.9708 6.85799C20.9708 7.12316 20.8655 7.37746 20.678 7.56499L7.242 21Z" fill="#004A60" fill-opacity="0.7"/>
                                                </svg>
                                                    Write review</button>                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Reviews-top-reviews-right">
                            <div className="Reviews-top-reviews-right-one">
                                <p>Apartment</p>
                                <h1 className="Reviews-top-reviews-right-one-h1">The Grand Estate</h1>
                                <div className="Reviews-top-reviews-right-one-gl">
                                    <div>
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9999 15.968L16.2469 18.345L15.2979 13.572L18.8709 10.267L14.0379 9.694L11.9999 5.275V15.968ZM11.9999 18.26L4.94691 22.208L6.52191 14.28L0.586914 8.792L8.61391 7.84L11.9999 0.5L15.3859 7.84L23.4129 8.792L17.4779 14.28L19.0529 22.208L11.9999 18.26Z" fill="#004A60"/>
                                        </svg>

                                    </div>
                                    <div>
                                        <p>4/5</p>
                                    </div>
                                </div>
                                <p className="Reviews-top-reviews-right-one-p">It’s an awesome home with a great view to a <br/>
                                    city. I would definitely recommend to rent this <br/>
                                    property</p>
                                <button type="button" className="btn btn-outline-dark"><svg className="hover:text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.455 19L2 22.5V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H6.455ZM5.763 17H20V5H4V18.385L5.763 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z" fill="#004A60" fill-opacity="0.7"/>
                                </svg>
                                    More reviews</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviews;