import React from 'react'
import Sidebar from '../../Shared Utils/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function UserPage() {
   const {username} = useParams();
  return (
    <div style={{display: 'flex'}}>
        <Sidebar username={username}/>
        <div style={{marginLeft: '10px'}}>
            <Outlet/>
        </div>
    </div>
  )
}

export default UserPage