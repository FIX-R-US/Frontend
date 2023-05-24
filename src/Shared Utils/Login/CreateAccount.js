import React, { useRef } from 'react'
import './CreateAccount.css'

function CreateAccount() {
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
  return (
    <div className='account--container'>
        <form className='account--form' onSubmit={handleProceed}>
         <h2>Create an account</h2>
            <div className='account--field'>
                <label htmlFor='Username'>Username</label>
                <input 
                type='text'
                placeholder='Username'
                ref={usernameRef}
                required
                />
            </div>
            <div className='account--field'>
                <label htmlFor='Email'>Email</label>
                <input 
                type='email'
                placeholder='Email'
                ref={emailRef}
                required
                />
            </div>
            <div className='account--field'>
                <label htmlFor='Password'>Password</label>
                <input 
                type='password'
                placeholder='Password'
                ref={passwordRef}
                required
                />
            </div>
            <div className='account--field'>
                <label htmlFor='Confirm Password'>Confirm Password</label>
                <input 
                type='password'
                placeholder='Confirm Password'
                ref={confirmPasswordRef}
                required
                />
            </div>
            <div className='account--field'>
                <label htmlFor='Select Role'>Select Role</label>
                <select placeholder='Select role' ref={roleRef} required>
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