import React from 'react'
import Select from 'react-select'
import './Review.css'
import artisanData from '../../MOCK_DATA.json'
import { useState, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import ProfileHeader from '../../Shared Utils/Pages/ProfileHeader'

function Review() {
    const[value, setvalue] = useState(null)
    
    const options = artisanData.map(item => (
        {value: `${item.occupation}`, label: `${item.first_name} ${item.last_name}`}
    ))
    

    const artisanRef = useRef(null);
    const reviewRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedOption = artisanRef.current.state.value
        const review = reviewRef.current.value

        console.log(selectedOption, review)
    }

    const customStyles = {
        control: (provided) => ({
          ...provided,
          padding: '5px',
          borderRadius: '5px',
          borderColor:'gray'
        })
      };
  return (
    <div className='review--container'>
        <Container>
            <ProfileHeader title={'Review'}/>
            <div className='review--content'>
                <form className='review' onSubmit={handleSubmit}>
                    <div className='review--select'>
                        <Select 
                        ref={artisanRef}
                        options={options} 
                        defaultValue={value} 
                        placeholder='Search artisan'
                        onChange={setvalue}
                        noOptionsMessage={()=>"Artisan not found"}
                        isSearchable
                        isClearable
                        styles={customStyles}
                        />
                    </div>
                    <div className='review--textarea'>
                        <label htmlFor='review'>Review</label>
                        <textarea id='review' rows={8} cols={45} ref={reviewRef} placeholder='Type your reviews here...' />
                    </div>
                    <div className='review--btn'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </Container>

    </div>
  )
}

export default Review