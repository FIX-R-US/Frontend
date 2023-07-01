import React, { useRef } from 'react'
import './Registration.css'
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Home page/Header'
import account from '../../Shared Utils/Login/createaccount.png'

function UserRegistration() {

    const navigate = useNavigate();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const contactRef = useRef();
    const locationRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = firstNameRef.current.value
        const lastName = lastNameRef.current.value
        const contact = contactRef.current.value
        const location = locationRef.current.value

        console.log(firstName, lastName, contact, location)
        navigate('/login/user/home')
    }
  return (
    <div className='form--container'>
       <div className='userAccount--left'>
          <Header/>
          <div className='userLeft--container'>
            <form className='userAccount--form' onSubmit={handleSubmit}>
              <h2>Setup account</h2>
              <div className='userCreate--container'>
                <div className='userCreate--field'>
                  <label htmlFor='firstname'>Firstname</label>
                  <input type='text' required ref={firstNameRef} id='firstname'/>
                </div>
                <div className='userCreate--field'>
                  <label htmlFor='lastname'>Lastname</label>
                  <input type='text' required ref={lastNameRef} id='lastname'/>
                </div>
                <div className='userCreate--field'>
                  <label htmlFor='contact'>Contact</label>
                  <input type= 'text' 
                  required
                  id='contact' 
                  ref={contactRef}/>
                </div>
                <div className='userCreate--field'>
                  <label htmlFor='location'>Location</label>
                  <input type='text' 
                  required
                  id='location'
                  ref={locationRef}/>
                </div>
              </div>
              <div className='userCreate--btn'>
                <button>Submit</button>
              </div>
            </form>
          </div>
      </div>
      <div className='userAccount--right'>
            <div className='userAccount--pic'>
              <img src={account} alt=''/>
            </div>
          </div>
    </div>
  )
}

export default UserRegistration