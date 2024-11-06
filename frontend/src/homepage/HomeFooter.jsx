import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/HomeFooter.css"
function HomeFooter() {
  return (
    <div className="footer" id="footer">
      <Container>
        <Row md={4}>
          <Col>
            <h5 className="heading2">Navigate</h5>
            <ul style={{ lineStyleType: "none" }}>
              <li>
                <a href="#about-us" className="footer-ref">About Us</a>
              </li>
              <li>
                <a href="#what-we-do" className="footer-ref">What We DO</a>
              </li>
              <li>
                <a href="#achievements" className="footer-ref">Achievements</a>
              </li>
              <li>
                <a href="#our-team" className="footer-ref">Our Team</a>
              </li>
              <li>
                <a href="#contact-us" className="footer-ref">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h5 className="heading2">Services</h5>
            <ul>
              <li>Comprehensive Issue Tracking</li>
              <li>Real-Time Collaboration</li>
              <li>Customizable Workflows</li>
              <li>Insightful Analytic</li>
              <li>User-Friendly Interface</li>
            </ul>
          </Col>
          <Col>
            <h5 className="heading2">Location</h5>
            <ul>
              <li>Telangana</li>
              <li>RangaReddy</li>
              <li>Ibrahimpatnam</li>
              <li>CVR College Of Engineering</li>
              <li>501510</li>
            </ul>
          </Col>
          <Col className="heading2">
            <h5>Reach Us</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30489.663837677967!2d78.59961855!3d17.208696999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba659868b4727%3A0xf39a771705e23170!2sCVR%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1718439580119!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
          @copyright Team Issue Tracker 2024
        </Row>
      </Container>
    </div>
  );
}

export default HomeFooter;
