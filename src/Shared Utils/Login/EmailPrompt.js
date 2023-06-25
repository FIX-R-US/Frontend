import React from 'react'
import Header from '../../Components/Home page/Header'
import check from './checkEmail.png'
import './EmailPrompt.css'


function EmailPrompt() {
  return (
    <div className='prompt--container'>
      <div className='left--prompt'>
        <Header/>
        <div className='prompt--field'>
          <div className='reset--prompt'>
            <div className='prompt--textfield'>
              <h2>Check your Email</h2>
              <p>An email has been sent to andrew@gmail.com with a link to reset your password. Please click on the link to continue.
              </p>
            </div>
            <div className='prompt--link'>
                <p>Didn't receive link? <a href='#j'>Resend</a></p>
            </div> 
          </div>
        </div>
      </div>
      <div className='right--prompt'>
        <div className='prompt--img'>
          <img src={check} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default EmailPrompt