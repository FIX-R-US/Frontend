import React, { useState } from 'react'
import './Searchbar.css'
import { homedata } from '../Pages/Homedata'

function Searchbar() {
    const[search, setSearch] = useState('')
    console.log(search)
  return (
    <div className='entire--container'>
        <div className='search--container'>
            <input type='text' placeholder='Search' className='search--bar'
            onChange={(e)=>setSearch(e.target.value)}
            />
        </div>
        <table className='table'>
            <tr>
                <th>Name</th>
                <th>Occupation</th>
            </tr>
            {
                homedata.filter(item =>{
                    return search.toLocaleLowerCase() === ''? item : item.occupation.toLocaleLowerCase().includes(search)
                }).map(item=>(
                    `${item.occupation}, ${item.name}, ${item.location}`
                ))
            }
        </table>
    </div>
  )
}

export default Searchbar