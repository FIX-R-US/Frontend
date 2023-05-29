import React, { useRef, useState } from 'react'
import './CreateAccount.css'
import {HiEye, HiEyeOff} from 'react-icons/hi'
// import { useNavigate } from 'react-router-dom'


function CreateAccount() {
    // const navigate = useNavigate();
    const[showPassword, setShowPassword] = useState(false)

    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const roleRef = useRef()

    const handleProceed = (e) =>{
        e.preventDefault();
        const username = usernameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = confirmPasswordRef.current.value
        const role = roleRef.current.value
        console.log(username, email, password, confirmPassword, role)
    }
    // const handleSubmit = () => {
    //     roleRef === 'artisan' ? navigate('/artisanRegistration'):
    //     navigate('/userRegistration')
    // }
  return (
    <div className='account--container'>
        <form className='account--form' onSubmit={handleProceed}>
         <h2 className='h2'>Create an account</h2>
            <div className='account--field'>
                <label htmlFor='Username'>Username</label>
                <input 
                type='text'
                ref={usernameRef}
                required
                />
            </div>
            <div className='account--field'>
                <label htmlFor='Email'>Email</label>
                <input 
                type='email'
                ref={emailRef}
                required
                />
            </div>
            <div className='account--field'>
                <label htmlFor='Password'>Password</label>
                    <input 
                    type={showPassword ? 'text' : 'password'}
                    ref={passwordRef}
                    required
                    />
                    {showPassword ? <HiEyeOff className='eye' onClick={()=>setShowPassword(prevShowPassword=> !prevShowPassword)}/> :
                     <HiEye className='eye' onClick={()=>setShowPassword(prevShowPassword=> !prevShowPassword)} />}
            </div>
            <div className='account--field'>
                <label htmlFor='Confirm Password'>Confirm Password</label>
                    <input 
                    type={showPassword ? 'text' : 'password'}
                    ref={confirmPasswordRef}
                    required
                    />
                    {showPassword ? <HiEyeOff className='eye' onClick={()=>setShowPassword(prevShowPassword=> !prevShowPassword)}/> :
                     <HiEye className='eye' onClick={()=>setShowPassword(prevShowPassword=> !prevShowPassword)}/>}
            </div>
            <div className='account--field'>
                <label htmlFor='Select Role'>Select Role</label>
                <select ref={roleRef} required>
                    <option value='artisan'>Artisan</option>
                    <option value='user'>User</option>
                </select>
            </div>
            <button type='submit' className='account--btn'>Proceed</button>
        </form>
    </div>
  )
}

export default CreateAccount