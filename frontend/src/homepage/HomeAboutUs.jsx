import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/HomeAboutUs.css"
// import homePic1 from "./images/homePic1.png";
function HomeAboutUs() {
  return (
    <Container className="about-us" id="about-us">
      <Row>
        <Col xs={6} className="left-side">
          <h2 className="heading1">About Us</h2>
          <p className="para1">
          We provide businesses with an intuitive and efficient tool to track, manage, and resolve project issues promptly. We believe that effective issue management is crucial for the success of any project, and our goal is to empower teams to achieve seamless project execution through our innovative platform.
          </p>
        </Col>
        <Col xs={6} className="right-side">
          <img src={`${process.env.PUBLIC_URL}/images/homePic1.png`} alt="Failed to load the image" className="home-image1"/>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeAboutUs;
