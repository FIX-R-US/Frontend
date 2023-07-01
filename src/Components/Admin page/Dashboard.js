import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import Container from 'react-bootstrap/Container'
import userData from '../../MOCK_DATA.json'

function Dashboard() {
  const data = [
    { name: 'User', pv: userData.length},
   
  ];
  return (
    <div>
      <Container>
        <h1>Overview</h1>
        <BarChart width={350} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#7200cc" />
        </BarChart>
      </Container>

    </div>
  )
}

export default Dashboard