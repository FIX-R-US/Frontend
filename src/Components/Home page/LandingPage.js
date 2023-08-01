import React from 'react'
import './LandingPage.css'
import landing from './landing.png'
import Header from './Header'
import {useNavigate} from 'react-router-dom'

function LandingPage() {
    
    const navigate = useNavigate()

  return (
    <div className='landing--container'>
        <div className='landing--leftside'>
            <Header/>
            <div className='image'>
             <img src={landing} alt=''/>
            </div>
            <div className='text--content'>
                <h3>Discover Talented Artisans Near You</h3>
                <p>Find unique handcrafted products and support local artisans</p>
            </div>
        </div>
        <div className='landing--rightside'>
            <div className='right--content'>
                <div className='right--text'>
                    <h3>Welcome to FIX-R-US</h3>
                    <p>Let's get started to your account and start the experience</p>
                 </div>
                 <div className='aboutUs'>
                    <button className='landingright--btn' onClick={()=>navigate('createAccount')}>Get Started</button>
                    <p className="p-tag">
                        Already have an account? {''}
                        <a href="/login" className="login--link">
                            Login
                         </a>
                    </p>
                    {/* <a href='./About'>About us</a> */}
                 </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage