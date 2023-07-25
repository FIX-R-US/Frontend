import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { MdVerified } from "react-icons/md";
import "./VerifyArtisan.css";
import Sentiment from "sentiment";

function VerifyRegistration() {
  const [artisan, setArtisan] = useState([]);
  // const [review, setReviews] = useState([]);
  const role = "artisan";
  useEffect(() => {
    axios
      .post("http://localhost:3001/data/getdata", { role })
      .then((data) => {
        // console.log(data.data)
        setArtisan(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  // const user_id = artisan.id
  //   const handleclick = () => {
  //     axios
  //       .post("http://localhost:3001/review/display",{user_id})
  //       .then((data) => {
  //         // console.log(data.data)
  //         setReviews(data.data);
  //       })
  //       .catch((error) => console.log(error));
  //   };

  const sentimentScore = (review) => {
    if (!Array.isArray(review) || review.length === 0) return 0;
    const sentiment = new Sentiment();
    let totalScore = 0;
    review.forEach((review) => {
      const { score } = sentiment.analyze(review);
      totalScore += score;
    });
    const avgScore = totalScore / review.length;
    return avgScore;
  };

  return (
    <div className="Table--container">
      <Container className="mt-3">
        <Table bordered hover responsive style={{ color: "#7200CC" }}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>National ID</th>
              <th>Certificate</th>
              <th>Results</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {artisan.map((item) => (
              <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.profile_photo}</td>
                <td>{item.certificate}</td>
                <td>{sentimentScore(item.reviews)}</td>
                <td>
                  {item.isVerified ? <MdVerified size={60} /> : "Not Verified"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default VerifyRegistration;
