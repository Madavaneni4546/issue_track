// import { useRef, useState } from "react";
// import { Button, Form } from "react-bootstrap";

// import { Bounce, ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import SelectService from "../user/SelectService";
// import axios from "axios";

// const OrgAddEmployee = ({ orgId }) => {
//   const [serviceId, setServiceId] = useState();
//   const emailRef = useRef();
//   const nameRef = useRef();
//   const idRef = useRef();
//   const pwdRef = useRef();
//   const contactRef = useRef();

//   const handleServiceId = (id) => {
//     setServiceId(id);
//   };

//   const handleEdit = async (e) => {
//     e.preventDefault();
//     const newEmployee = {
//       empId: idRef.current.value,
//       empName: nameRef.current.value,
//       empEmail: emailRef.current.value,
//       empPassword: pwdRef.current.value,
//       empPhno: contactRef.current.value,
//       taskCount: 0,
//       empOrgId: orgId,
//       empServiceId: serviceId,
//     };
//     console.log(newEmployee);
//     await axios
//       .put(
//         `http://localhost:2000/api/employee/${idRef.current.value}`,
//         newEmployee
//       )
//       .then((res) => {
//         toast.success("Employee data edited successfully", {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//           transition: Bounce,
//         });
//         console.log(res.data);
//       })
//       .catch((e) => {
//         toast.warn("Failed to edit Employee data", {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//           transition: Bounce,
//         });
//         console.log(e);
//       });
//   };

//   const handleAdd = async (e) => {
//     e.preventDefault();
//     const newEmployee = {
//       empId: idRef.current.value,
//       empName: nameRef.current.value,
//       empEmail: emailRef.current.value,
//       empPassword: pwdRef.current.value,
//       empPhno: contactRef.current.value,
//       taskCount: 0,
//       empOrgId: orgId,
//       empServiceId: serviceId,
//     };
//     console.log(newEmployee);
//     await axios
//       .post(`http://localhost:2000/api/employee`, newEmployee)
//       .then((res) => {
//         toast.success("Employee added successfully", {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//           transition: Bounce,
//         });
//         console.log(res.data);
//       })
//       .catch((e) => {
//         toast.warn("Failed to add Employee", {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//           transition: Bounce,
//         });
//         console.log(e);
//       });
//   };

//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
//       <div style={{ width: "30rem" }} className="p-4 shadow bg-light">
//         <h2 className="text-center mb-4" style={{ color: "#17a2b8", fontWeight: "bold" }}>Add/Edit Employee</h2>
//         <Form>
//           <Form.Group className="mb-3" controlId="formEmployeeId">
//             <Form.Label className="fw-bold">Employee Id</Form.Label>
//             <Form.Control type="text" placeholder="Eg: 123456" ref={idRef} />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formEmployeeName">
//             <Form.Label className="fw-bold">Employee Name</Form.Label>
//             <Form.Control type="text" placeholder="Eg: John Doe" ref={nameRef} />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formEmail">
//             <Form.Label className="fw-bold">Email address</Form.Label>
//             <Form.Control type="email" placeholder="Eg: name@example.com" ref={emailRef} />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formContact">
//             <Form.Label className="fw-bold">Contact Number</Form.Label>
//             <Form.Control type="text" placeholder="Eg: 99999xxxxx" ref={contactRef} />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formService">
//             <Form.Label className="fw-bold">Select Service</Form.Label>
//             <SelectService orgId={orgId} handleServiceId={handleServiceId} />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formPassword">
//             <Form.Label className="fw-bold">Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" ref={pwdRef} />
//           </Form.Group>
//           <div className="d-flex justify-content-between">
//             <Button variant="info" type="submit" onClick={(e) => handleEdit(e)}>
//               Edit
//             </Button>
//             <Button variant="info" type="submit" onClick={(e) => handleAdd(e)}>
//               Add
//             </Button>
//           </div>
//         </Form>
//       </div>
      
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//         transition="Bounce"
//       />
//     </div>
//   );
// };

// export default OrgAddEmployee;



import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SelectService from "../user/SelectService";
import axios from "axios";

const OrgAddEmployee = ({ orgId }) => {
  const [serviceId, setServiceId] = useState();
  const emailRef = useRef();
  const nameRef = useRef();
  const idRef = useRef();
  const pwdRef = useRef();
  const contactRef = useRef();

  const handleServiceId = (id) => {
    setServiceId(id);
  };

  const resetForm = () => {
    idRef.current.value = "";
    nameRef.current.value = "";
    emailRef.current.value = "";
    pwdRef.current.value = "";
    contactRef.current.value = "";
    setServiceId(""); // Clear service selection
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const newEmployee = {
      empId: idRef.current.value,
      empName: nameRef.current.value,
      empEmail: emailRef.current.value,
      empPassword: pwdRef.current.value,
      empPhno: contactRef.current.value,
      taskCount: 0,
      empOrgId: orgId,
      empServiceId: serviceId,
    };
    console.log(newEmployee);
    await axios
      .put(
        `http://localhost:2000/api/employee/${idRef.current.value}`,
        newEmployee
      )
      .then((res) => {
        toast.success("Employee data edited successfully", {
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
        resetForm(); // Clear form after successful edit
      })
      .catch((e) => {
        toast.warn("Failed to edit Employee data", {
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
        console.log(e);
      });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const newEmployee = {
      empId: idRef.current.value,
      empName: nameRef.current.value,
      empEmail: emailRef.current.value,
      empPassword: pwdRef.current.value,
      empPhno: contactRef.current.value,
      taskCount: 0,
      empOrgId: orgId,
      empServiceId: serviceId,
    };
    console.log(newEmployee);
    await axios
      .post(`http://localhost:2000/api/employee`, newEmployee)
      .then((res) => {
        toast.success("Employee added successfully", {
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
        resetForm(); // Clear form after successful add
      })
      .catch((e) => {
        toast.warn("Failed to add Employee", {
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
        console.log(e);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div style={{ width: "30rem" }} className="p-4 shadow bg-light">
        <h2 className="text-center mb-4" style={{ color: "#17a2b8", fontWeight: "bold" }}>Add/Edit Employee</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formEmployeeId">
            <Form.Label className="fw-bold">Employee Id</Form.Label>
            <Form.Control type="text" placeholder="Eg: 123456" ref={idRef} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmployeeName">
            <Form.Label className="fw-bold">Employee Name</Form.Label>
            <Form.Control type="text" placeholder="Eg: John Doe" ref={nameRef} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label className="fw-bold">Email address</Form.Label>
            <Form.Control type="email" placeholder="Eg: name@example.com" ref={emailRef} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formContact">
            <Form.Label className="fw-bold">Contact Number</Form.Label>
            <Form.Control type="text" placeholder="Eg: 99999xxxxx" ref={contactRef} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formService">
            <Form.Label className="fw-bold">Select Service</Form.Label>
            <SelectService orgId={orgId} handleServiceId={handleServiceId} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label className="fw-bold">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={pwdRef} />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="info" type="submit" onClick={(e) => handleEdit(e)}>
              Edit
            </Button>
            <Button variant="info" type="submit" onClick={(e) => handleAdd(e)}>
              Add
            </Button>
          </div>
        </Form>
      </div>
      
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
    </div>
  );
};

export default OrgAddEmployee;
