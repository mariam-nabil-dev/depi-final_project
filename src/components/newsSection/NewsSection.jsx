import { Container, Row, Col, Card } from "react-bootstrap";

// Import images
import Image1 from "../../assets/img/Gemini_Generated_Image_90576r90576r9057.jpeg";
import Image2 from "../../assets/img/Gemini_Generated_Image_43pkjf43pkjf43pk.jpeg";
import Image3 from "../../assets/img/Gemini_Generated_Image_2uiqec2uiqec2uiq.jpeg";
import Image4 from "../../assets/img/Gemini_Generated_Image_v51h75v51h75v51h.jpeg";

import "./newsSection.css"

const NewsSection = () => {
  const newsData = [
    {
      image: Image1,
      title:
        "Ready to Explore the World? Launching Our Travel Blog This January 2025 - Stay Tuned for Adventure!",
      date: "January 25, 2025",
    },
    {
      image: Image2,
      title:
        "Polaris Teams Up with Leading Airlines to Bring You Exclusive Travel Deals",
      date: "February 2, 2025",
    },
    {
      image: Image3,
      title:
        "Introducing a New Series Spotlighting Underrated Destinations for 2025",
      date: "March 28, 2025",
    },
    {
      image: Image4,
      title:
        "Introducing Our Latest Update: Enhanced Search Filters for Quicker Travel Planning on Polaris",
      date: "April 6, 2025",
    },
  ];

  return (
    <Container>
      <section className="news">
        <h2 className="mb-5">
          <span>Polaris</span> News
        </h2>
        <Row className="d-flex justify-content-between">
          {newsData.map((news, index) => (
            <Col key={index} xs={12} md={6} className="mb-4">
              <Card>
                <Card.Img variant="top" src={news.image} alt={news.title} />
                <Card.Body>
                  <Card.Title>{news.title}</Card.Title>
                  <Card.Text>{news.date}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
};

export default NewsSection;
