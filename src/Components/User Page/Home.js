import { React, useEffect, useState } from "react";
// import photo from './card.jpg'
import "./Home.css";
// import artisanData from "../../MOCK_DATA.json";
import Searchbar from "../../Shared Utils/Sidebar/Searchbar";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import { FaUserCircle } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [itemsToShow, setItemsToShow] = useState(15);
  const [artisan, setArtisan] = useState([]);

  const filter = artisan
    .slice(0, itemsToShow)
    .filter(
      (item) =>
        item.occupation.toLowerCase().includes(search) ||
        item.location.toLowerCase().includes(search)
    );
  const role = "artisan";
  useEffect(() => {
    axios.post("http://localhost:3001/data/getdata", { role }).then((data) => {
      // console.log(data.data)
      setArtisan(data.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleLoadMore = () => {
    setTimeout(() => {
      setItemsToShow((prevItemsToShow) => prevItemsToShow + 15);
    }, 2500);
  };

  const renderItems = () => {
    if (filter.length === 0) {
      return (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          <p>No results found</p>
        </div>
      );
    }

    return filter.map((item) => (
      <div className="card--content" key={item.id}>
        <div className="top--content">
          {item.profile_photo ? (
            <img src={item.profile_photo} alt="" className="card--img" />
          ) : (
            <FaUserCircle className="card--img" />
          )}
          <div className="card--details">
            <h5>{`${item.firstname} ${item.lastname}`}</h5>
            <p id="occupation">{item.occupation}</p>
            <p>{item.location}</p>
          </div>
        </div>
        <div className="bottom--content">
          <p>{item.Description}</p>
          <LinkContainer to={`viewProfile/${item.id}`}>
            <button
              className="card--btn"
              onClick={() => navigate("viewProfile")}
            >
              View Profile
            </button>
          </LinkContainer>
        </div>
      </div>
    ));
  };

  return (
    <div className="card--container">
      <Container>
        <Searchbar handleSearch={handleSearch} />
        <div className="card--card">{renderItems()}</div>
        <div className="load--btn">
          {!search && itemsToShow < artisan.length && (
            <button onClick={handleLoadMore}>Load more</button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Home;
