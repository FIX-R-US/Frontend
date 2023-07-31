import React from 'react'
import Sidebar from '../../Shared Utils/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import {data} from '../../Shared Utils/Sidebar/Sidebardata'
import { StyledDiv } from '../StyledComponents'

function UserPage() {
  return (
      <div style={{display: 'flex'}}>
        <div style={{position: 'fixed', zIndex:'1001'}}>
          <Sidebar data={data}/>
        </div>
        <StyledDiv>
          <Outlet/>
        </StyledDiv>
      </div>
  )
}

export default UserPage