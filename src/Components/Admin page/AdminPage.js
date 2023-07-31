import React from 'react'
import Sidebar from '../../Shared Utils/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import {adminData} from '../../Shared Utils/Sidebar/Sidebardata'
import { StyledDiv } from '../StyledComponents'

function AdminPage() {
  return (
      <div style={{display: 'flex'}}>
        <div style={{position: 'fixed', zIndex:'2'}}>
          <Sidebar data={adminData}/>
        </div>
        <StyledDiv>
          <Outlet/>
        </StyledDiv>
      </div>
  )
}

export default AdminPage