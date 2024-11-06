import { useRef, useState } from "react";
import "../styles/raise-ticket.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SelectOrg from "./SelectOrg";
import SelectService from "./SelectService";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const RaiseTicket = ({ userId }) => {
  // handleIssues();
  // console.log(handleIssues);
  const [orgId, setOrgId] = useState();
  const [serviceId, setServiceId] = useState();
  // const emailRef = useRef();
  const nameRef = useRef();
  const descRef = useRef();
  const [file, setFile] = useState("");

  const handleOrgId = (id) => {
    setOrgId(id);
  };
  const handleServiceId = (id) => {
    setServiceId(id);
  };

  //function to download raised ticket
  const handleDownload = () => {
    try {
      const capture = document.querySelector(".download-ticket");
      html2canvas(capture).then((canvas) => {
        const imgData = canvas.toDataURL("img/png");
        const doc = new jsPDF("p", "mm", "a4");
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
        doc.save("raisedticket.pdf");
      });
      toast.success("Ticket downloaded successfully", {
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
    } catch (error) {
      console.log(error);
      toast.warn("Failed to download the ticket", {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("issueName", nameRef.current.value);
    formData.append("issueDesc", descRef.current.value);
    formData.append("createdBy", userId);
    formData.append("status", "notopened");
    formData.append("issueOrgId", orgId);
    formData.append("issueServiceId", serviceId);
  
    if (file) {
      formData.append("file", file);
    }
  
    try {
      const response = await axios.post(
        "http://localhost:2000/api/user/raise-ticket",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      toast.success("Ticket raised successfully", {
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
  
      // Clear the form after successful submission
      nameRef.current.value = "";
      descRef.current.value = "";
      setFile(null);
      setOrgId(null);
      setServiceId(null);
    } catch (error) {
      console.log(error);
      toast.warn("Failed to raise ticket", {
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
    <Form className="raise-ticket-form">
      <div className="download-ticket">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Issue Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Eg: Payment Failed"
            ref={nameRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Select Organisation</Form.Label>
          <SelectOrg handleOrgId={handleOrgId} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
          <Form.Label>Select Service</Form.Label>
          <SelectService orgId={orgId} handleServiceId={handleServiceId} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Ticket Description</Form.Label>
          <Form.Control as="textarea" rows={3} ref={descRef} />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Upload File</Form.Label>
          <Form.Control
            type="file"
            accept="application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </Form.Group>
      </div>
      <Button variant="danger" type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
      </Button>{" "}
      <Button variant="primary" onClick={handleDownload}>
        Download
      </Button>
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
    </Form>
  );
};

export default RaiseTicket;
