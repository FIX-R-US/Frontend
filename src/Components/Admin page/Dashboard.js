import React, { useEffect, useState } from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import Container from "react-bootstrap/Container";
//import userData from "../../MOCK_DATA.json";
import axios from "axios";

function Dashboard() {
  const [artisan, setArtisan] = useState([]);
  const data = [{ name: "User", pv: artisan.length }];
  const role = "user";
  useEffect(() => {
    axios
      .post("http://localhost:3001/datauser/getuserdata", { role })
      .then((data) => {
        // console.log(data.data)
        setArtisan(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
  );
}

export default Dashboard;
