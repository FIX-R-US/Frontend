import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import userData from '../../MOCK_DATA.json'

function ArtisanBookings() {
    const[search, setSearch] = useState('')

    const filter = userData.filter((item) => (
    item.first_name.toLowerCase().includes(search) || item.last_name.toLowerCase().includes(search) || item.location.toLowerCase().includes(search) || item.contact.includes(search) || item.email.toLowerCase().includes(search)
))
  return (
    <div className='Table--container'>
        <Container>
        <div className='sticky--container'>
                <Form>
                    <Form.Control placeholder='Search users' type='search' onChange={(e)=>setSearch(e.target.value)} className='my-3 sticky'/>
                </Form>
            </div>
            <Table bordered hover responsive style={{color:'#7200CC'}} >
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filter.map(item => (
                            <tr key={item.id}>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                                <td>{item.location}</td>
                                <td style={{display:'flex', gap:'10px'}}>
                                    <button className='admin--btn'>Accept</button>
                                    <button className='admin--btn'>Decline</button>
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

export default ArtisanBookings