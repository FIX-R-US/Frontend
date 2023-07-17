import React, {useState} from 'react'
import ProfileHeader from '../../Shared Utils/Pages/ProfileHeader'
import Container from 'react-bootstrap/Container'
import './EditArtisanProfile.css'

function EditArtisanProfile() {
  const [showUsername, setShowUsername] = useState('Snipes')
  const [showFirstname, setShowFirstname] = useState('Samuel')
  const [showLastname, setShowLastname] = useState('Nyame')
  const [showEmail, setShowEmail] = useState('samuelbaafi309@gmail.com')
  const [showContact, setShowContact] = useState('0559389586')
  const [showLocation, setShowLocation] = useState('Ayeduase, KNUST')
  const [showDescription, setShowDescription] = useState('I am the best hairstylist in Ayeduase')
  const [showProfilePic, setShowProfilePic] = useState()

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

  const handleDescriptionChange = (e) => {
    setShowDescription(e.target.value)
  }

  const handleProfilePicChange = (e) => {
    setShowProfilePic(e.target.files)
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
    description: showDescription,
    profilepic: showProfilePic
  }

  console.log('Saving profile data:', profileData);
  }

  return (
    <div className='artisanProfile--container'>
      <Container>
        <ProfileHeader title={'Edit Profile'}/>
        <form onSubmit={handleSave}>
          <div className='artisanProfile--content'>
            <div className='artisanProfile--fields'>
              <label>Username</label>
              <input type='text' value={showUsername} onChange={handleUsernameChange} required/>
            </div>
            <div className='artisanProfile--fields'>
              <label>Firstname</label>
              <input type='text' value={showFirstname} onChange={handleFirstnameChange} required/>
            </div>
            <div className='artisanProfile--fields'>
              <label>Lastname</label>
              <input type='text' value={showLastname} onChange={handleLastnameChange} required/>
            </div>
            <div className='artisanProfile--fields'>
              <label>Email</label>
              <input type='email' value={showEmail} onChange={handleEmailChange} required/>
            </div>
            <div className='artisanProfile--fields'>
              <label>Contact</label>
              <input type='phone' value={showContact} onChange={handleContactChange} required/>
            </div>
            <div className='artisanProfile--fields'>
              <label>Location</label>
              <input type='text' value={showLocation} onChange={handleLocationChange} required/>
            </div>
            <div className='artisanProfile--fields'>
              <label>Description</label>
              <textarea rows={3} cols={70} value={showDescription} onChange={handleDescriptionChange} required/>
            </div>
            <div className='artisanProfile--fields'>
              <label>Profile Picture</label>
              <input type='file' className='artisanFile--input' accept='image/*' 
              onChange={handleProfilePicChange}/>
            </div>
            <div className='artisanProfile--fields'>
              <label>Upload works</label>
              <input type='file' className='artisanFile--input' multiple={true} accept='image/*'/>
            </div>
          </div>
          <div className='artisanProfile--btn'>
            <button>Save</button>
          </div>
        </form>
      </Container>
    </div>
  )
}

export default EditArtisanProfile