import React, { useRef, useState } from 'react'
import './Registration.css'

function ArtisanRegistration() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const contactRef = useRef();
    const locationRef = useRef();
    const nationalIdRef = useRef();
    const certificateRef = useRef();
    const occupationRef = useRef();
    

    const [file, setFile] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = firstNameRef.current.value
        const lastName = lastNameRef.current.value
        const contact = contactRef.current.value
        const location = locationRef.current.value
        const nationalId = nationalIdRef.current.value
        const occupation = occupationRef.current.value 

        console.log(firstName, lastName, contact, location, nationalId, occupation)
            console.log(file)
    }

  return (
    <div className='form--container'>
         <form className='form--artisan' onSubmit={handleSubmit}>
            <h2>Setup account</h2>
            <div className='name--input'>
                <div className='field--input'>
                    <label>Firstname</label>
                    <input 
                    type='text'
                    required
                    ref={firstNameRef}
                    />
                </div>
                <div className='field--input'>
                    <label>Lastname</label>
                    <input 
                    type='text'
                    required
                    ref={lastNameRef}
                    />
                </div>
            </div>
            <div className='field--input'>
                <label>Contact</label>
                <input 
                type='phone'
                required
                ref={contactRef}
            />
            </div>
            <div className='field--input'>
                <label>Location</label>
                <input 
                type='text'
                required
                ref={locationRef}
                />
            </div>
            <div className='field--input'>
                <label>Occupation</label>
                <input 
                type='text'
                required
                ref={occupationRef}
                />
            </div>
            
            <div className='field--input'>
                <label>National ID</label>
                <div className='input--file'>
                    <input 
                    type='file'
                    required
                    ref={nationalIdRef}
                    />
                </div>
            </div>
            <div className='field--input'>
                <label>Certificate</label>
                <div className='input--file'>
                    <input 
                    type='file'
                    ref={certificateRef}
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