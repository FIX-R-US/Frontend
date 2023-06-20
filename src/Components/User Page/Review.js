import React from 'react'
import Select from 'react-select'
import './Review.css'
// import { homedata } from './Homedata'
import artisanData from '../../MOCK_DATA.json'
import { useState, useRef } from 'react'
import Container from 'react-bootstrap/Container'

function Review() {
    const[value, setvalue] = useState(null)
    
    const options = artisanData.map(item => (
        {value: `${item.occupation}`, label: `${item.first_name} ${item.last_name}`}
    ))
    

    const artisanRef = useRef();
    const reviewRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const artisan = artisanRef.current.value
        const review = reviewRef.current.value

        console.log(artisan, review)
    }

    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          borderColor: state.isFocused ? '#ff9800' : provided.borderColor,
          boxShadow: state.isFocused ? '0 0 0 2px #ff9800' : provided.boxShadow,
        }),
        option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isFocused ? 'lightblue' : 'white',
              color: state.isFocused ? 'black' : 'inherit',
             })
      };
  return (
    <div >
        <Container className='review--container'>
            <h2>Review</h2>
            <form className='review' onSubmit={handleSubmit}>
                <div className='review--select'>
                <Select 
                ref={artisanRef}
                options={options} 
                defaultValue={value} 
                placeholder='Search artisan'
                onChange={setvalue}
                noOptionsMessage={()=> "Artisan not found"}
                isSearchable
                isClearable
                styles={customStyles}
                />
                </div>
                <div className='review--textarea'>
                    <label htmlFor='review'>Review</label>
                    <textarea  name='review' rows={5} cols={45} ref={reviewRef} />
                </div>
                <button type='submit' className='review--btn'>Submit</button>
            </form>
        </Container>

    </div>
  )
}

export default Review