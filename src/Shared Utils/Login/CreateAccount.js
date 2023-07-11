import React, { useRef, useState } from 'react'
import './CreateAccount.css'
import {HiEye, HiEyeOff} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import Header from '../../Components/Home page/Header'
import account from './createaccount.png'
import Notifications from './Notifications'

function CreateAccount() {
    const navigate = useNavigate();
    const[showPassword, setShowPassword] = useState(false)
    const[showMessage, setShowMessage] = useState(false)
    const[message, setMessage] = useState('')
    const[bg, setBg] = useState('')

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
        if(password !== confirmPassword){
          setShowMessage(prevShow=>!prevShow)
          setMessage('Passwords do not match')
          setBg('danger')
        }else{
          navigate(role)
        }
    }

  return (
    <div className='container--account'>
       {showMessage && <Notifications message={message} show={()=> setShowMessage(prevShow=>!prevShow)} bg={bg} />}
      <div className='account--container'>
        <div className='account--left'>
            <Header/>
            <div className='left--container'>
              <div className='account--responsive'>
                <img src={account} alt=''/>
              </div>
              <form className='account--form' onSubmit={handleProceed}>
                <h2>Create an account</h2>
                <div className='create--container'>
                  <div className='create--field'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' required ref={usernameRef} id='username'/>
                  </div>
                  <div className='create--field'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' required ref={emailRef} id='email'/>
                  </div>
                  <div className='create--field'>
                    <label htmlFor='password'>Password</label>
                    <input type={showPassword ? 'text' : 'password'} 
                    required
                    id='password' 
                    ref={passwordRef}/>
                    {
                      showPassword ? <HiEyeOff className='create--eye' onClick={()=>setShowPassword(prevShow => !prevShow)}/> : <HiEye className='create--eye' onClick={()=>setShowPassword(prevShow => !prevShow)}/>
                    }
                  </div>
                  <div className='create--field'>
                    <label htmlFor='confPassword'>Confirm Password</label>
                    <input type={showPassword ? 'text' : 'password'} 
                    required
                    id='confPassword'
                    ref={confirmPasswordRef}/>
                    {
                      showPassword ? <HiEyeOff className='create--eye' onClick={()=>setShowPassword(prevShow => !prevShow)}/> : <HiEye className='create--eye' onClick={()=>setShowPassword(prevShow => !prevShow)}/>
                    }
                  </div>
                  <div className='create--field'>
                    <label htmlFor='role'>Select Role</label>
                    <select required ref={roleRef} id='role'>
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
        </div>
        <div className='account--right'>
            <div className='account--pic'>
              <img src={account} alt=''/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount