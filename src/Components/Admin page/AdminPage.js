import React from 'react'
import Sidebar from '../../Shared Utils/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import {adminData} from '../../Shared Utils/Sidebar/Sidebardata'

function AdminPage() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{position: 'fixed', zIndex:'2'}}>
        <Sidebar data={adminData}/>
      </div>
        <div style={{marginLeft: '50px', backgroundColor:'white', width:'100%'}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminPage