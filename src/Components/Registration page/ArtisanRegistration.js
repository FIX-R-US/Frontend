import React, { useRef, useState } from 'react'
import './Registration.css'
import { useNavigate } from 'react-router-dom';

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
        navigate('/login/artisan')
    }

  return (
    <div className='form--container'>
         <form className='form--artisan' onSubmit={handleSubmit}>
            <h2>Setup account</h2>
            <div className='name--input'>
                <div className='field--input'>
                    <label htmlFor='Firstname'>Firstname</label>
                    <input 
                    type='text'
                    required
                    ref={firstNameRef}
                    />
                </div>
                <div className='field--input'>
                    <label htmlFor='Lastname'>Lastname</label>
                    <input 
                    type='text'
                    required
                    ref={lastNameRef}
                    />
                </div>
            </div>
            <div className='field--input'>
                <label htmlFor='Contact'>Contact</label>
                <input 
                type='phone'
                required
                ref={contactRef}
            />
            </div>
            <div className='field--input'>
                <label htmlFor='Location'>Location</label>
                <input 
                type='text'
                required
                ref={locationRef}
                />
            </div>
            <div className='field--input'>
                <label htmlFor='Occupation'>Occupation</label>
                <select ref={occupationRef}>
                    <option value='electrician'>Electrician</option>
                    <option value='plumber'>Plumber</option>
                    <option value='carpenter'>Carpenter</option>
                    <option value='barber'>Barber</option>
                    <option value='hairdresser'>Hairdresser</option>
                    <option value='cobbler'>Cobbler</option>
                </select>
            </div>
            
            <div className='field--input'>
                <label>Certificate</label>
                <div className='input--file'>
                    <input 
                    type='file'
                    ref={certificateRef}
                    onChange={e => setFile(e.target.files)}
                    multiple={true}
                    />
                </div>
            </div>
            <div className='field--input'>
                <label>Projects worked on(picture or video)</label>
                <div className='input--file'>
                    <input 
                    type='file'
                    required
                    onChange={e=>setFile(e.target.files)}
                    multiple={true}
                    />
                </div>
            </div>
            <button type='submit' className='form--btn'>Submit</button>
        </form>
    </div>
  )
}

export default ArtisanRegistration