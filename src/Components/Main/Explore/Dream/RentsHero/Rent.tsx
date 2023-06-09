import React from 'react';
import '../RentsHero/Rent.scss'
import home1 from '../../../../../Imgs/home.png'
import pillow from '../../../../../Imgs/hom1.svg'
import sink from '../../../../../Imgs/home2.png'
import sink2 from '../../../../../Imgs/home3.png'
import pillow2 from '../../../../../Imgs/home4.png'

const Rent = () => {
    return (
        <div id='rent'>
            <div className="container">
                <div className="rent">
                    <a href="">Rent a dream apartment</a>
                    <div className="rent--forms">
                        <div className="rent--forms__book">
                            <img src={home1} alt=""/>
                        </div>
                        <div className="rent--forms__table">
                            <div className="rent--forms__table--left">
                                <img src={pillow} alt=""/>
                            </div>
                            <div className="rent--forms__table--mouse">
                                {/*<img src={sink} alt=""/>*/}
                                <img src={sink2} alt=""/>

                            </div>
                        </div>
                        <div className="rent--forms__tableFirst">
                            <div className="rent--forms__tableFirst--right">
                                <img src={sink} alt=""/>
                                {/*<img src={pillow2} alt=""/>*/}
                            </div>
                            <div className="rent--forms__tableFirst--rightFirst">
                                <img src={pillow2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Rent;