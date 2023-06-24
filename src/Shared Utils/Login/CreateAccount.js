import React, { useRef, useState } from 'react'
import './CreateAccount.css'
import {HiEye, HiEyeOff} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Home page/Header'


function CreateAccount() {
    const navigate = useNavigate();
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
        navigate(role)
    }

  return (
    <div className='account--container'>
      <div className='account--left'>
          <Header/>
          <div className='left--container'>
            <form className='account--form' onSubmit={handleProceed}>
              <h2>Create an account</h2>
              <div className='create--container'>
                <div className='create--field'>
                  <label>Username</label>
                  <input type='text' required ref={usernameRef}/>
                </div>
                <div className='create--field'>
                  <label>Email</label>
                  <input type='email' required ref={emailRef}/>
                </div>
                <div className='create--field'>
                  <label>Password</label>
                  <input type={showPassword ? 'text' : 'password'} 
                  required 
                  ref={passwordRef}/>
                  {
                    showPassword ? <HiEyeOff className='create--eye' onClick={()=>setShowPassword(prevShow => !prevShow)}/> : <HiEye className='create--eye' onClick={()=>setShowPassword(prevShow => !prevShow)}/>
                  }
                </div>
                <div className='create--field'>
                  <label>Confirm Password</label>
                  <input type={showPassword ? 'text' : 'password'} 
                  required
                  ref={confirmPasswordRef}/>
                  {
                    showPassword ? <HiEyeOff className='create--eye' onClick={()=>setShowPassword(prevShow => !prevShow)}/> : <HiEye className='create--eye' onClick={()=>setShowPassword(prevShow => !prevShow)}/>
                  }
                </div>
                <div className='create--field'>
                  <label>Select Role</label>
                  <select required ref={roleRef}>
                    <option value='artisan'>Artisan</option>
                    <option value='user'>User</option>
                  </select>
                </div>
              </div>
              <div className='create--btn'>
                <button>Continue</button>
              </div>
            </form>
          </div>
          <div className='account--right'>
            <div className='account--pic'>
              <img alt=''/>
            </div>
          </div>

      </div>
    </div>
  )
}

export default CreateAccount