import { CardGroup, Row } from "react-bootstrap";
import axios from "axios";
import { useContext } from "react";
import { SearchContext } from "../context/Search";
import OrgEmpBody from "./OrgEmpBody";
function OrgEmployees({ allEmployees }) {
  const handleDelete = async (empId) => {
    try {
      await axios.delete(`http://localhost:2000/api/employee/${empId}`);
    } catch (err) {
      // alert(err);
      console.log(err);
    }
  };
  const { searchTerm } = useContext(SearchContext);

  return (
    <>
        <Row>
          <CardGroup>
            {allEmployees.map((emp) => ( emp.empName.toLowerCase().startsWith(searchTerm.toLowerCase()) ? <OrgEmpBody emp={emp} handleDelete={handleDelete} /> : null
            ))}
          </CardGroup>
        </Row>
    </>
  );
}

export default OrgEmployees;
