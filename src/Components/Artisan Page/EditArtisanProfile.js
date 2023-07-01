import React from 'react'
import ProfileHeader from '../../Shared Utils/Pages/ProfileHeader'
import Container from 'react-bootstrap/Container'
import './EditArtisanProfile.css'

function EditArtisanProfile() {
  return (
    <div className='artisanProfile--container'>
      <Container>
        <ProfileHeader title={'Edit Profile'}/>
        <div className='artisanProfile--content'>
          <div className='artisanProfile--fields'>
            <label>Username</label>
            <input type='text'/>
          </div>
          <div className='artisanProfile--fields'>
            <label>Firstname</label>
            <input type='text'/>
          </div>
          <div className='artisanProfile--fields'>
            <label>Lastname</label>
            <input type='text'/>
          </div>
          <div className='artisanProfile--fields'>
            <label>Email</label>
            <input type='email'/>
          </div>
          <div className='artisanProfile--fields'>
            <label>Contact</label>
            <input type='phone'/>
          </div>
          <div className='artisanProfile--fields'>
            <label>Location</label>
            <input type='text'/>
          </div>
          <div className='artisanProfile--fields'>
            <label>Description</label>
            <textarea rows={3} cols={70}/>
          </div>
        </div>
        <div className='artisanProfile--btn'>
          <button>Save</button>
        </div>
      </Container>
    </div>
  )
}

export default EditArtisanProfile