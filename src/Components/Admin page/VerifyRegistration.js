import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { MdVerified } from "react-icons/md";
import "./VerifyArtisan.css";
import Sentiment from "sentiment";
import Spinner from 'react-bootstrap/Spinner'

function VerifyRegistration() {
  const [artisan, setArtisan] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  // const [review, setReviews] = useState([]);
  const role = "artisan";
  useEffect(() => {
    axios
      .post("http://localhost:3001/data/getdata", { role })
      .then((data) => {
        // console.log(data.data)
        setArtisan(data.data);
        setIsLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);
  // const calculateSentiment = (reviews) => {
  //   if (reviews.length === 0 || reviews.length === null) {
  //     return 0;
  //   }
  //   const analyzer = new Sentiment();
  //   const sentimentResults = reviews.map((review) =>
  //     analyzer.analyze(review.review)
  //   );

  //   const scores = sentimentResults.map((item) => item.score);
  //   console.log("chi", scores);

  //   //Calculate average sentiment
  //   const totalScore = scores.reduce((total, result) => total + result);

  //   const averageSentiment = totalScore / scores.length;

  //   //convert the average sentiment score to percentage
  //   const sentimentPercentage = Math.round((averageSentiment + 5) * 10);
  //   if (sentimentPercentage > 100) {
  //     return 100;
  //   } else if (sentimentPercentage < 0) {
  //     return 0;
  //   } else {
  //     console.log(sentimentPercentage);
  //     return sentimentPercentage;
  //   }
  // };

  // export const sentimentA = async () => {
  //   const role = "artisan";
  //   const connection = getDbConnection();
  //   const user = await runQuery(connection, fetcheveryone(), [role]);

  //   user.forEach(async (item) => {
  //     const reviewsArray = [];
  //     const artisan_id = item.id;
  //     const reviews = await runQuery(connection, getReviews(), [artisan_id]);
  //     console.log(reviews);
  //     console.log("Artisan ID:", artisan_id);
  //     reviewsArray.push(...reviews);
  //     // console.log("hello", reviewsArray);

  //     const sentimentScore = calculateSentiment(reviewsArray);
  //     if (sentimentScore < 65) return;
  //     const id = artisan_id;
  //     const artisans = await runQuery(connection, isVerified(), [id]);
  //     console.log(artisans);
  //   });
  // };

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
              {/* <th>Results</th> */}
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
                {/* <td>{sentimentScore(item.reviews)}</td> */}
                <td>
                  {item.isVerified ? <MdVerified size={50} /> : "Not Verified"}
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
