import React, {useState} from 'react';
import './Register.scss'
import home from '../../../../Imgs/home.svg'
import {FcGoogle} from "react-icons/fc";
import {NavLink} from "react-router-dom";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";

const Register = () => {

    const [value, setValue] = useState('')
    const [red, setRed] = useState(false)
    const [lock, setLock] = useState(false)
    const getRed = (e: any) =>{
            if (value !== '' && value.includes('@') ){
                setRed(false)
            }
            else if (value === '' ){
                setRed(true)
            }
    }

    const getLock=()=>{
        setLock(!lock)
    }
    return (
        <div id='register'>
            <div className='container'>
                <form onSubmit={(e)=> e.preventDefault()}>
                    <div className='register'>
                        <div className='register--title'>
                            <img src={home} alt="img"/>
                            <h1>WELCOME TO IZDE.KG</h1>
                        </div>
                        <div className='register--nav'>
                            <input onChange={(e)=> setValue(e.target.value)}  style={{
                                border: red ? 'red 1px solid': 'blue 1px solid'
                            }} type="email" placeholder="Email" required/>
                            <input style={{
                                border: red ? 'red 1px solid': 'blue 1px solid'
                            }} type={ lock? 'text': 'password' } placeholder="Password" required/>
                            <AiFillEye className='register--nav__open' onClick={getLock} style={{
                                display: lock? 'none' : 'block'
                            }} />
                            <AiFillEyeInvisible className='register--nav__lock' onClick={getLock} style={{
                                display: lock? 'block' : 'none'
                            }}/>
                            <p>We’ll call or text you to confirm your number. Standard message and data rates apply.</p>
                            <NavLink to={'/'}>Forgot your password?</NavLink>
                            <NavLink to={'/'}>Don’t have an account? Register</NavLink>
                            <button onClick={(e)=> getRed(e)} className='register--nav__first'>Continue</button>
                            <button className='register--nav__second'><FcGoogle className='register--nav__second--icon'/>Continue with Google</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Register;