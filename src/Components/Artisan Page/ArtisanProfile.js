import React from 'react'
import {CiLocationOn} from 'react-icons/ci'
import pic from './slide1.jpg'
import './ArtisanProfile.css'

function ArtisanProfile() {
  return (
    <div className='profile--artisan-container'>
        <div className='profile--artisan'>
            <div>
                <img src={pic} alt='' width={150} height={150} className='artisan--pic'/>
            </div>
            <div>
                <h1>Samuel Nyame</h1>
                <p>Every picture has a story to tell</p>
                <p><CiLocationOn/> Kumasi, Ghana</p>
                <p>Interests</p>
            </div>
        </div>
        <div style={{paddingTop:'15px'}}>
            <h3 style={{textAlign: 'center'}}>Projects worked on</h3>
            <div style={{display:'flex', gap:'10px', flexWrap:'wrap', justifyContent:"center"}}>
                <img src={pic} alt='' width={400} height={350}/>
                <img src={pic} alt='' width={400} height={350}/>
                <img src={pic} alt='' width={400} height={350}/>
                <img src={pic} alt='' width={400} height={350}/>
                <img src={pic} alt='' width={400} height={350}/>
                <img src={pic} alt='' width={400} height={350}/>
                <img src={pic} alt='' width={400} height={350}/>
            </div>
            <div style={{textAlign:'center', paddingTop:'15px'}}>
                <h3>Reviews</h3>
                <p>Reviews go here</p>
                <p>Reviews go here</p>
                <p>Reviews go here</p>
                <p>Reviews go here</p>
            </div>
        </div>
    </div>
  )
}

export default ArtisanProfile