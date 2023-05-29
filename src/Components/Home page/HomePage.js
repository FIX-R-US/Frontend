import React from 'react'
import './HomePage.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Header/>
      <div className='bg--image'>
        <div className='content'>
          <h1 className='mt-5'>WELCOME TO FIX-R-US</h1>
          <h3>Get your tasks done within a short time!</h3>
          <p>Get Professionals to complete tasks for you</p>
          <p>Join our to community of refined artisans to render your expertise</p>
          <button className='button' onClick={()=>navigate('/login')}>Get Started</button>
        </div>
      </div>
    </>
  )
}

export default HomePage