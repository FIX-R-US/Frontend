import React from 'react'
import slide1 from './slide1.jpg'
import slide2 from './slide2.jpg'
import slide3 from './slide3.jpg'
import './LandingPage.css'
import Carousel from 'react-bootstrap/Carousel'
import {useNavigate} from 'react-router-dom'

function LandingPage() {
    
    const navigate = useNavigate()

  return (
    <div className='landing--container'>
        <div className='landing--leftside'>
           <Carousel>
            <Carousel.Item interval={10000}>
                <img src={slide1} alt='1st Slide' className='slide--img'/>
            <Carousel.Caption>
                <h3>Discover Talented Artisans Near You</h3>
                <p>Find Unique Handcrafted Products and Support Local Artisans </p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img src={slide2} alt='2nd Slide' className='slide--img'/>
            <Carousel.Caption>
                <h3>Discover Talented Artisans Near You</h3>
                <p>Find Unique Handcrafted Products and Support Local Artisans </p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img src={slide3} alt='3rd Slide' className='slide--img'/>
            <Carousel.Caption>
                <h3>Discover Talented Artisans Near You</h3>
                <p>Find Unique Handcrafted Products and Support Local Artisans </p>
            </Carousel.Caption>
            </Carousel.Item>
           </Carousel>
        </div>
        <div className='landing--rightside'>
            <h1>Welcome to FIX-R-US</h1>
            <div>
                <button className='landingright--btn' onClick={()=>navigate('login')}>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default LandingPage