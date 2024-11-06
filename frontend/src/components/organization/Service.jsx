import Accordion from "react-bootstrap/Accordion";
import axios from "axios";
import { useState , useEffect} from "react";
const Service = ({ service }) => {
  const[solved, setSolved] = useState(0);
  const[unsolved, setUnsolved] = useState(0);
  const fetchIssues = async () => {
    try {
      const response = await axios.get("http://localhost:2000/api/issues");
      const issues = response.data;

      const solved = issues.filter((issue) => issue.status === "closed" && issue.issueServiceId === service.sId);
      const unsolved = issues.filter((issue) => issue.status !== "closed" && issue.issueServiceId === service.sId);

      setSolved(solved.length);
      setUnsolved(unsolved.length);
    } catch (e) {
      console.log("Didn't fetch the issues");
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);
  return (
    <>
      <Accordion.Item eventKey={service.sId}>
        <Accordion.Header>{service.sName}</Accordion.Header>
        <Accordion.Body>
          <p className="text-muted mb-3 border-bottom border-2">
            <span className="fw-bold fs-7">About:</span> {service.sDescription}
          </p>

          <p className="text-primary mb-3 border-bottom border-2">
            <span className="fw-bold fs-7">Email:</span> {service.sEmail}
          </p>
          <p className="text-info mb-3 border-bottom border-2">
            <span className="fw-bold fs-7">Service Contact Number:</span>{" "}
            {service.sPhno}
          </p>
          <p className="text-success mb-3 border-bottom border-2">
            <span className="fw-bold fs-7">Total Number of Employees:</span>{" "}
            {service.sEmpIds.length}
          </p>
          <p className="text-danger mb-3 border-bottom border-2">
            <span className="fw-bold fs-7">Total Number of Issues Raised:</span>{" "}
            {service.sIssueIds.length}
          </p>
          {/* Assuming the following are placeholders */}

          <p className="text-warning mb-3 border-bottom border-2">
            <span className="fw-bold fs-7">Total Number of Issues Solved:</span>{" "}
            {solved}
          </p>
          <p className="text-secondary mb-3 border-bottom border-2">
            <span className="fw-bold fs-7">
              Total Number of Unsolved Issues:
            </span>{" "}
            {unsolved}
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};

export default Service;
