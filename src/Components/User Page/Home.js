import {React, useState} from 'react'
// import photo from './card.jpg'
import './Home.css'
// import {homedata} from './Homedata'
import artisanData from '../../MOCK_DATA.json'
import Searchbar from '../../Shared Utils/Sidebar/Searchbar'
import Container from 'react-bootstrap/Container'


function Home() {
  const[search, setSearch] = useState('')
  const[itemsToShow, setItemsToShow] = useState(15)

  const filter = artisanData.slice(0, itemsToShow).filter(item => (
    item.occupation.toLowerCase().includes(search) || item.location.toLowerCase().includes(search)
  ))

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleLoadMore = () => {
    setItemsToShow(prevItemsToShow => prevItemsToShow + 15)
  }

  const renderItems = () => {
    if(filter.length === 0){
      return <div style={{display:'flex', width:'100%'}}>
                 <p style={{justifyContent:'center', alignItems:'center'}}>No results found</p>
            </div>
    }

    return filter.map(item => (
      <div className='card--content' key={item.id}>
          <div className='top--content'>
            <img src={item.profile_photo} alt='' className='card--img' width={120} height={120}/>
            <div className='card--details'>
              <h5>{`${item.first_name} ${item.last_name}`}</h5>
              <p id='location'>{item.occupation}</p>
              <p >{item.location}</p>
            </div>
          </div>
          <div className='bottom--content'>
            <p>{item.description}</p>
            <button className='card--btn'>View Profile</button>
          </div>
      </div>
  ))
  }

  return (  
      <div className='card--container'>
        <Container>
          <Searchbar handleSearch={handleSearch}/> 
          <div className='card--card'>
          {renderItems()}
          </div>
          <div className='load--btn'>
            {
              !search && itemsToShow < artisanData.length && (<button onClick={handleLoadMore} >Load more</button>)
            }
          </div>
        </Container>
       
      </div>
  )
}

export default Home