// 



import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import { SearchContext } from "../context/Search";

const EmpNavbar = ({
	handleAllIssues,
	handleSolvedIssues,
	handleUnsolvedIssues,
}) => {
	const { setSearchTerm } = useContext(SearchContext);
	const navigate = useNavigate();  // Initialize useNavigate

	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('role'); 
		localStorage.removeItem('empId');
		navigate('/');
	};

	console.log("Received props:", {
		handleAllIssues,
		handleSolvedIssues,
		handleUnsolvedIssues,
	});

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container fluid>
				<Navbar.Brand href="#">Issue Tracker</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Button
							style={{ margin: "10px" }}
							variant="outline-info"
							onClick={handleAllIssues}
						>
							All Issues
						</Button>
						<Button
							style={{ margin: "10px" }}
							variant="outline-success"
							onClick={handleSolvedIssues}
						>
							Solved Issues
						</Button>
						<Button
							style={{ margin: "10px" }}
							variant="outline-danger"
							onClick={handleUnsolvedIssues}
						>
							Unsolved Issues
						</Button>
						<Button
							style={{ margin: "10px" }}
							variant="outline-secondary"
							onClick={handleLogout}
						>
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

export default EmpNavbar;
