import React, { useState } from 'react'
import './ResetPassword2.css'
import Header from '../../Components/Home page/Header'
import {HiEye, HiEyeOff} from 'react-icons/hi'
import reset from './reset.png'
import { useNavigate } from 'react-router-dom'

function ResetPassword2() {
  const[showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const handleShow = () => setShowPassword(prevShowPassword=>!prevShowPassword)

  return (
    <div className='reset--container'>
      <div className='left--reset'>
        <Header/>
        <div className='reset--fields'>
          <div className='reset--responsive'>
            <img src={reset} alt=''/>
          </div>
          <form className='reset'>
            <div className='reset--textfield'>
              <h2>Change Password</h2>
              <p>Please change password to complete login process</p>
            </div>
            <div className='reset--inputfield'>
              <div className='reset--field'>
                <label>New Password</label>
                <input type={showPassword ? 'text' : 'password'} placeholder='Enter your new password'/>
                {
                  showPassword ? <HiEyeOff className='show--eye' onClick={handleShow}/> : <HiEye className='show--eye' onClick={handleShow}/>
                }
              </div>
              <div className='reset--field'>
                <label>Confirm Password</label>
                <input type={showPassword ? 'text' : 'password'} placeholder='Confirm new password'/>
                {
                  showPassword ? <HiEyeOff className='show--eye' onClick={handleShow}/> : <HiEye className='show--eye' onClick={handleShow}/>
                }
              </div>
            </div>
            <button className='reset--btn' onClick={()=>navigate('/login')}>Change Password</button>   
          </form>
        </div>
      </div>
      <div className='right--reset'>
        <div className='reset--img'>
          <img src={reset} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword2