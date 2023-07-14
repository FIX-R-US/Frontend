import React from 'react'
import Sidebar from '../../Shared Utils/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import {artisanData} from '../../Shared Utils/Sidebar/Sidebardata'
import { StyleRoot } from 'radium'


function ArtisanPage() {
  const styles = {
    marginLeft: '50px',
    backgroundColor:'white',
    width:'100%',
    '@media(min-width: 765px)': {
    marginLeft: '60px'
    },
    '@media(min-width: 1020px)': {
      marginLeft: '50px'
      }
  }
  return (
    <StyleRoot>
      <div style={{display: 'flex'}}>
        <div style={{position: 'fixed', zIndex:'1001'}}>
          <Sidebar data={artisanData}/>
        </div>
          <div style={styles}>
              <Outlet/>
          </div>
      </div>
    </StyleRoot>
  )
}

export default ArtisanPage