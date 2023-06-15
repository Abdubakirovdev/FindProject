import React from 'react';
import "./style.scss"
import {BsSearch} from "react-icons/bs";
import Kvartire from '../../../../../Imgs/KvartireRewiev.png'
const Reviews = () => {
    return (
        <div id="Reviews" style={{marginTop:"10%"}}>
            <div className="Reviews-hero">
                <h1>Building Reviews</h1>
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
                                                <button className="btns btn btn-outline-primary">Read reviews</button>
                                            </div>
                                            <div>
                                                <button type="button" className="btns btn btn-outline-danger">Write review</button>
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
                                <button type="button" className="btn btn-outline-dark">More reviews</button>
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
                                                <button className="btns btn btn-outline-primary">Read reviews</button>
                                            </div>
                                            <div>
                                                <button type="button" className="btns btn btn-outline-danger">Write review</button>
                                            </div>
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
                                <button type="button" className="btn btn-outline-dark">More reviews</button>
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
                                                <button className="btns btn btn-outline-primary">Read reviews</button>
                                            </div>
                                            <div>
                                                <button type="button" className="btns btn btn-outline-danger">Write review</button>
                                            </div>
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
                                <button type="button" className="btn btn-outline-dark">More reviews</button>
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
                                                <button className="btns btn btn-outline-primary">Read reviews</button>
                                            </div>
                                            <div>
                                                <button type="button" className="btns btn btn-outline-danger">Write review</button>
                                            </div>
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
                                <button type="button" className="btn btn-outline-dark">More reviews</button>
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
                                                <button className="btns btn btn-outline-primary">Read reviews</button>
                                            </div>
                                            <div>
                                                <button type="button" className="btns btn btn-outline-danger">Write review</button>
                                            </div>
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
                                <button type="button" className="btn btn-outline-dark">More reviews</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviews;