import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { HiUsers } from "react-icons/hi";
import { MdEngineering } from "react-icons/md";
import "./Dashboard.css";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { useNavigate } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'


function Dashboard() {
  const [artisan, setArtisan] = useState([]);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  // const [userActive, setActive] = useState([]);
  // const [userInactive, setInactive] = useState([]);
  // const [userInactiveA, setInactiveA] = useState([]);
  // const [userActiveA, setActiveA] = useState([]);
  // const data = [{ name: "User", pv: artisan.length }];
  useEffect(() => {
    const fetchData = async () => {
      const role = "user";
      const userResponse = await axios.post(
        "http://localhost:3001/datauser/getuserdata",
        { role }
      );
      setUser(userResponse.data);
      setIsLoading(false)
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchme = async () => {
      const role = "artisan";
      const artisanResponse = await axios.post(
        "http://localhost:3001/data/getdata",
        { role }
      );
      setArtisan(artisanResponse.data);
      setIsLoading(false)
    };
    fetchme();
  }, []);

  // useEffect(() => {
  //   const fetchactive = async () => {
  //     const role = "user";
  //     const isActive = "1";
  //     const userResponse = await axios.post("http://localhost:3001/active/me", {
  //       role,
  //       isActive,
  //     });
  //     setActive(userResponse.data);

  //     const artisanResponse = await axios.post(
  //       "http://localhost:3001/active/me",
  //       { role: "user", isActive: "0" }
  //     );
  //     setInactive(artisanResponse.data);
  //   };

  //   fetchactive();
  // }, []);

  // useEffect(() => {
  //   const fetchartisan = async () => {
  //     const role = "artisan";
  //     const isActive = "1";
  //     const userResponse = await axios.post("http://localhost:3001/active/me", {
  //       role,
  //       isActive,
  //     });
  //     setActiveA(userResponse.data);

  //     const artisanResponse = await axios.post(
  //       "http://localhost:3001/active/me",
  //       { role: "artisan", isActive: "0" }
  //     );
  //     setInactiveA(artisanResponse.data);
  //   };

  //   fetchartisan();
  // }, []);

  const navigate = useNavigate();

  const totalArtisans = artisan.length;
  const verifiedArtisans = artisan.filter((person) => person.isVerified).length;
  const unverifiedArtisans = totalArtisans - verifiedArtisans;

  // calculate percentage
  const verifiedPercentage = (verifiedArtisans / totalArtisans) * 100;
  const unverifiedPercentage = (unverifiedArtisans / totalArtisans) * 100;

  //Rechart data
  const chartData = [
    { name: "Verified Artisans", value: verifiedPercentage },
    { name: "Unverified Artisans", value: unverifiedPercentage },
  ];

  const COLORS = ["#8884d8", "#82ca9d"];

  if(isLoading){
    return(
      <div className="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
        <Spinner animation="grow" role="status" style={{color: '#7200CC'}}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <div>
      <Container>
        {/* <h1 style={{textAlign: 'center', color:'#7200CC'}}>Overview</h1> */}
        <div className="dashboard--container">
          <div className="admin--cardDiv">
            <h5 style={{ color: "#7200CC" }}>Analytics</h5>
            <div className="admin--cardContent">
              <Card
                className="users--overview"
                onClick={() => navigate("/login/admin/manageUsers")}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <h1>
                    <HiUsers />
                  </h1>
                  <h1>{user.length}</h1>
                  <h5>Users</h5>
                </Card.Body>
              </Card>
              <Card
                className="users--overview"
                onClick={() => navigate("/login/admin/manageUsers")}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <h1>
                    <HiUsers />
                  </h1>
                  <h1>{user.filter((item) => item.isActive).length}</h1>
                  <h5>Active Users</h5>
                </Card.Body>
              </Card>
              <Card
                className="users--overview"
                onClick={() => navigate("/login/admin/manageUsers")}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <h1>
                    <HiUsers />
                  </h1>
                  <h1>{user.filter((item) => !item.isActive).length}</h1>
                  <h5>Inactive Users</h5>
                </Card.Body>
              </Card>
              <Card
                className="users--overview"
                onClick={() => navigate("/login/admin/manageArtisans")}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <h1>
                    <MdEngineering />
                  </h1>
                  <h1>{artisan.length}</h1>
                  <h5>Artisans</h5>
                </Card.Body>
              </Card>
              <Card
                className="users--overview"
                onClick={() => navigate("/login/admin/manageArtisans")}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <h1>
                    <MdEngineering />
                  </h1>
                  <h1>{artisan.filter((item) => item.isActive).length}</h1>
                  <h5>Active artisans</h5>
                </Card.Body>
              </Card>
              <Card
                className="users--overview"
                onClick={() => navigate("/login/admin/manageArtisans")}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <h1>
                    <MdEngineering />
                  </h1>
                  <h1>{artisan.filter((item) => !item.isActive).length}</h1>
                  <h5>Inactive artisans</h5>
                </Card.Body>
              </Card>
              <Card
                className="users--overview"
                onClick={() => navigate("/login/admin/manageArtisans")}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <h1>
                    <MdEngineering />
                  </h1>
                  <h1>{artisan.filter((item) => item.paymentMade).length}</h1>
                  <h5>Payments Made</h5>
                </Card.Body>
              </Card>
              <Card
                className="users--overview"
                onClick={() => navigate("/login/admin/manageArtisans")}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <h1>
                    <MdEngineering />
                  </h1>
                  <h1>{artisan.filter((item) => !item.paymentMade).length}</h1>
                  <h5>No Payments</h5>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="admin--verification">
            <h5 style={{ color: "#7200CC" }}>Report</h5>
            <div className="admin--verificationContent">
              <Card
                className="verification--overview"
                style={{ height: "89.72vh" }}
                onClick={() => navigate("/login/admin/verifyArtisans")}
              >
                <Card.Body style={{ textAlign: "center" }}>
                  <h5>VERIFICATION</h5>
                  <p>
                    Verified Artisans:{" "}
                    {artisan.filter((item) => item.isVerified).length}
                  </p>
                  <p>
                    Unverified Artisans:{" "}
                    {artisan.filter((item) => !item.isVerified).length}
                  </p>
                  <PieChart width={525} height={420}>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={180}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
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
