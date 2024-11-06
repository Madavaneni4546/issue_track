import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/HomeNavbar.css"
const HomeNavbar =() => {
  return (
    <>
      <Navbar data-bs-theme="light" className='home-navbar'>
        <Container className="home-navbar2">
          <Navbar.Brand href="" >Issue Tracker</Navbar.Brand>
          <Nav className="me-auto nav-links" >
            <Nav.Link href="#about-us" className='nav-link'>About Us</Nav.Link>
            <Nav.Link href="#what-we-do" className='nav-link'>What we do</Nav.Link>
            <Nav.Link href="#achievements" className='nav-link'>Achievements</Nav.Link>
            <Nav.Link href="#our-team" className='nav-link'>Team</Nav.Link>
            <Nav.Link href="#contact-us" className='nav-link'>Contact Us</Nav.Link>
            <Link to='/orgregister' className='nav-link'>Signin/Signup</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default HomeNavbar;