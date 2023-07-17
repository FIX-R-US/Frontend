import React, { useState } from 'react'
import './Profile.css'
import Container from 'react-bootstrap/Container'
import ProfileHeader from '../../Shared Utils/Pages/ProfileHeader'

function Profile() {
  const [showUsername, setShowUsername] = useState('Snipes')
  const [showFirstname, setShowFirstname] = useState('Samuel')
  const [showLastname, setShowLastname] = useState('Nyame')
  const [showEmail, setShowEmail] = useState('samuelbaafi309@gmail.com')
  const [showContact, setShowContact] = useState('0559389586')
  const [showLocation, setShowLocation] = useState('Ayeduase, KNUST')
  const [profilePic, setProfilePic] = useState()

  const handleUsernameChange = (e) => {
    setShowUsername(e.target.value)
  }

  const handleFirstnameChange = (e) => {
    setShowFirstname(e.target.value)
  }

  const handleLastnameChange = (e) => {
    setShowLastname(e.target.value)
  } 

  const handleEmailChange = (e) => {
    setShowEmail(e.target.value)
  }

  const handleContactChange = (e) => {
    setShowContact(e.target.value)
  }

  const handleLocationChange = (e) => {
    setShowLocation(e.target.value)
  }

  const handleProfilePic = (e) => {
    setProfilePic(e.target.files)
  }

  const handleSave = (e) => {
    e.preventDefault();
  const profileData = {
    username: showUsername,
    firstname: showFirstname,
    lastname: showLastname,
    email: showEmail,
    contact: showContact,
    location: showLocation,
    profilePic: profilePic
  }

  console.log('Saving profile data:', profileData);
  }

  
  return (
    <div className='profile--container'>
      <Container>
        <ProfileHeader title={'Edit Profile'}/>
        <form onSubmit={handleSave}>
          <div className='profile--content'>
            <div className='profile--fields'>
              <label>Username</label>
              <input type='text' value={showUsername} onChange={handleUsernameChange} required/>
            </div>
            <div className='profile--fields'>
              <label>Firstname</label>
              <input type='text' value={showFirstname} onChange={handleFirstnameChange} required/>
            </div>
            <div className='profile--fields'>
              <label>Lastname</label>
              <input type='text' value={showLastname} onChange={handleLastnameChange} required/>
            </div>
            <div className='profile--fields'>
              <label>Email</label>
              <input type='email' value={showEmail} onChange={handleEmailChange} required/>
            </div>
            <div className='profile--fields'>
              <label>Contact</label>
              <input type='phone' value={showContact} onChange={handleContactChange} required/>
            </div>
            <div className='profile--fields'>
              <label>Location</label>
              <input type='text' value={showLocation} onChange={handleLocationChange} required/>
            </div>
            <div className='profile--fields'>
              <label>Profile Picture</label>
              <input type='file' className='userFile--input' accept='image/*' onChange={handleProfilePic}/>
            </div>
          </div>
          <div className='profile--btn'>
            <button>Save</button>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default Profile