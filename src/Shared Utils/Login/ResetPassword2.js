import React, { useState } from 'react'
import './ResetPassword.css'
import {HiEye, HiEyeOff} from 'react-icons/hi'

function ResetPassword2() {

  const[showPassword, setShowPassword] = useState(false)

  const handleShow = () => setShowPassword(prevShowPassword=>!prevShowPassword)
  return (
    <div className='reset--container'>
        <form className='reset'>
          <div className='password--visible'>
            <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder='New Password'
            />
            {showPassword ? <HiEyeOff color='white' className='reset--eye' onClick={handleShow}/> : 
            <HiEye color='white' className='reset--eye' onClick={handleShow}/>}
          </div>
          <div className='password--visible'>
            <input 
            type={showPassword ? 'text' : 'password'} 
             placeholder='Confirm Password'
             />
             {showPassword ? <HiEyeOff color='white' className='reset--eye' onClick={handleShow}/> : 
            <HiEye color='white' className='reset--eye' onClick={handleShow}/>}
          </div>
            <button type='submit'>Reset Password</button>
        </form>
    </div>
  )
}

export default ResetPassword2