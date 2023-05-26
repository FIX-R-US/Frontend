import React, { useRef, useState } from 'react'
import './Login.css'
import {HiUser, HiLockClosed, HiEye, HiEyeOff} from 'react-icons/hi'


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
        <form className='form' onSubmit={handleSubmit}>
                <div className='field'>
                    <HiUser size={20}/>
                    <input 
                        className='input--field' 
                        ref={UsernameRef} 
                        type='text' 
                        placeholder='Username' 
                        required/>
                </div>
                <div className='field'>
                    <HiLockClosed size={20}/>
                    <input 
                        className='input--field'
                        ref={passwordRef} 
                        type={showPassword ? 'text' : 'password' } 
                        placeholder='Password' 
                        required/>
                    {showPassword ? <HiEyeOff onClick={show} className='show--password'/> :
                     <HiEye onClick={show} className='show--password'/>}
                </div>
                <button type='submit' className='form--button'>Login</button>
            <p className='create--account'>Don't have an account?<a href='a'>Create an account</a></p>
        </form>
    </div>
  )
}

export default Login