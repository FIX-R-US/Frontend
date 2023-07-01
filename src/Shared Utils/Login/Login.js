import React, { useRef, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
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
                        <p>Kindly log in to get started</p>
                    </div>
                    <div className='fields--container'>
                        <div className='fields'>
                            <label htmlFor='username'>Username</label>
                            <input type='text'
                             placeholder='Enter your username here'
                             ref={UsernameRef}
                             id='username'
                             required
                             />
                        </div>
                        <div className='fields'>
                            <label htmlFor='password'>Password</label>
                            <input type={showPassword ? 'text' : 'password'}
                             placeholder='Enter your password here'
                             ref={passwordRef}
                             id='password'
                             required
                             />
                             {
                                showPassword ? <HiEyeOff className='show1' onClick={show}/> : <HiEye className='show1' onClick={show}/>
                             }
                        </div>
                    </div>
                    <div className='btn--container'>
                        <button className='login--btn'>Log In</button>
                        <div className='links'>
                            <a href='/forgotPassword' className='login--link'>Forgotten Password?</a>
                            <p className='p-tag'>Don't have an account?</p>
                            <a href='/createAccount' className='login--link'>Create Account</a>
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