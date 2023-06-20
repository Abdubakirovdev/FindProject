import React, {FormEvent, useState} from 'react';
import home from "../../../../../../Imgs/home.svg";
import {FcGoogle} from "react-icons/fc";
import {useAppSelector} from "../../../../../../Hooks/UseAppSelector";
import {useAppDispatch} from "../../../../../../Hooks/UseAppDispatch";
import {addLogin} from "../../../../../../store/Reducer/Login";
import {NavLink, useNavigate} from "react-router-dom";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import '../Reg/Reg.scss'


const Reg = () => {

    const [reg, setReg] = useState({
        id: 0,
        name: '',
        email: '',
        password: ''
    })

    const [lock, setLock] = useState(false)
    const [red, setRed] = useState(false)

    const {log} = useAppSelector(s => s.loginSlice)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReg({
            ...reg, [e.target.name]: e.target.value
        })
    }
    console.log(reg)

    const handleSubmit = (e: FormEvent) => {
        if (reg.name.length < 4 && reg.email.length < 8 && reg.password.length < 6) {
            navigate('/regis')
            setRed(true)
        } else {
            e.preventDefault()
            const newReg = {
                id: Math.round(Math.random() * 1000),
                name: reg.name,
                email: reg.email,
                password: reg.password
            }
            dispatch(addLogin(newReg))
            navigate('/')
            setRed(false)
        }

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
                                border: red ? "1px solid red" : ''
                            }} type="text" placeholder="Name" name="name"/>
                            <input onChange={handleChange} style={{
                                border: red ? "1px solid red" : ''
                            }} type="email" placeholder="Email" name="email"/>
                            <input onChange={handleChange} style={{
                                border: red ? "1px solid red" : ''
                            }} type={lock ? 'password' : 'text'} name="password" placeholder="Password"/>
                            <AiFillEye className='eye' onClick={getLock} style={{
                                display: lock ? 'none' : 'block'
                            }}/>
                            <AiFillEyeInvisible className='eye--lock' onClick={getLock} style={{
                                display: lock ? 'block' : 'none'
                            }}/>
                            <NavLink to={'/register'}>Back to LOGIN</NavLink>
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

export default Reg;