import React from 'react'
import Sidebar from '../../Shared Utils/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import {artisanData} from '../../Shared Utils/Sidebar/Sidebardata'
import { StyledDiv } from '../StyledComponents'


function ArtisanPage() {
  
  return (
      <div style={{display: 'flex'}}>
        <div style={{position: 'fixed', zIndex:'1001'}}>
          <Sidebar data={artisanData}/>
        </div>
        <StyledDiv>
          <Outlet/>
        </StyledDiv>
      </div>
  )
}

export default ArtisanPage