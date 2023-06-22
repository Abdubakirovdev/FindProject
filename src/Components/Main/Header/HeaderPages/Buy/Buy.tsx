import React, {useState} from 'react';
import "./style.scss"
import {CiSearch} from 'react-icons/ci'
import {RiMedalFill} from 'react-icons/ri'
import {AiFillCheckCircle} from 'react-icons/ai'
import {BiShapeSquare} from 'react-icons/bi'
import {MdOutlineBedroomParent} from 'react-icons/md'
import {BiBath} from 'react-icons/bi'
import home from '../../../../../Imgs/KvartireRewiev.png'

const Buy = () => {

    const [bg, setBg] = useState(false)
    const [bg2, setBg2] = useState(false)

    return (
        <div id={'rent'}>
            <div className='container'>
                <div className="rent">
                    <div className="rent--inputs">
                        <input type="text" placeholder={'Enter an address or city '}/>
                        <button className='rent--inputs__btn'><CiSearch className={'searchIcon'}/> Search</button>
                        <div className='rent--inputs__btnBlock'>
                            <button onClick={() => setBg(!bg)} style={{
                                background: bg ? "rgba(0, 0, 255, 0.7)" : '',
                                color: bg ? "white" : ''
                            }}>SUPERAGENTS <RiMedalFill/></button>
                            <button onClick={() => setBg2(!bg2)} style={{
                                background: bg2 ? "rgba(0, 0, 255, 0.7)" : '',
                                color: bg2 ? "white" : ''
                            }} className='rent--inputs__btnBlock--lastBtn'>VERIFIED <AiFillCheckCircle/></button>
                        </div>

                        <div className={'rent--inputs__select'}>
                        <div className='rent--inputs__select--bb'>
                            <select name="" id="" className={'rent--inputs__select--option'}>
                                <option selected={true} value="">Property type</option>
                                <option value="">Apartment</option>
                                <option value="">Villa</option>
                                <option value="">Townhouse</option>
                                <option value="">Penthouse</option>
                                <option value="">Whole Building</option>
                            </select>

                            <select name="" id="" className={'rent--inputs__select--optionRooms'}>
                                <option selected={true} value="">Rooms</option>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                                <option value="">5+</option>
                            </select>

                            <select name="" id="" className={'rent--inputs__select--optionPrice'}>
                                <option selected={true} value="">Price</option>
                                <option value="">| min</option>
                                <option value="">| max</option>
                            </select>
                        </div>

                            <p>Sort by:</p>
                            <select name="" id="" className={'rent--inputs__select--optionLast'}>
                                <option selected={true} value="">Featured</option>
                                <option value="">Newest</option>
                                <option value="">Price (low)</option>
                                <option value="">Price (high)</option>
                                <option value="">Beds (least)</option>
                                <option value="">Beds (most)</option>
                            </select>

                        </div>

                    </div>

                    <div className="rent--houses">
                      <div>
                          <div className='rent--houses__home'>
                              <img className='rent--houses__home--img' src={home} alt=""/>
                              <div className='rent--houses__home--div'>
                                  <h1>Apartment</h1>
                                  <p>The Grand Estate</p>

                                  <div className='rent--houses__home--div__block'>
                                      <p><BiBath/> 1 Bathroom</p>
                                      <p><BiShapeSquare/> Square: 120 m2</p>
                                      <p><MdOutlineBedroomParent/> 1 Bedroom</p>
                                  </div>

                              </div>

                              <div className={'rent--houses__home--lastBlock'}>
                                  <h4>Bishkek</h4>
                                  <p>$ 100 000</p>
                              </div>
                          </div>
                          <div className='rent--houses__home'>
                              <img className='rent--houses__home--img' src={home} alt=""/>
                              <div className='rent--houses__home--div'>
                                  <h1>Apartment</h1>
                                  <p>The Grand Estate</p>

                                  <div className='rent--houses__home--div__block'>
                                      <p><BiBath/> 1 Bathroom</p>
                                      <p><BiShapeSquare/> Square: 120 m2</p>
                                      <p><MdOutlineBedroomParent/> 1 Bedroom</p>
                                  </div>

                              </div>

                              <div className={'rent--houses__home--lastBlock'}>
                                  <h4>Bishkek</h4>
                                  <p>$ 100 000</p>
                              </div>
                          </div>
                          <div className='rent--houses__home'>
                              <img className='rent--houses__home--img' src={home} alt=""/>
                              <div className='rent--houses__home--div'>
                                  <h1>Apartment</h1>
                                  <p>The Grand Estate</p>

                                  <div className='rent--houses__home--div__block'>
                                      <p><BiBath/> 1 Bathroom</p>
                                      <p><BiShapeSquare/> Square: 120 m2</p>
                                      <p><MdOutlineBedroomParent/> 1 Bedroom</p>
                                  </div>

                              </div>

                              <div className={'rent--houses__home--lastBlock'}>
                                  <h4>Bishkek</h4>
                                  <p>$ 100 000</p>
                              </div>
                          </div>
                          <div className='rent--houses__home'>
                              <img className='rent--houses__home--img' src={home} alt=""/>
                              <div className='rent--houses__home--div'>
                                  <h1>Apartment</h1>
                                  <p>The Grand Estate</p>

                                  <div className='rent--houses__home--div__block'>
                                      <p><BiBath/> 1 Bathroom</p>
                                      <p><BiShapeSquare/> Square: 120 m2</p>
                                      <p><MdOutlineBedroomParent/> 1 Bedroom</p>
                                  </div>

                              </div>

                              <div className={'rent--houses__home--lastBlock'}>
                                  <h4>Bishkek</h4>
                                  <p>$ 100 000</p>
                              </div>
                          </div>
                          <div className='rent--houses__home'>
                              <img className='rent--houses__home--img' src={home} alt=""/>
                              <div className='rent--houses__home--div'>
                                  <h1>Apartment</h1>
                                  <p>The Grand Estate</p>

                                  <div className='rent--houses__home--div__block'>
                                      <p><BiBath/> 1 Bathroom</p>
                                      <p><BiShapeSquare/> Square: 120 m2</p>
                                      <p><MdOutlineBedroomParent/> 1 Bedroom</p>
                                  </div>

                              </div>

                              <div className={'rent--houses__home--lastBlock'}>
                                  <h4>Bishkek</h4>
                                  <p>$ 100 000</p>
                              </div>
                          </div>
                          <div className='rent--houses__home'>
                              <img className='rent--houses__home--img' src={home} alt=""/>
                              <div className='rent--houses__home--div'>
                                  <h1>Apartment</h1>
                                  <p>The Grand Estate</p>

                                  <div className='rent--houses__home--div__block'>
                                      <p><BiBath/> 1 Bathroom</p>
                                      <p><BiShapeSquare/> Square: 120 m2</p>
                                      <p><MdOutlineBedroomParent/> 1 Bedroom</p>
                                  </div>

                              </div>

                              <div className={'rent--houses__home--lastBlock'}>
                                  <h4>Bishkek</h4>
                                  <p>$ 100 000</p>
                              </div>
                          </div>
                          <div className='rent--houses__home'>
                              <img className='rent--houses__home--img' src={home} alt=""/>
                              <div className='rent--houses__home--div'>
                                  <h1>Apartment</h1>
                                  <p>The Grand Estate</p>

                                  <div className='rent--houses__home--div__block'>
                                      <p><BiBath/> 1 Bathroom</p>
                                      <p><BiShapeSquare/> Square: 120 m2</p>
                                      <p><MdOutlineBedroomParent/> 1 Bedroom</p>
                                  </div>

                              </div>

                              <div className={'rent--houses__home--lastBlock'}>
                                  <h4>Bishkek</h4>
                                  <p>$ 100 000</p>
                              </div>
                          </div>
                          <div className='rent--houses__home'>
                              <img className='rent--houses__home--img' src={home} alt=""/>
                              <div className='rent--houses__home--div'>
                                  <h1>Apartment</h1>
                                  <p>The Grand Estate</p>

                                  <div className='rent--houses__home--div__block'>
                                      <p><BiBath/> 1 Bathroom</p>
                                      <p><BiShapeSquare/> Square: 120 m2</p>
                                      <p><MdOutlineBedroomParent/> 1 Bedroom</p>
                                  </div>

                              </div>

                              <div className={'rent--houses__home--lastBlock'}>
                                  <h4>Bishkek</h4>
                                  <p>$ 100 000</p>
                              </div>
                          </div>

                      </div>

                        <div className='rent--houses__popular'>
                            <h1>Popular Searches</h1>
                            <p>Properties for sale</p>
                            <p>Apartments for sale</p>
                            <p>Villas for sale</p>
                            <p>Townhouses for sale</p>
                            <p>Duplexes for sale</p>
                            <p>Land for sale</p>
                            <p>Hotel Apartments for sale</p>
                        </div>
                    </div>

                    <div className="rent--pagination">
                        <button className='rent--pagination__btn'>1</button>
                        <button className='rent--pagination__btn'>2</button>
                        <button className='rent--pagination__btn'>3</button>
                        <button className='rent--pagination__btn'>4</button>
                        <button className='rent--pagination__btn'>5</button>
                        <button className='rent--pagination__btn'>6</button>
                        <button className='rent--pagination__btn'>7</button>
                        <button className='rent--pagination__btn'>8</button>
                        <button className='rent--pagination__btn'>9</button>
                        <button className='rent--pagination__btn'>10</button>
                        <button className='rent--pagination__lastBtn'>Next</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Buy;