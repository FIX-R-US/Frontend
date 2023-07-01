import React from 'react'
import Header from '../../Components/Home page/Header'
import notFound from './pagenotfound.png'
import './PageNotFound.css'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate()
  return (
    <div className='notFound--container'>
    <div className='notFound--left'>
      <Header/>
      <div className='notFound--field'>
        <div className='notFound--prompt'>
          <div className='notFound--textfield'>
            <h1>404</h1>
            <p>OOps! Page not found</p>
          </div>
          <div className='notFound--btn'>
            <button onClick={() => navigate('login/user/home')}>Return Home</button>
          </div> 
        </div>
      </div>
    </div>
    <div className='notFound--right'>
      <div className='notFound--img'>
        <img src={notFound} alt=''/>
      </div>
    </div>
  </div>
  )
}

export default PageNotFound