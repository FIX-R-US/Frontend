import React, { useState } from 'react'
import {FaThList, FaUserAlt, FaCommentAlt, FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

function Sidebar({children}) {
    const[isOpen, setIsOpen] = useState(false)

    const width = {
        width: isOpen ? '250px': '50px'
    }

    const display = {
        display: isOpen ? 'inline-block' : 'none'
    }
    const menuItem = [
        {
            path:'/dashboard',
            name:'Dashboard',
            icon:<FaThList/>
        },
        {
            path:'/editProfile',
            name:'Edit Profile',
            icon:<FaUserAlt/>
        },
        {
            path:'/comment',
            name:'Comment',
            icon:<FaCommentAlt/>
        }
    ]
  return (
    <div className='sidebar--container'>
        <div className='sidebar' style={width}>
            <div className='top--section'>
                <h1 className='logo' style={display}>Logo</h1>
                <div className='bars'>
                    <FaBars size={25} onClick={()=>setIsOpen(prevIsOpen=>!prevIsOpen)}/>
                </div>
            </div>
            {
                menuItem.map((item,index)=> (
                    <NavLink to={item.path} key={index} className='link' activeclassname='active'>
                        <div className='icon'>{item.icon}</div>
                        <div className='text--link' style={display}>{item.name}</div>
                    </NavLink>
                ))
            }        
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar