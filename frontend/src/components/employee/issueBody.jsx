import axios from "axios";
import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IssueBody = ({ issue, status }) => {
  const [issueId, setIssueId] = useState(issue.issueId ? issue.issueId : "");
  const [statusId, setStatusId] = useState(
    issue.issueStatusId ? issue.issueStatusId : ""
  );
  const [empId, setEmpId] = useState(
    issue.connectedTo ? issue.connectedTo : ""
  );
  const [issueDesc, setIssueDesc] = useState(
    issue.issueDesc ? issue.issueDesc : ""
  );
  const [statusDesc, setStatusDesc] = useState(
    status ? (status.statusDescription ? status.statusDescription : "") : ""
  );
  const [issueStatus, setIssueStatus] = useState(
    status ? (status.status ? status.status : "") : ""
  );
  const [file, setFile] = useState(null);
  const descRef = useRef();

  const handleAccept = async () => {
    const newStatus = {
      status: "open",
      statusDescription: "",
    };
    setIssueStatus(newStatus.status);
    setStatusDesc(newStatus.statusDescription);

    try {
      await axios.put(
        `http://localhost:2000/api/status/${issue.issueId}`,
        newStatus
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
      // alert("Updated successfully");
    } catch (e) {
      // alert(e);
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

  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      // alert("Please select a file to upload.");
      toast.warn("Select a file to upload", {
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
      return;
    }

    const formData = new FormData();
    formData.append("status", "open");
    formData.append("statusDescription", statusDesc);
    formData.append("file", file);

    try {
      const response = await axios.put(
        `http://localhost:2000/api/status/${issue.issueId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      toast.success("File uploaded successfully", {
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
      // alert("File uploaded successfully");
    } catch (error) {
      console.error(error);
      // alert("File upload failed");
      toast.warn("Failed to upload file", {
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

  const handleResponse = async () => {
    const newStatus = {
      status: "open",
      statusDescription: descRef.current.value,
    };
    setIssueStatus(newStatus.status);
    setStatusDesc(newStatus.statusDescription);
    descRef.current.value = "";

    try {
      await axios.put(
        `http://localhost:2000/api/status/${issue.issueId}`,
        newStatus
      );
      // alert("Updated successfully");
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
      // alert(e);
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

  const handleSolved = async () => {
    const newStatus = {
      status: "closed",
      statusDescription: "Your Issue is solved",
    };
    setIssueStatus(newStatus.status);
    setStatusDesc(newStatus.statusDescription);

    try {
      await axios.put(
        `http://localhost:2000/api/status/${issue.issueId}`,
        newStatus
      );
      await axios.put(`http://localhost:2000/api/issues/${issue.issueId}`, {
        status: "closed",
      });
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
      // alert("Updated successfully");
    } catch (e) {
      // alert(e);
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

  return (
    <Card className="text-center  issue-card">
      <Card.Header className="issue-card-header">
        <p className="issue-card-para-1 ">
          Issue Id <p className="issue-card-para-2">{issueId} </p>
        </p>
        <p className="issue-card-para-1">
          Status Id
          <p className="issue-card-para-2">{statusId}</p>
        </p>
        <p className="issue-card-para-1">
          Employee Id
          <p className="issue-card-para-2">{empId}</p>
        </p>
      </Card.Header>
      <Form>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload File</Form.Label>
          <Form.Control
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </Form.Group>
      </Form>
      <Card.Body className="issue-card-body">
        <Card.Text className="issue-card-text">{issueDesc}</Card.Text>
        <Button
          className="issue-card-button-1"
          variant="primary"
          style={{ margin: "10px" }}
          onClick={handleAccept}>
          Accept
        </Button>
        <Button
          className="issue-card-button-1"
          variant="secondary"
          style={{ margin: "10px" }}
          onClick={handleResponse}>
          Add Response
        </Button>
        <Button
          className="issue-card-button-1"
          variant="success"
          style={{ margin: "10px" }}
          onClick={handleSolved}>
          Solved
        </Button>
        <Button
          className="issue-card-button-1"
          variant="dark"
          style={{ margin: "10px" }}
          onClick={handleFileUpload}>
          Upload File
        </Button>
        {issue.issueFileName && (
          <Button
            className="issue-card-button-1"
            variant="info"
            style={{ margin: "10px" }}
            onClick={() =>
              window.open(
                `http://localhost:2000/files/${issue.issueFileName}`,
                "_blank"
              )
            }>
            Show Pdf
          </Button>
        )}
        <input
          type="text"
          placeholder="Enter your response here"
          style={{
            width: "50%",
            textAlign: "center",
            height: "40px",
          }}
          ref={descRef}></input>
      </Card.Body>
      <Card.Footer className="text-muted issue-card-header">
        <p className="issue-card-para-1 ">
          Status Description
          <p className="issue-card-para-2">{status ? statusDesc : ""}</p>
        </p>
        <p className="issue-card-para-1 ">
          Status{" "}
          <p className="issue-card-para-2"> {status ? issueStatus : ""}</p>
        </p>
      </Card.Footer>

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
    </Card>
  );
};

export default IssueBody;
