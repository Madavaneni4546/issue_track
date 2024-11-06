import React, { useState, useContext } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { SearchContext } from "../context/Search";

const OrgEmpBody = ({ emp, handleDelete }) => {
  const searchContext = useContext(SearchContext);
  const [currEmp, setCurrEmp] = useState(emp);

  const handleDeleteClick = () => {
    handleDelete(emp.empId);
    setCurrEmp(null);
  };

  // Filtering logic based on search term
  if (!currEmp) return null; // Return null if currEmp is null

  if (
    searchContext.searchTerm &&
    !emp.empId.includes(searchContext.searchTerm) &&
    !emp.empName.includes(searchContext.searchTerm) &&
    !emp.empPhno.includes(searchContext.searchTerm) &&
    !emp.empServiceId.includes(searchContext.searchTerm) &&
    !emp.empStatus.includes(searchContext.searchTerm)
  ) {
    return null; // Return null if emp does not match search term
  }

  return (
    <Col key={emp.empId} xs={12} sm={6} md={4} lg={3} style={{margin:"10px"}}>
      <Card style={{ margin: "10px", width: "400px", height: "360px", border: "2px solid #ccc" }}>
        <Card.Body style={{ margin: "10px" }}>
          <Card.Title style={{ fontSize: "24px" }}>{emp.empName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{emp.empId}</Card.Subtitle>
          <Card.Text>
            <p style={{ fontSize: "20px", color: "#6c757d" }}>Phone Number: {emp.empPhno}</p>
            <hr />
            <p style={{ fontSize: "20px", color: "#0d6efd" }}>Service Id: {emp.empServiceId}</p>
            <hr />
            <p style={{ fontSize: "20px", color: "#dc3545" }}>Number of issues allocated: {emp.empIssueId.length}</p>
            {/* <hr /> */}
            {/* Assuming empStatus is a property of emp */}
            {/* <p style={{ fontSize: "20px", color: "#198754" }}>Status: {emp.empStatus}</p> */}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="dark" onClick={handleDeleteClick}>
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default OrgEmpBody;





// import { useState } from "react";
// import { Card, Col, Button } from "react-bootstrap";
// import { SearchContext } from "../context/Search";
// const OrgEmpBody = ({ emp, handleDelete }) => {
//   const [searchTerm, setSearchTerm] = useState(SearchContext);
//   const [currEmp, setCurrEmp] = useState(emp);
//   const handleDeleteClick = () => {
//     handleDelete(emp.empId);
//     setCurrEmp();
//   };
//   if (!currEmp) return;
//   if (
//     searchTerm !== "" &&
//     !emp.empId.includes(searchTerm) &&
//     !emp.empName.includes(searchTerm) &&
//     !emp.empPhno.includes(searchTerm) &&
//     !emp.empServiceId.includes(searchTerm) &&
//     !emp.empStatus.includes(searchTerm)
//   )
//     return;
//   return (
//     <>
//       <Col key={emp.empId} xs={12} sm={6} md={4} lg={3}>
//         <Card style={{ margin: "10px" }}>
//           <Card.Body style={{ margin: "10px" }}>
//             <Card.Title>{emp.empName}</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">
//               {emp.empId}
//             </Card.Subtitle>
//             <Card.Text>
//               <p>Phone Number : {emp.empPhno}</p>
//               <hr />
//               <p>Service Id : {emp.empServiceId}</p>
//               <hr />
//               <p>Number of issues allocated : {emp.empIssueId.length}</p>
//               <hr />
//               <p>Status : {emp.empStatus}</p>
//               <hr />
//             </Card.Text>
//           </Card.Body>
//           <Card.Footer>
//             <Button variant="dark" onClick={() => handleDeleteClick()}>
//               Delete
//             </Button>
//           </Card.Footer>
//         </Card>
//       </Col>
//     </>
//   );
// };

// export default OrgEmpBody;
