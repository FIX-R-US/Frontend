import React, { useRef, useState } from 'react'
import './Registration.css'
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Home page/Header'
import account from '../../Shared Utils/Login/createaccount.png'

function ArtisanRegistration() {

    const navigate = useNavigate();

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const contactRef = useRef();
    const locationRef = useRef();
    const occupationRef = useRef();
    const certificateRef = useRef();
    

    const [file, setFile] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = firstNameRef.current.value
        const lastName = lastNameRef.current.value
        const contact = contactRef.current.value
        const location = locationRef.current.value
        const occupation = occupationRef.current.value

        console.log(firstName, lastName, contact, location, occupation)
            console.log(file)
        navigate('/login/artisan/home')
    }

  return (
    <div className='artisanForm--container'>
        <div className='artisanAccount--left'>
          <Header/>
          <div className='artisanLeft--container'>
            <div className='artisan--responsive'>
              <img src={account} alt=''/>
            </div>
            <form className='artisanAccount--form' onSubmit={handleSubmit}>
              <h2>Setup account</h2>
              <div className='artisanCreate--container'>
                <div className='artisanCreate--field'>
                  <label htmlFor='firstname'>Firstname</label>
                  <input type='text' required ref={firstNameRef} id='firstname'/>
                </div>
                <div className='artisanCreate--field'>
                  <label htmlFor='lastname'>Lastname</label>
                  <input type='text' required ref={lastNameRef} id='lastname'/>
                </div>
                <div className='artisanCreate--field'>
                  <label htmlFor='contact'>Contact</label>
                  <input type= 'text' 
                  required
                  id='contact' 
                  ref={contactRef}/>
                </div>
                <div className='artisanCreate--field'>
                  <label htmlFor='location'>Location</label>
                  <input type='text' 
                  required
                  id='location'
                  ref={locationRef}/>
                </div>
                <div className='artisanCreate--field'>
                  <label htmlFor='occupation'>Occupation</label>
                  <select ref={occupationRef} required>
                    <option value='electrician'>Electrician</option>
                    <option value='carpenter'>Carpenter</option>
                    <option value='plumber'>Plumber</option>
                    <option value='hairdresser'>Hairdresser</option>
                    <option value='barber'>Barber</option>
                    <option value='cobbler'>Cobbler</option>
                  </select>
                </div>
                <div className='artisanCreate--field'>
                  <label htmlFor='certificate'>Certificate(if any)</label>
                  <input type='file' 
                  id='certificate'
                  ref={certificateRef}
                  onChange={e => setFile(e.target.files)}
                  multiple={true}
                  className='file--input'/>
                </div>
                <div className='artisanCreate--field'>
                  <label htmlFor='projects'>Projects worked on(picture or video)</label>
                  <input type='file' 
                  id='projects'
                  ref={locationRef}
                  onChange={e => setFile(e.target.files)}
                  multiple={true}
                  className='file--input'/>
                </div>
              </div>
              <div className='artisanCreate--btn'>
                <button>Submit</button>
              </div>
            </form>
          </div>
      </div>
      <div className='artisanAccount--right'>
            <div className='artisanAccount--pic'>
              <img src={account} alt=''/>
            </div>
          </div>
    </div>
  )
}

export default ArtisanRegistration