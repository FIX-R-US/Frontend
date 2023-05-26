import React, { useRef, useState } from 'react'
import './Registration.css'

function ArtisanRegistration() {
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const contactRef = useRef();
    const locationRef = useRef();
    const nationalityRef = useRef();
    const nationalIdRef = useRef();
    const certificateRef = useRef();
    

    const [file, setFile] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = firstNameRef.current.value
        const lastName = lastNameRef.current.value
        const contact = contactRef.current.value
        const location = locationRef.current.value
        const nationality = nationalityRef.current.value
        const nationalId = nationalIdRef.current.value

        console.log(firstName, lastName, contact, location, 
            nationality, nationalId
            )
            console.log(file)
    }

  return (
    <div className='form--container'>
         <form className='form--artisan' onSubmit={handleSubmit}>
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
            <div className='field--input'>
                <label>Contact</label>
                <input 
                type='number'
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
                <label>Nationality</label>
                <input 
                type='text'
                required
                ref={nationalityRef}
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