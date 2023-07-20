import React, { useEffect, useState } from "react";
// import artisan from "../../MOCK_DATA.json";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { MdVerified } from "react-icons/md";
import "./VerifyArtisan.css";
import Sentiment from "sentiment";
// import {useState} from 'react'

function VerifyRegistration() {
  const [artisan, setArtisan] = useState([]);
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

  const reviews = [
    {
      review: "Sammy does really bad in programming. I strongly recommend. ",
    },
    {
      review: "Sammy does really bad in programming. I strongly recommend. ",
    },
    {
      review: "Sammy does really bad in programming. I strongly recommend. ",
    },
    {
      review: "Sammy does really bad in programming. I strongly recommend. ",
    },
  ];

  const [sentiment, setSentiment] = useState(null);

  const analzyeAllReviews = () => {
    const sentimentAnalyzer = new Sentiment();
    let totalScore = 0;
    let positiveWords = [];
    let negativeWords = [];

    // for (const review of reviews) {
    const result = sentimentAnalyzer.analyze(reviews.review);
    totalScore += result.score;
    positiveWords = positiveWords.concat(result.positive);
    negativeWords = negativeWords.concat(result.negative);
    // }

    const averageScore = totalScore / reviews.length;
    const percentage = Math.min(
      100,
      Math.max(0, Math.round(((averageScore + 5) / 10) * 100))
    );

    setSentiment({
      score: averageScore,
      percentage: percentage,
      positiveWords,
      negativeWords,
    });
  };

  return (
    <div className="Table--container">
      <Container className="mt-3">
        <div className="analyze">
          <button className="analyze--btn" onClick={analzyeAllReviews}>
            Analyze
          </button>
        </div>
        {sentiment !== null && (
          <div>
            <h4>Overall Sentiment Analysis</h4>
            <p>Score: {sentiment.score}</p>
            <p>Percentage: {sentiment.percentage}%</p>
            <p>Positive Words: {sentiment.positiveWords.join(", ")}</p>
            <p>Negative Words: {sentiment.negativeWords.join(", ")}</p>
            {sentiment.percentage >= 80 && <button>Passed</button>}
          </div>
        )}
        <Table bordered hover responsive style={{ color: "#7200CC" }}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>National ID</th>
              <th>Certificate</th>
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
                <td>
                  {item.isVerified ? <MdVerified size={20} /> : "Not Verified"}
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
