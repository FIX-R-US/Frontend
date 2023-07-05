import React from 'react'
import verifyArtisanData from '../../MOCK_DATA.json'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'


function VerifyRegistration() {
  return (
    <div className='Table--container'>
    <Container className='mt-3'>
        <Table bordered hover responsive style={{color:'#7200CC'}} >
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Location</th>
                    <th>Certificate</th>
                    <th>Verify</th>
                </tr>
            </thead>
            <tbody>
                {
                    verifyArtisanData.map(item => (
                        <tr key={item.id}>
                            <td>{item.username}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>{item.location}</td>
                            <td>{item.profile_photo}</td>
                            <td>
                               <button className='admin--btn'>Verify</button>    
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

export default VerifyRegistration