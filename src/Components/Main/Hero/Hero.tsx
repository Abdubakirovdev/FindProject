import React from 'react';
import '../Hero/Hero.scss'
import imgHero from "../../../Imgs/Image.svg"
import img1Hero from "../../../Imgs/Image (1).svg"
import {CiSearch} from "react-icons/ci"

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <img className="hero--img1" src={imgHero} alt=""/>
                    <img className="hero--img2" src={img1Hero} alt=""/>
                    <h1 >Let’s find a perfect <br/> home for you!</h1>

                    <div className="hero--block">
                        <div>  <div className="hero--buttons">
                            <button className="hero--btn1">Buy</button>
                            <button className="hero--btn1">Rent</button>
                        </div>

                            <div className="hero--buttons">
                                <select name="" id="" className="hero--options">
                                    <option value="">Property type</option>
                                    <option value="">Apartment</option>
                                    <option value="">Villa</option>
                                    <option value="">Townhouse</option>
                                    <option value="">Penthouse</option>
                                    <option value="">Whole building</option>
                                </select>

                                <select name="" id="" className="hero--option2">
                                    <option value="">Rooms</option>
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                    <option value="">5+</option>
                                </select>
                                <select name="" id="" className="hero--option3">
                                    <option value="">Price</option>
                                    <option value="">| min</option>
                                    <option value="">| max</option>
                                </select>
                            </div></div>

                        <input className="hero--input1" type="text" placeholder="Enter an address or city "/>
                        <button className="hero--btn2"> <CiSearch/> Search</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;