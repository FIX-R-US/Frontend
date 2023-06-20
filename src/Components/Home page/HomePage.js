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
        <div className='left--side'>
          <div>
            <h1>Discover Talented Artisans Near You</h1>
            <p>Find Unique Handcrafted Products and Support Local Artisans</p>
          </div>
        </div>
        <div className='right--side'>
          <div>
            <h2>Get Connected </h2>
            <p>Are you looking for skilled artisans to bring your creative vision to life? Look no further! Artisan Finder connects you with talented craftsmen and craftswomen from various disciplines, ensuring that you find the perfect match for your project. Whether you're in need of a master woodworker, a skilled ceramicist, or a talented jewelry maker, our platform is here to help you discover and collaborate with artisans who are passionate about their craft.</p>
          </div>
        </div>
        <button className='button' onClick={()=>navigate('login')}>Get Started</button>
      </div>

        
    </>
  )
}

export default HomePage