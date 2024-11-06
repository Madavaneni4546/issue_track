import axios from "axios";
import { useRef, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/issue-body.css";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IssueBody = ({ issue, status }) => {
  const descRef = useRef();

  const [issueDesc, setIssueDesc] = useState(issue.issueDesc);
  const [issueStatus, setIssueStatus] = useState(status ? status.status : "");
  const [currIssue, setCurrIssue] = useState(issue);

  const handleDelete = async () => {
    setCurrIssue();
    try {
      await axios.delete(`http://localhost:2000/api/issues/${issue.issueId}`);
      toast.success("Deleted successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } catch (e) {
      console.log(e);
      toast.warn("Failed to delete", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  const handleEditIssue = async () => {
    setIssueDesc(descRef.current.value);
    const newIssue = {
      issueDesc: descRef.current.value,
    };
    descRef.current.value = "";
    console.log(newIssue);
    try {
      await axios.put(
        `http://localhost:2000/api/issues/${issue.issueId}`,
        newIssue
      );
      toast.success("Updated successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    } catch (e) {
      console.log(e);
      toast.warn("Failed to update", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  if (!currIssue) return;
  return (
    <Accordion.Item
      eventKey={issue.issueId}
      key={issue.issueId}
      className="issue-item roboto-slab-medium">
      <Accordion.Header className="issue-header roboto-slab-medium">
        <p className="issue-header-1 ">{issue.issueName} </p>
      </Accordion.Header>
      <Accordion.Body className="issue-body">
        <Card className="text-center issue-card">
          <Card.Header className="issue-card-header">
            <p className="issue-card-para-1 ">
              Issue Id <p className="issue-card-para-2">{issue.issueId} </p>
            </p>
            <p className="issue-card-para-1">
              Status Id
              <p className="issue-card-para-2">{issue.issueStatusId}</p>
            </p>
            <p className="issue-card-para-1">
              Employee Id
              <p className="issue-card-para-2">{issue.connectedTo} </p>
            </p>
          </Card.Header>
          <Card.Body className="issue-card-body">
            <Card.Text className="issue-card-text">{issueDesc}</Card.Text>
            <Button
              className="issue-card-button-1"
              variant="primary"
              style={{ margin: "10px" }}
              onClick={handleDelete}>
              Delete
            </Button>
            <Button
              className="issue-card-button-2"
              variant="secondary"
              style={{ margin: "10px" }}
              onClick={handleEditIssue}>
              Edit Issue
            </Button>
            {!status.statusFile ? null : (
              <Button
                className="issue-card-button-3"
                variant="info"
                style={{ margin: "10px" }}
                onClick={() =>
                  window.open(
                    `http://localhost:2000/files/${status.statusFile}`,
                    "_blank"
                  )
                }>
                Show Pdf
              </Button>
            )}
            <div>
              <input
                type="text"
                placeholder="Enter your issue here"
                className="issue-card-input"
                ref={descRef}></input>
            </div>
          </Card.Body>

          <Card.Footer className="text-muted issue-card-header">
            <p className="issue-card-para-1 ">
              Status Description
              <p className="issue-card-para-2">
                {status ? status.statusDescription : ""}{" "}
              </p>
            </p>
            <p className="issue-card-para-1 ">
              Status <p className="issue-card-para-2">{issueStatus}</p>
            </p>
          </Card.Footer>
        </Card>
      </Accordion.Body>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="Bounce"
      />
    </Accordion.Item>
  );
};

export default IssueBody;
