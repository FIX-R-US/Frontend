import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {BsChatLeftDots} from 'react-icons/bs'
import './ProfileHeader.css'
// import profilepic from './slide1.jpg'


function ProfileHeader() {
  return (
    <div className='profile--header'>
      <div className='left--header'>
        <BsChatLeftDots size={20}/>
        <h4>Edit Profile</h4>
      </div>
      <div className='right--header'>
        <FaUserCircle size={40}/>
        {/* <img src={profilepic} alt=''/> */}
        <p>username</p>
      </div>
    </div>
  )
}

export default ProfileHeader