import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/HomeAboutUs.css";

// import homePic1 from "./images/homePic1.png";
function HomeWhatWeDo() {
  return (
    <Container className="about-us" id="what-we-do">
      <Row>
        <Col xs={6} className="right-side">
          <img
            src={`${process.env.PUBLIC_URL}/images/homePic2.png`}
            alt="Failed to load the image"
            className="home-image1"
          />
        </Col>
        <Col xs={6} className="left-side">
          <h2 className="heading1">What We Do</h2>
          <p className="para1">
            <ul>
              <li>Comprehensive Issue Tracking</li>
              <li>Real-Time Collaboration</li>
              <li>Customizable Workflows</li>
              <li>Insightful Analytic</li>
              <li>User-Friendly Interface</li>
            </ul>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeWhatWeDo;
