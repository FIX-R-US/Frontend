import React from 'react'
import './ResetPassword.css'

function ResetPassword2() {
  return (
    <div className='reset--container'>
        <form className='reset'>
            <input type='password' placeholder='New Password'/>
            <input type='password' placeholder='Confirm Password'/>
            <button type='submit'>Reset Password</button>
        </form>
    </div>
  )
}

export default ResetPassword2