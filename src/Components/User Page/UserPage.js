import React from 'react'
import Sidebar from '../../Shared Utils/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import {data} from '../../Shared Utils/Sidebar/Sidebardata'

function UserPage() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{position: 'fixed'}}>
        <Sidebar data={data}/>
      </div>
        <div style={{marginLeft: '10px', backgroundColor:'white', width:'100%'}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default UserPage