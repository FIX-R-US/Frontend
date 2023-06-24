import React from 'react'
import {GiAutoRepair} from 'react-icons/gi'
import './HomePage.css'

function Header() {
  return (
    <div className='header'>
      <GiAutoRepair size={30} color='#7200CC'/>
      <h5>FIX-R-US</h5>
    </div>
  )
}

export default Header