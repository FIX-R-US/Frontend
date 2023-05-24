import React, { useRef, useState } from 'react'
import './Login.css'
import CreateAccount from './CreateAccount'

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
    
    
  return (
    <div className='form--wrapper'>
        <form className='form' onSubmit={handleSubmit}>
                <div className='field'>
                    <input 
                        className='input--field' 
                        ref={UsernameRef} 
                        type='text' 
                        placeholder='Username' 
                        required/>
                </div>
                <div className='field'>
                    <input 
                        className='input--field'
                        ref={passwordRef} 
                        type={showPassword ? 'text' : 'password' } 
                        placeholder='Password' 
                        required/>
                </div>
                <button type='submit' className='form--button'>Login</button>
            <p className='create--account'>Don't have an account?<a>Create an account</a></p>
        </form>
    </div>
  )
}

export default Login