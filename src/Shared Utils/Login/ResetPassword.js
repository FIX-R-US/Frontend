import React from 'react'
import './ResetPassword.css'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

function ResetPassword() {
    const navigate = useNavigate();
    const emailRef = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = emailRef.current.value
        console.log(email)
        navigate('/resetPassword')
    }

  return (
    <div className='reset--container'>
        <form className='reset' onSubmit={handleSubmit}>
            <h2>Enter your Email</h2>
            <input type='email' placeholder='Email' ref={emailRef}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ResetPassword