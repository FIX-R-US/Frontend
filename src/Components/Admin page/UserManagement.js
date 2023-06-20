import React from 'react'
import userData from '../../MOCK_DATA.json'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import './Search.css'

function UserManagement() {

const[search, setSearch] = useState('')

const filter = userData.filter((item) => (
    item.first_name.toLowerCase().includes(search) || item.last_name.toLowerCase().includes(search) || item.location.toLowerCase().includes(search)
))

  return (
    <div className='Table--container'>
        <Container>
        <div className='sticky--container'>
                <Form>
                    <Form.Control placeholder='Search artisans' type='search' onChange={(e)=>setSearch(e.target.value)} className='my-3 sticky'/>
                </Form>
            </div>
            <Table bordered hover variant='dark'striped='columns'responsive >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filter.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>{item.location}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    </div>
  )
}

export default UserManagement