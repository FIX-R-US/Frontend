import React, { useRef, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import {HiEye, HiEyeOff} from 'react-icons/hi'
import welcome from './welcome.png'
import Header from '../../Components/Home page/Header'

function Login() {
    const navigate = useNavigate();
    const UsernameRef = useRef()
    const passwordRef = useRef()
    const [showPassword, setShowPassword] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
       const username = UsernameRef.current.value
        const userpassword = passwordRef.current.value
        console.log(username, userpassword)   
        navigate(`user/home`)
    }

    const show = () => {
        setShowPassword(prevShowPassword => !prevShowPassword)
    }
    
  return (
    <div className='form--wrapper'>
        <div className='login--left'>
            <Header/>
            <div className='login--fields'>
                <form className='login--form' onSubmit={handleSubmit} id='login'>
                    <div className='text--container'>
                        <h4>Welcome to FIX-R-US!</h4>
                        <p>Kindly log in and let's get started</p>
                    </div>
                    <div className='fields--container'>
                        <div className='fields'>
                            <label htmlFor='username'>Username</label>
                            <input type='text'
                             placeholder='Enter your username here'
                             ref={UsernameRef}
                             />
                        </div>
                        <div className='fields'>
                            <label htmlFor='password'>Password</label>
                            <input type={showPassword ? 'text' : 'password'}
                             placeholder='Enter your password here'
                             ref={passwordRef}
                             />
                             {
                                showPassword ? <HiEyeOff className='show' onClick={show}/> : <HiEye className='show' onClick={show}/>
                             }
                        </div>
                    </div>
                    <div className='btn--container'>
                        <button className='login--btn'>Log In</button>
                        <div className='links'>
                            <Link to='/forgotPassword' className='login--link'>Forgotten Password?</Link>
                            <p className='p-tag'>Don't have an account?</p>
                            <Link to='/resetPassword' className='login--link'>Create Account</Link>
                        </div>
                    </div> 
                </form>
            </div>
        </div>
        <div className='login--right'>
            <div className='login--img'>
                <img src={welcome} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Login