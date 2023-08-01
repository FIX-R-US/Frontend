import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { MdVerified } from "react-icons/md";
import "./VerifyArtisan.css";
// import Sentiment from "sentiment";
import Form from "react-bootstrap/Form";
import "./Search.css";
import Spinner from "react-bootstrap/Spinner";
// import { DivStyle } from "../StyledComponents";

function VerifyRegistration() {
  const [artisan, setArtisan] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const [review, setReviews] = useState([]);
  const role = "artisan";
  useEffect(() => {
    axios
      .post(
        "https://fix-r-us-backend-1f9302e2f7be.herokuapp.com/data/getdata",
        { role }
      )
      .then((data) => {
        // console.log(data.data)
        setArtisan(data.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const filter = artisan.filter((item) => {
    const firstNameLower = item.firstname ? item.firstname.toLowerCase() : "";
    const lastNameLower = item.lastname ? item.lastname.toLowerCase() : "";
    const locationLower = item.location ? item.location.toLowerCase() : "";
    const emailLower = item.email ? item.email.toLowerCase() : "";
    const occupationLower = item.occupation
      ? item.occupation.toLowerCase()
      : "";
    const searchLower = search ? search.toLowerCase() : "";

    return (
      firstNameLower.includes(searchLower) ||
      lastNameLower.includes(searchLower) ||
      locationLower.includes(searchLower) ||
      occupationLower.includes(searchLower) ||
      emailLower.includes(searchLower)
    );
  });

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

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <Spinner animation="grow" role="status" style={{ color: "#7200CC" }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  const style = {
    color: "#7200CC",
  };

  return (
    <div className="Table--container">
      <Container className="mt-3">
        <div className="sticky--container">
          <Form>
            <Form.Control
              placeholder="Search users"
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              className="my-3 sticky"
            />
          </Form>
        </div>
        {/* <DivStyle> */}
        <Table bordered hover responsive style={style}>
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
            {filter.map((item) => (
              <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.nationalID}</td>
                <td>{item.certificate}</td>
                <td>{item.sentimentScores}%</td>
                <td>
                  {item.isVerified ? (
                    <MdVerified size={50} color="#7200CC" />
                  ) : (
                    "Not Verified"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* </DivStyle> */}
      </Container>
    </div>
  );
}

export default VerifyRegistration;
