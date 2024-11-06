import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SelectService from "../user/SelectService";
import axios from "axios";
const OrgEditEmployee = ({ orgId }) => {
  const [serviceId, setServiceId] = useState();
  const emailRef = useRef();
  const nameRef = useRef();
  const idRef = useRef();
  const contactRef = useRef();

  const handleServiceId = (id) => {
    setServiceId(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEmployee = {
      empId : idRef.current.value,
      empName : nameRef.current.value,
      empEmail : emailRef.current.value,
      empPhno : contactRef.current.value,
      empServiceId : serviceId,
    };
    console.log(newEmployee);
    await axios
      .put(`http://localhost:2000/api/employee/${idRef.current.value}`, newEmployee)
      .then((res) => {
        toast.success("Service modified successfully", {
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
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Employee Id </Form.Label>
        <Form.Control type="text" placeholder="Eg: 123456" ref={idRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Eg: Payment Failed"
          ref={nameRef}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Eg: name@example.com" ref = {emailRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="text" placeholder="Eg: 99999xxxxx" ref = {contactRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
        <Form.Label>Select Service</Form.Label>
        <SelectService orgId={orgId} handleServiceId={handleServiceId} />
      </Form.Group>
      <Button variant="danger" type="submit" onClick={(e) => handleSubmit(e)}>
        Submit
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

export default OrgEditEmployee;
