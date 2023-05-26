import React from 'react'
import './HomePage.css'
import Header from './Header'

function HomePage() {
  return (
    <>
      <Header/>
      <div className='content mt-5'>
          <h1>WELCOME TO FIX-R-US</h1>
          <h3>Get your tasks done within a short time!</h3>
          <p>Get Professionals to complete tasks for you</p>
          <p>Join our to community of refined artisans to render your expertise</p>
          <button className='button'>Get Started</button>
      </div>
    </>
  )
}

export default HomePage