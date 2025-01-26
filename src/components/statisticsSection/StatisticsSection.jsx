import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./statisticsSection.css";
const StatisticsSection = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter-value");

    const animateCounters = () => {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-count");
        const duration = 2000;
        const increment = target / (duration / 16);

        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(document.querySelector(".section-items"));
  }, []);

  return (
    <section className="container-fluid statistics py-8 mb-5">
      <Container>
        <div className="section-text my-9">
          <h2 className="mb-7">
            <span>Polaris</span> Key Statistics
          </h2>
          <p className="mb-7">
            Polaris is an ever-expanding family of passionate explorers, united
            by a love for adventure and sharing unforgettable travel
            experiences, tips, and stories from every corner of the globe.
          </p>
          <span className="mb-7">As of January, 2025</span>
        </div>

        <div className="section-items mb-20">
          <Row className="d-flex justify-content-between">
            <Col xl={2} xs={5} className="counter-item">
              <strong className="counter-value" data-count="5">
                0
              </strong>
              <span>M+</span>
              <p>Daily Active</p>
            </Col>
            <Col xl={2} xs={5} className="counter-item">
              <strong className="counter-value" data-count="20">
                0
              </strong>
              <span>M+</span>
              <p>Weekly Active</p>
            </Col>
            <Col xl={2} xs={5} className="counter-item">
              <strong className="counter-value" data-count="100">
                0
              </strong>
              <span>M+</span>
              <p>Annual Active</p>
            </Col>
            <Col xl={2} xs={5} className="counter-item">
              <strong className="counter-value" data-count="30">
                0
              </strong>
              <span>M+</span>
              <p>Posts & Blogs</p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default StatisticsSection;
