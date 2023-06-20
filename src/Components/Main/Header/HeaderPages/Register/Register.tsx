import React, {FormEvent, useState} from 'react';
import './Register.scss'
import home from '../../../../../Imgs/home.svg'
import {FcGoogle} from "react-icons/fc";
import {NavLink, useNavigate} from "react-router-dom";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {useAppDispatch} from "../../../../../Hooks/UseAppDispatch";
import {useAppSelector} from "../../../../../Hooks/UseAppSelector";
import {addLogin} from "../../../../../store/Reducer/Login";

const Register = () => {

    const [login, setLogin] = useState({
        id: 0,
        email: '',
        password: "",
    })

    const {log} = useAppSelector(s => s.LoginSlice)
    const dispatch = useAppDispatch()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin({
            ...login, [e.target.name]: e.target.value
        })
    }

    console.log(login)

    const [red, setRed] = useState(false)
    const [lock, setLock] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const newLogin = {
            id: Math.round(Math.random() * 1000),
            email: login.email,
            password: login.password
        }

        dispatch(addLogin(newLogin))
        navigate("/")
        login.email = ""
        login.password = ""
    }

    // const getRed = (e: any) =>{
    //         if (value !== '' && value2 !== ''){
    //             setRed(false)
    //             navigate('/profile')
    //             localStorage.setItem("value", JSON.stringify(value))
    //             localStorage.setItem("value2", JSON.stringify(value2))
    //         }
    //         else if (value === '' && value2 === '' ){
    //             setRed(true)
    //         }
    // }


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
                            <h1>WELCOME TO FIND.KG</h1>
                        </div>
                        <div className='register--nav'>
                            <input onChange={handleChange}  style={{
                                border: red ? 'red 1px solid': 'blue 1px solid'
                            }} type="email" placeholder="Email" name="email" required/>
                            <input onChange={handleChange} style={{
                                border: red ? 'red 1px solid': 'blue 1px solid'
                            }} type={ lock? 'text': 'password' } name="password" placeholder="Password" required/>
                            <AiFillEye className='register--nav__open' onClick={getLock} style={{
                                display: lock? 'none' : 'block'
                            }} />
                            <AiFillEyeInvisible className='register--nav__lock' onClick={getLock} style={{
                                display: lock? 'block' : 'none'
                            }}/>
                            <p>We’ll call or text you to confirm your number. Standard message and data rates apply.</p>
                            <NavLink to={'/'}>Forgot your password?</NavLink>
                            <NavLink to={'/'}>Don’t have an account? Register</NavLink>
                            <button onClick={handleSubmit} className='register--nav__first'>Continue</button>
                            <button className='register--nav__second'><FcGoogle className='register--nav__second--icon'/>Continue with Google</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Register;