import React from 'react'
import Sidebar from '../../Shared Utils/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import {artisanData} from '../../Shared Utils/Sidebar/Sidebardata'

function ArtisanPage() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{position: 'fixed', zIndex:'1001'}}>
        <Sidebar data={artisanData}/>
      </div>
        <div style={{marginLeft: '50px', backgroundColor:'white', width:'100%'}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default ArtisanPage