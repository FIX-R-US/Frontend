// import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import userData from "../../MOCK_DATA.json";
// import axios from "axios";
import Card from 'react-bootstrap/Card'
import {HiUsers} from 'react-icons/hi'
import {MdEngineering} from 'react-icons/md'
import './Dashboard.css'
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  // const [artisan, setArtisan] = useState([]);
  // const data = [{ name: "User", pv: artisan.length }];
  // const role = "user";
  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3001/datauser/getuserdata", { role })
  //     .then((data) => {
  //       // console.log(data.data)
  //       setArtisan(data.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const navigate = useNavigate()

  const totalArtisans = userData.length
  const verifiedArtisans = userData.filter(person => person.isVerified).length
  const unverifiedArtisans = totalArtisans - verifiedArtisans

  // calculate percentage
  const verifiedPercentage = (verifiedArtisans / totalArtisans) * 100
  const unverifiedPercentage = (unverifiedArtisans / totalArtisans) * 100

  //Rechart data
  const chartData = [
    {name:'Verified Artisans', value: verifiedPercentage},
    {name: 'Unverified Artisans', value: unverifiedPercentage}
  ]

  const COLORS = ["#8884d8", "#82ca9d"];

  return (
    <div>
      <Container>
        {/* <h1 style={{textAlign: 'center', color:'#7200CC'}}>Overview</h1> */}
        <div className="dashboard--container">
          <div className="admin--cardDiv">
            <h5 style={{color:'#7200CC'}}>Analytics</h5>
            <div className="admin--cardContent">
              <Card className="users--overview" onClick={()=>navigate('/login/admin/manageUsers')}>
                <Card.Body style={{textAlign:'center'}}>
                  <h1><HiUsers/></h1>
                  <h1>{userData.length}</h1>
                  <h5>Users</h5>
                </Card.Body>
              </Card>
              <Card className="users--overview" onClick={()=>navigate('/login/admin/manageUsers')}>
                <Card.Body style={{textAlign:'center'}}>
                  <h1><HiUsers/></h1>
                  <h1>{userData.filter(item => item.isActive).length}</h1>
                  <h5>Active Users</h5>
                </Card.Body>
              </Card>
              <Card className="users--overview" onClick={()=>navigate('/login/admin/manageUsers')}>
                <Card.Body style={{textAlign:'center'}}>
                  <h1><HiUsers/></h1>
                  <h1>{userData.filter(item => !item.isActive).length}</h1>
                  <h5>Inactive Users</h5>
                </Card.Body>
              </Card> 
              <Card className="users--overview" onClick={()=>navigate('/login/admin/manageArtisans')}>
                <Card.Body style={{textAlign:'center'}}>
                  <h1><MdEngineering/></h1>
                  <h1>{userData.length}</h1>
                  <h5>Artisans</h5>
                </Card.Body>
              </Card> 
              <Card className="users--overview" onClick={()=>navigate('/login/admin/manageArtisans')}>
                <Card.Body style={{textAlign:'center'}}>
                  <h1><MdEngineering/></h1>
                  <h1>{userData.filter(item => item.isActive).length}</h1>
                  <h5>Active artisans</h5>
                </Card.Body>
              </Card>           
              <Card className="users--overview" onClick={()=>navigate('/login/admin/manageArtisans')}>
                <Card.Body style={{textAlign:'center'}}>
                  <h1><MdEngineering/></h1>
                  <h1>{userData.filter(item => !item.isActive).length}</h1>
                  <h5>Inactive artisans</h5>
                </Card.Body>
              </Card>
              <Card className="users--overview" onClick={()=>navigate('/login/admin/manageArtisans')}>
                <Card.Body style={{textAlign:'center'}}>
                  <h1><MdEngineering/></h1>
                  <h1>{userData.filter(item => item.paymentMade).length}</h1>
                  <h5>Payments Made</h5>
                </Card.Body>
              </Card>             
              <Card className="users--overview" onClick={()=>navigate('/login/admin/manageArtisans')}>
                <Card.Body style={{textAlign:'center'}}>
                  <h1><MdEngineering/></h1>
                  <h1>{userData.filter(item => !item.paymentMade).length}</h1>
                  <h5>No Payments</h5>
                </Card.Body>
              </Card>                   
            </div>
          </div>
          <div className="admin--verification">
            <h5 style={{color:'#7200CC'}}>Report</h5>
            <div className="admin--verificationContent">
              <Card className="verification--overview" style={{height:'89.72vh'}} onClick={()=>navigate('/login/admin/verifyArtisans')}>
                  <Card.Body style={{textAlign:'center'}}>
                    <h5>VERIFICATION</h5>
                    <p>Verified Artisans: {userData.filter(item => item.isVerified).length}</p>
                    <p>Unverified Artisans: {userData.filter(item => !item.isVerified).length}</p>
                    <PieChart width={525} height={420}>
                      <Pie
                        data={chartData}
                        cx='50%'
                        cy='50%'
                        labelLine={false}
                        outerRadius={180}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                  </PieChart>
                  <h5>Percentage scale</h5>
                  </Card.Body>
                </Card>       
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
