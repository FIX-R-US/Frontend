import React from 'react'
import photo from './card.jpg'
import './Home.css'
import {homedata} from './Homedata'
// import Sidebar from '../Sidebar/Sidebar'

function Home() {
  return (  
    <div className='card--container'>
    {
      homedata.map(item => (
          <div className='card--content' key={item.id}>
              <div className='top--content'>
                <img src={photo} alt='' className='card--img' width={120} height={120}/>
                <div>
                  <h5>{item.name}</h5>
                  <p>{item.occupation}</p>
                </div>
              </div>
              <div className='bottom--content'>
                <p>{item.description}</p>
                <button className='card--btn'>View Profile</button>
              </div>
          </div>
      ))
    }
    </div>
  )
}

export default Home