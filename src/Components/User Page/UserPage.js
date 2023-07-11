import React from 'react'
import Sidebar from '../../Shared Utils/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import {data} from '../../Shared Utils/Sidebar/Sidebardata'
import Radium, { StyleRoot } from 'radium'

function UserPage() {
  const styles = {
    marginLeft: '50px',
    backgroundColor:'white',
    width:'100%',
    '@media(min-width: 765px) and (max-width: 780px)': {
    marginLeft: '60px'
    }
  }
  return (
    <StyleRoot>
      <div style={{display: 'flex'}}>
        <div style={{position: 'fixed', zIndex:'1001'}}>
          <Sidebar data={data}/>
        </div>
          <div style={styles}>
              <Outlet/>
          </div>
      </div>
    </StyleRoot>
  )
}

export default UserPage