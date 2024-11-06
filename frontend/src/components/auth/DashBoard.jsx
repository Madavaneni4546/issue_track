
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const OrgNavbar = ({
  handleAllServices,
  handleAllEmployees,
	handleAllIssues,
	// handleSolvedIssues,
	// handleUnsolvedIssues,
  handleAddEmployee,
  handleAddService,
	// handleEditEmployee,
	// handleEditService,
}) => {
	console.log("Received props:", {
		handleAllServices,
		handleAllEmployees,
		handleAllIssues,
		// handleSolvedIssues,
		// handleUnsolvedIssues,
    handleAddEmployee,
    handleAddService,
		// handleEditEmployee,
		// handleEditService,
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
							variant="outline-primary"
							onClick={handleAllServices}
						>
							Services
						</Button>
          <Button
							style={{ margin: "10px" }}
							variant="outline-primary"
							onClick={handleAllEmployees}
						>
							Employees
						</Button>
						<Button
							style={{ margin: "10px" }}
							variant="outline-info"
							onClick={handleAllIssues}
						>
							Issues
						</Button>
						{/* <Button
							style={{ margin: "10px" }}
							variant="outline-success"
							onClick={handleSolvedIssues}
						>
							Issues
						</Button>
						<Button
							style={{ margin: "10px" }}
							variant="outline-danger"
							onClick={handleUnsolvedIssues}
						>
							Issues
						</Button> */}
						<Button
							style={{ margin: "10px" }}
							variant="outline-danger"
							onClick={handleAddService}
						>
            Add/Edit Service
						</Button>
						{/* <Button
							style={{ margin: "10px" }}
							variant="outline-danger"
							onClick={handleEditService}
						>
            Add/Edit 
						</Button> */}
						<Button
							style={{ margin: "10px" }}
							variant="outline-danger"
							onClick={handleAddEmployee}
              >
							Add/Edit Employee
						</Button>
					</Nav>
					<Form className="d-flex">
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-secondary">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default OrgNavbar;
