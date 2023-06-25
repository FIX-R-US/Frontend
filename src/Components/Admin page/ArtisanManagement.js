import React from 'react'
import artisanData from '../../MOCK_DATA.json'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import './Search.css'
import './Management.css'

function ArtisanManagement() {

    const[search, setSearch] = useState('')

    const filter = artisanData.filter(item => (item.first_name.toLowerCase().includes(search) ||
        item.last_name.toLowerCase().includes(search) || item.location.toLowerCase().includes(search) || item.occupation.toLowerCase().includes(search)
    ))

  return (
    <div className='Table--container'>
        <Container>
            <div className='sticky--container'>
                <Form>
                    <Form.Control placeholder='Search artisans' type='search' onChange={(e)=>setSearch(e.target.value)} className='my-3 sticky'/>
                </Form>
            </div>
            <Table bordered hover responsive style={{color:'#7200CC'}}>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Location</th>
                        <th>Occupation</th>
                        <th>isVerified</th>
                        <th>PaymentMade</th>
                        <th>isActive</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filter.map(item => (
                            <tr key={item.id}>
                                <td>{item.username}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>{item.location}</td>
                                <td>{item.occupation}</td>
                                <td>{item.isVerified ? 'Verified' : 'Not verified'}</td>
                                <td>{item.paymentMade ? 'Yes' : 'No'}</td>
                                <td>
                                    {
                                        item.paymentMade ? 
                                        <button className='admin--btn'>Deactivate</button> : <button className='admin--btn'>Activate</button>
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

        </Container>

    </div>
  )
}

export default ArtisanManagement