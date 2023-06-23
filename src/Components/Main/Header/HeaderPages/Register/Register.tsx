import React, {FormEvent, useState} from 'react';
import './Register.scss'
import home from '../../../../../Imgs/home.svg'
import {FcGoogle} from "react-icons/fc";
import {NavLink, useNavigate} from "react-router-dom";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {useAppDispatch} from "../../../../../Hooks/UseAppDispatch";
import {useAppSelector} from "../../../../../Hooks/UseAppSelector";
import {addUser} from "../../../../../store/Reducer/Login";

const Register = () => {

    const {findUser} = useAppSelector(state => state.LoginSlice)
    const dispatch = useAppDispatch()
    const [red, setRed] = useState(false)
    const [lock, setLock] = useState(false)
    const navi = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }
    console.log(findUser)

    const handleSubmit = (e: FormEvent) => {
        dispatch(addUser(user))
        if (findUser == true) {
            navi('/')
        } else {
            navi('/register')
            setRed(true)
            user.email = ''
            user.password = ''
        }
        // findUser ? navi('/') : navi('/register')
    }


    const getLock = () => {
        setLock(!lock)
    }
    return (
        <div id='register'>
            <div className='container'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className='register'>
                        <div className='register--title'>
                            <img src={home} alt="img"/>
                            <h1>WELCOME TO FIND.KG</h1>
                        </div>
                        <div className='register--nav'>
                            <input onChange={handleChange} style={{
                                border: red ? 'red 1px solid' : 'blue 1px solid'
                            }} type="email" placeholder="Email" name="email" value={user.email}/>
                            <input onChange={handleChange} style={{
                                border: red ? 'red 1px solid' : 'blue 1px solid'
                            }} type={lock ? 'text' : 'password'} name="password" value={user.password}
                                   placeholder="Password"/>
                            <AiFillEye className='register--nav__open' onClick={getLock} style={{
                                display: lock ? 'none' : 'block'
                            }}/>
                            <AiFillEyeInvisible className='register--nav__lock' onClick={getLock} style={{
                                display: lock ? 'block' : 'none'
                            }}/>
                            <p>We’ll call or text you to confirm your number. Standard message and data rates apply.</p>
                            <NavLink to={'/'}>Forgot your password?</NavLink>
                            <NavLink to={'/regis'}>Don’t have an account? Register</NavLink>
                            <button onClick={handleSubmit} className='register--nav__first'>Continue</button>
                            <button className='register--nav__second'><FcGoogle
                                className='register--nav__second--icon'/>Continue with Google
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Register;