import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import './ArtisanProfile.css'
import ProfileHeader from '../../Shared Utils/Pages/ProfileHeader'
import Container from 'react-bootstrap/Container'
import dp from './slide1.jpg'

function ArtisanProfile() {
    const reviews = [
        {
            review: 'Sammy does really great in programming. I strongly recommend. '
        },
        {
            review: 'Sammy does really great in programming. I strongly recommend. '
        },
        {
            review: 'Sammy does really great in programming. I strongly recommend. '
        },
        {
            review: 'Sammy does really great in programming. I strongly recommend. '
        }
    ]
  return (
    <div className='profile--artisan-container'>
        <Container>
            <ProfileHeader/>
            <div className='whole--content'>
                <div className='artisan--top'>
                    <div className='top--img'>
                        <img src={dp} alt=''/>
                    </div>
                    <FaUserCircle size={100} className='profile--icon'/>
                </div>
                <div className='artisan--down'>
                    <div className='artisan--middle'>
                        <h2>Samuel Nyame</h2>
                        <p className='p'>Electrician</p>
                        <p>Ayeduase, KNUST</p>
                    </div>
                    <div className='artisan--bottom'>
                        <h5>Reviews</h5>
                        <div className='reveiwMap--container'>
                            {
                                reviews.map((item, index) => (
                                    <div key={index} className='review--map'>
                                        <FaUserCircle size={60}/>
                                        <div className='map--bottom'>
                                            <p>@ username</p>
                                            <p className='p2'>{item.review}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

            </div>
        </Container>
    </div>
  )
}

export default ArtisanProfile