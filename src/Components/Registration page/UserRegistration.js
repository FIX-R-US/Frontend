import React, { useRef } from 'react'
import './Registration.css'

function UserRegistration() {
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
    }
  return (
    <div className='form--container'>
        <form className='form' onSubmit={handleSubmit}>
            <h2>Setup account</h2>
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
            <button type='submit' className='form--btn'>Submit</button>
        </form>
    </div>
  )
}

export default UserRegistration