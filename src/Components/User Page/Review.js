import React from 'react'
import Select from 'react-select'
import './Review.css'
import { homedata } from './Homedata'
import { useState, useRef } from 'react'

function Review() {
    const[value, setvalue] = useState(null)
    
    const options = homedata.map(item => (
        {value: `${item.occupation}`, label: `${item.name}`}
    ))

    const artisanRef = useRef(options.values);
    const reviewRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const artisan = artisanRef.current.value
        const review = reviewRef.current.value

        console.log(artisan, review)
    }
  return (
    <div className='review--container'>
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
               />
            </div>
            <div className='review--textarea'>
                <label htmlFor='review'>Review</label>
                <textarea  name='review' rows={5} cols={45} ref={reviewRef} />
            </div>
            <button type='submit' className='review--btn'>Submit</button>

        </form>

    </div>
  )
}

export default Review