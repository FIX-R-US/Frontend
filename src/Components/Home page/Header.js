import React from 'react'
import {GiAutoRepair} from 'react-icons/gi'
import './HomePage.css'

function Header() {
  return (
    <div className='header'>
      <GiAutoRepair  color='#7200CC' className='header--icon'/>
      <h5>FIX-R-US</h5>
    </div>
  )
}

export default Header