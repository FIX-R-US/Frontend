import React, { useRef, useState } from 'react'
import './Login.css'
import {HiUser, HiLockClosed, HiEye, HiEyeOff} from 'react-icons/hi'
import { Link } from 'react-router-dom'


function Login() {

    const UsernameRef = useRef()
    const passwordRef = useRef()
    const [showPassword, setShowPassword] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
       const username = UsernameRef.current.value
        const userpassword = passwordRef.current.value
        console.log(username, userpassword)   
    }
    
    const show = () => {
        setShowPassword(prevShowPassword => !prevShowPassword )
    }
    
  return (
    <div className='form--wrapper'>
        <form className='login--form' onSubmit={handleSubmit}>
                <div className='field'>
                    <HiUser size={25} color='black'/>
                    <input 
                        className='input--field' 
                        ref={UsernameRef} 
                        type='text' 
                        placeholder='Username' 
                        required/>
                </div>
                <div className='field'>
                    <HiLockClosed size={25} color='black'/>
                    <input 
                        className='input--field'
                        ref={passwordRef} 
                        type={showPassword ? 'text' : 'password' } 
                        placeholder='Password' 
                        required/>
                    {showPassword ? <HiEyeOff onClick={show} className='show--password' color='black'/> :
                     <HiEye onClick={show} className='show--password' color='black'/>}
                </div>
                <button type='submit' className='form--button'>Login</button>
            <p className='create--account'>Don't have an account?<Link to='/createAccount'>Create an account</Link></p>
                <p className='forgot--password'>Forgot Password?<Link to='/resetPassword'>Reset Password</Link></p>
        </form>
    </div>
  )
}

export default Login