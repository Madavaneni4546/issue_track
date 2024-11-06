// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { useContext } from "react";
// import { SearchContext } from "../context/Search";
// const UserNavbar = ({
//   handleAllIssues,
//   handleSolvedIssues,
//   handleUnsolvedIssues,
//   handleIssues,
// }) => {
//   console.log("Received props:", {
//     handleAllIssues,
//     handleSolvedIssues,
//     handleUnsolvedIssues,
//     handleIssues,
//   });
//   const { setSearchTerm } = useContext(SearchContext);
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">Issue Tracker</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: "100px" }}
//             navbarScroll>
//             <Button
//               style={{ margin: "10px" }}
//               variant="outline-danger"
//               onClick={handleIssues}>
//               Raise Issue
//             </Button>
//             <Button
//               style={{ margin: "10px" }}
//               variant="outline-info"
//               onClick={handleAllIssues}>
//               All Issues
//             </Button>
//             <Button
//               style={{ margin: "10px" }}
//               variant="outline-success"
//               onClick={handleSolvedIssues}>
//               Solved Issues
//             </Button>
//             <Button
//               style={{ margin: "10px" }}
//               variant="outline-danger"
//               onClick={handleUnsolvedIssues}>
//               Unsolved Issues
//             </Button>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             {/* <Button variant="outline-secondary">Search</Button> */}
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default UserNavbar;


import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { SearchContext } from "../context/Search";
import { useNavigate } from "react-router-dom";

const UserNavbar = ({
  handleAllIssues,
  handleSolvedIssues,
  handleUnsolvedIssues,
  handleIssues,
}) => {
  console.log("Received props:", {
    handleAllIssues,
    handleSolvedIssues,
    handleUnsolvedIssues,
    handleIssues,
  });

  const { setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('role'); 
    localStorage.removeItem('userId');
    navigate('/');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Issue Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Button
              style={{ margin: "10px" }}
              variant="outline-danger"
              onClick={handleIssues}>
              Raise Issue
            </Button>
            <Button
              style={{ margin: "10px" }}
              variant="outline-info"
              onClick={handleAllIssues}>
              All Issues
            </Button>
            <Button
              style={{ margin: "10px" }}
              variant="outline-success"
              onClick={handleSolvedIssues}>
              Solved Issues
            </Button>
            <Button
              style={{ margin: "10px" }}
              variant="outline-danger"
              onClick={handleUnsolvedIssues}>
              Unsolved Issues
            </Button>
            <Button
              style={{ margin: "10px" }}
              variant="outline-secondary"
              onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <Button variant="outline-secondary">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;

