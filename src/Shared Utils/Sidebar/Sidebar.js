import React, { useState } from 'react'
import {FaBars,FaUserAlt } from 'react-icons/fa'
import {MdLogout} from 'react-icons/md'
import './Sidebar.css'
import { NavLink, useLocation, useNavigate} from 'react-router-dom'
import {FcEngineering} from 'react-icons/fc'

function Sidebar({data}) {
    const[isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        navigate('/login')
    }

    const width = {
        width: isOpen ? '250px': '50px'
    }

    const display = {
        display: isOpen ? 'flex' : 'none'
    }
    const display2 = {
        display: isOpen ? 'inline-block' : 'none'
    }
  return (
    <div className='sidebar--container'>
        <div className='sidebar' style={width}>
            <div className='top--section'>
                <div className='logo' style={display}>
                    <FcEngineering size={25}/>
                    <h4>FIX-R-US</h4>
                </div>
                <div className='bars'>
                    <FaBars size={25} onClick={()=>setIsOpen(prevIsOpen=>!prevIsOpen)}/>
                </div>
            </div>   
            <div className='user--icon' style={display2}>
                <FaUserAlt size={70} className='icon'/>
                <h5>username</h5>
            </div>  
            <div className='bottom--section'> 
                <div>
                {
                    data.map((item, index) => (
                        <NavLink to={item.path} key={index} className={`link ${location.pathname === item.path ? 'active' : ''}`}>
                            <div className='icon'>{item.icon}</div>
                            <div className='text--link' style={display}>{item.name}</div>
                        </NavLink>
                    ))
                }
                </div>
                {
                    isOpen ? <button className='logout--btn' style={display2} onClick={handleLogout}>Logout <MdLogout size={20}/></button>:
                    <MdLogout className='logout--icon' size={20} onClick={handleLogout}/>
                }
            </div>
        </div>
    </div>
  )
}

export default Sidebar