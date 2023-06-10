import React from 'react'
import './Profile.css'
import {FaUserCircle} from 'react-icons/fa'

function Profile() {
  return (
    <div className='profile--container'>
        <h2>Edit Profile</h2>
        <form className='profile--form'>
          <FaUserCircle size={150}/>  
          <div className='profile--input'>
            <label>Username</label>
            <input type='text'/>
          </div>
          <div className='profile--input'>
            <label>Firstname</label>
            <input type='text'/>
          </div>
          <div className='profile--input'>
            <label>Lastname</label>
            <input type='text'/>
          </div>
          <div className='profile--input'>
            <label>Contact</label>
            <input type='phone'/>
          </div>
          <div className='profile--input'>
            <label>Location</label>
            <input type='text'/>
          </div>
          <button type='submit' className='profile--btn'>Save</button>
        </form>
      </div>
  )
}

export default Profile